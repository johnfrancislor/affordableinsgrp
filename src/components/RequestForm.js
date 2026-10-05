"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Icon from "./Icon";
import { coverages } from "@/lib/coverages";
import { site } from "@/lib/site";

const groups = [
  { value: "personal", label: "Personal insurance (not sure yet)" },
  { value: "bundle", label: "Home + Auto bundle" },
  { value: "business", label: "Business insurance (not sure yet)" },
];

const options = [...groups, ...coverages.map((c) => ({ value: c.slug, label: c.name }))];

// No backend yet: the form composes an email to the agency in the visitor's mail app.
// Swap handleSubmit for a server action or API route when the client wants submissions stored.
export default function RequestForm({ kind = "quote" }) {
  const params = useSearchParams();
  const fromUrl = params.get("coverage");
  const initial = options.some((o) => o.value === fromUrl) ? fromUrl : "";
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const coverage = options.find((o) => o.value === data.coverage)?.label ?? "General inquiry";
    const subject =
      kind === "quote" ? `Quote request: ${coverage} (${data.name})` : `Website inquiry from ${data.name}`;
    const body = [
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      `Interested in: ${coverage}`,
      data.contact ? `Best way to reach me: ${data.contact}` : null,
      "",
      data.message || "",
    ]
      .filter((l) => l !== null)
      .join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field =
    "mt-1.5 w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-[15px] text-ink placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/15";

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <label className="block text-sm font-medium text-slate-700">
        Full name *
        <input name="name" required autoComplete="name" className={field} placeholder="Jane Smith" />
      </label>
      <label className="block text-sm font-medium text-slate-700">
        Phone *
        <input name="phone" type="tel" required autoComplete="tel" className={field} placeholder="(803) 555-0123" />
      </label>
      <label className="block text-sm font-medium text-slate-700">
        Email *
        <input name="email" type="email" required autoComplete="email" className={field} placeholder="you@example.com" />
      </label>
      <label className="block text-sm font-medium text-slate-700">
        {kind === "quote" ? "Coverage needed" : "Inquiry about"}
        <select name="coverage" defaultValue={initial} className={field}>
          <option value="">{kind === "quote" ? "Select coverage…" : "General inquiry"}</option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </label>
      {kind === "quote" && (
        <fieldset className="sm:col-span-2">
          <legend className="text-sm font-medium text-slate-700">Best way to reach you</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {["Phone call", "Text", "Email"].map((m, i) => (
              <label
                key={m}
                className="cursor-pointer rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 has-[:checked]:border-brand-600 has-[:checked]:bg-brand-50 has-[:checked]:text-brand-700"
              >
                <input type="radio" name="contact" value={m} defaultChecked={i === 0} className="sr-only" />
                {m}
              </label>
            ))}
          </div>
        </fieldset>
      )}
      <label className="block text-sm font-medium text-slate-700 sm:col-span-2">
        {kind === "quote" ? "Tell us a little more (optional)" : "Message"}
        <textarea
          name="message"
          rows={4}
          className={field}
          placeholder={
            kind === "quote"
              ? "Vehicles, home details, current carrier, renewal date: whatever helps."
              : "How can we help?"
          }
        />
      </label>
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">
          Submitting opens your email app with this message ready to send to {site.email}.
        </p>
        <button type="submit" className="btn btn-primary shrink-0">
          {kind === "quote" ? "Request my free quote" : "Send message"} <Icon name="arrow" className="size-4" />
        </button>
      </div>
      {sent && (
        <p role="status" className="rounded-lg bg-brand-50 px-4 py-3 text-sm text-brand-800 sm:col-span-2">
          Your email app should be open now. If it isn&apos;t, call us at{" "}
          <a href={site.phoneHref} className="font-semibold underline">{site.phone}</a> or email{" "}
          <a href={`mailto:${site.email}`} className="font-semibold underline">{site.email}</a>.
        </p>
      )}
    </form>
  );
}
