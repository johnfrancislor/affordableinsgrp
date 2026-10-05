import { Suspense } from "react";
import Icon from "@/components/Icon";
import RequestForm from "@/components/RequestForm";
import { PageHero } from "@/components/Sections";
import { fullAddress, site } from "@/lib/site";

export const metadata = {
  title: "Contact Us",
  description: `Call ${site.phone}, email or visit Affordable Insurance Group at ${fullAddress}.`,
};

export default function ContactPage() {
  const cards = [
    { icon: "phone", title: "Call us", value: site.phone, sub: `Fax ${site.fax}`, href: site.phoneHref },
    { icon: "mail", title: "Email us", value: site.email, sub: "We reply within one business day", href: `mailto:${site.email}` },
    { icon: "pin", title: "Visit us", value: site.address.street, sub: `${site.address.city}, ${site.address.state} ${site.address.zip}`, href: site.mapsUrl },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We'd love to hear from you"
        text="Call, email or stop by the office. A real person from our team will help you out."
        crumbs={[{ label: "Contact" }]}
      />

      <div className="container-x -mt-8 grid gap-5 md:grid-cols-3">
        {cards.map((c) => (
          <a
            key={c.title}
            href={c.href}
            {...(c.icon === "pin" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="relative flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-900/5 hover:border-brand-200"
          >
            <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-600 text-white">
              <Icon name={c.icon} className="size-6" />
            </span>
            <span className="min-w-0">
              <span className="block text-sm text-muted">{c.title}</span>
              <span className="block break-words font-semibold text-ink">{c.value}</span>
              <span className="block text-sm text-muted">{c.sub}</span>
            </span>
          </a>
        ))}
      </div>

      <div className="container-x grid gap-10 py-16 lg:grid-cols-[1fr_380px] lg:py-20">
        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-10">
          <h2 className="text-2xl font-semibold text-ink">Send us a message</h2>
          <p className="mt-2 text-muted">Fill this out as completely as you can and we&apos;ll get back to you shortly.</p>
          <div className="mt-8">
            <Suspense>
              <RequestForm kind="contact" />
            </Suspense>
          </div>
        </div>

        <aside className="space-y-5">
          <div className="rounded-2xl border border-slate-100 p-6">
            <h3 className="flex items-center gap-2 font-semibold text-ink">
              <Icon name="clock" className="size-5 text-brand-600" /> Office hours
            </h3>
            <dl className="mt-4 divide-y divide-slate-100 text-sm">
              {site.hours.map((h) => (
                <div key={h.day} className="flex justify-between py-2.5">
                  <dt className="text-slate-600">{h.day}</dt>
                  <dd className={h.time === "Closed" ? "text-muted" : "font-medium text-ink"}>{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-100">
            <iframe
              title="Map to Affordable Insurance Group"
              src={site.mapsEmbed}
              className="h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-5 py-4 text-sm font-semibold text-brand-600 hover:bg-brand-50">
              Get driving directions <Icon name="external" className="size-4" />
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}
