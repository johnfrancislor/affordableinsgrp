"use client";

import { useEffect, useState } from "react";

// Emails us when someone opens the demo site (pitch/engagement tracking), AND
// shows the visitor a visible notice that this view is being reported. The
// notice is deliberate: this collects an IP + approximate location, which is
// personal data, so the person seeing it is told. Covert collection is not a
// mode this component supports.
//
// Static-host friendly: everything runs in the browser, the IP/location lookup
// uses GeoJS, and the email is relayed by Web3Forms. The recipient is whoever
// owns the Web3Forms access key, so no email address lives in this code.
//
// Guards:
// - Only fires once per browser tab session, so page views don't spam emails.
// - Never fires on localhost or in `next dev`.
// - Does nothing when NEXT_PUBLIC_WEB3FORMS_KEY is unset.
// - Visitors can mute their own browser with the "Don't report my visits"
//   button in the notice (or by opening any page with ?notrack; ?track undoes
//   it). Muting also prevents this and future reports from that browser.

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
const SITE_NAME = "Affordable Insurance Group";
const MUTE_KEY = "visit-notify-off";
const ACK_KEY = "visit-notify-ack"; // notice dismissed/acknowledged
const SESSION_KEY = "visit-notified";

function storage(type) {
  try {
    return window[type];
  } catch {
    return null;
  }
}

function describeDevice(ua) {
  const os =
    /iPhone/.test(ua) ? "iPhone (iOS)" :
    /iPad/.test(ua) ? "iPad (iPadOS)" :
    /Android/.test(ua) ? "Android" :
    /Windows/.test(ua) ? "Windows" :
    /Mac OS X|Macintosh/.test(ua) ? "Mac (macOS)" :
    /CrOS/.test(ua) ? "ChromeOS" :
    /Linux/.test(ua) ? "Linux" : "Unknown OS";
  const type = /iPad|Tablet/.test(ua) ? "Tablet" : /Mobi|iPhone|Android/.test(ua) ? "Mobile" : "Desktop";
  return `${type} · ${os} · screen ${window.screen.width}×${window.screen.height}`;
}

function describeBrowser(ua) {
  const rules = [
    ["Edge", /Edg\/([\d.]+)/],
    ["Opera", /OPR\/([\d.]+)/],
    ["Samsung Internet", /SamsungBrowser\/([\d.]+)/],
    ["Firefox", /(?:Firefox|FxiOS)\/([\d.]+)/],
    ["Chrome", /(?:Chrome|CriOS)\/([\d.]+)/],
    ["Safari", /Version\/([\d.]+).*Safari/],
  ];
  for (const [name, re] of rules) {
    const m = ua.match(re);
    if (m) return `${name} ${m[1].split(".")[0]}`;
  }
  return "Unknown browser";
}

async function lookupIp() {
  try {
    const res = await fetch("https://get.geojs.io/v1/ip/geo.json", { cache: "no-store" });
    if (!res.ok) throw new Error(res.status);
    const g = await res.json();
    return {
      ip: g.ip || "Unavailable",
      location: [g.city, g.region, g.country].filter(Boolean).join(", ") || "Unavailable",
      isp: g.organization_name || "Unavailable",
      maps: g.latitude ? `https://maps.google.com/?q=${g.latitude},${g.longitude}` : "Unavailable",
    };
  } catch {
    // Usually an ad/privacy blocker; still send the rest of the details.
    return { ip: "Unavailable", location: "Unavailable", isp: "Unavailable", maps: "Unavailable" };
  }
}

async function sendVisit() {
  const ua = navigator.userAgent;
  const geo = await lookupIp();
  const now = new Date();
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

  await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: ACCESS_KEY,
      subject: `New visitor on ${SITE_NAME} (demo): ${geo.location}`,
      from_name: `${SITE_NAME} visit alert`,
      "IP Address": geo.ip,
      Location: geo.location,
      "Network / ISP": geo.isp,
      "Map (approx.)": geo.maps,
      Device: describeDevice(ua),
      Browser: describeBrowser(ua),
      "Date / Time (visitor local)": `${now.toLocaleString("en-US", { dateStyle: "full", timeStyle: "long" })} (${tz})`,
      "Date / Time (UTC)": now.toUTCString(),
      "Landing page": window.location.href,
      "Came from": document.referrer || "Direct (typed link / bookmark / chat app)",
      "User agent": ua,
    }),
    keepalive: true,
  }).catch(() => {});
}

export default function VisitNotifier() {
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    const local = storage("localStorage");
    const session = storage("sessionStorage");

    try {
      const params = new URLSearchParams(window.location.search);
      if (params.has("notrack")) local?.setItem(MUTE_KEY, "1");
      if (params.has("track")) local?.removeItem(MUTE_KEY);
    } catch {
      // ignore malformed query strings
    }

    // Do nothing unless we're actually set up to report, in production.
    if (!ACCESS_KEY || process.env.NODE_ENV !== "production") return;

    let muted = false;
    let hostname = "";
    try {
      hostname = window.location.hostname;
      muted = !!local?.getItem(MUTE_KEY);
    } catch {
      // treat storage errors as "not muted"
    }
    if (["localhost", "127.0.0.1", "[::1]"].includes(hostname)) return;
    if (muted) return;

    // Show the disclosure notice unless the visitor has already acknowledged it.
    // Scheduled off the effect body so it doesn't trigger a synchronous
    // cascading render (the decision depends on browser-only storage).
    let acknowledged = false;
    try {
      acknowledged = !!local?.getItem(ACK_KEY);
    } catch {
      // treat storage errors as "not acknowledged" so disclosure still shows
    }
    if (!acknowledged) queueMicrotask(() => setShowNotice(true));

    // Report at most once per tab session.
    let alreadySent = false;
    try {
      alreadySent = !!session?.getItem(SESSION_KEY);
    } catch {
      // ignore
    }
    if (alreadySent) return;
    try {
      session?.setItem(SESSION_KEY, "1");
    } catch {
      // ignore
    }

    sendVisit();
  }, []);

  const dismiss = () => {
    try {
      storage("localStorage")?.setItem(ACK_KEY, "1");
    } catch {
      // ignore
    }
    setShowNotice(false);
  };

  const mute = () => {
    try {
      const local = storage("localStorage");
      local?.setItem(MUTE_KEY, "1");
      local?.setItem(ACK_KEY, "1");
    } catch {
      // ignore
    }
    setShowNotice(false);
  };

  if (!showNotice) return null;

  return (
    <div
      role="status"
      className="fixed inset-x-3 bottom-3 z-[70] mx-auto max-w-xl rounded-xl border border-white/10 bg-ink/95 p-4 text-sm text-slate-200 shadow-xl backdrop-blur sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2"
    >
      <p className="leading-relaxed">
        <strong className="font-semibold text-white">Heads up:</strong> this is a
        private demo. Opening it notifies the people sharing it, along with your
        approximate location, device and browser. See our{" "}
        <a href="/privacy" className="underline hover:text-white">privacy notice</a>.
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={dismiss}
          className="rounded-md bg-brand-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-brand-500"
        >
          Got it
        </button>
        <button
          type="button"
          onClick={mute}
          className="rounded-md border border-white/15 px-3 py-1.5 text-xs font-medium text-slate-200 hover:border-white/40 hover:text-white"
        >
          Don’t report my visits
        </button>
      </div>
    </div>
  );
}
