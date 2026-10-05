import Link from "next/link";
import Logo from "./Logo";
import Icon from "./Icon";
import { site, fullAddress } from "@/lib/site";
import { coverages } from "@/lib/coverages";

const company = [
  { label: "About Us", href: "/about" },
  { label: "Get a Quote", href: "/quote" },
  { label: "Service Center", href: "/service-center" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-slate-400">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            A full-service independent insurance agency in Columbia, SC. {site.tagline}
          </p>
          <div className="mt-6 flex gap-2">
            {[
              { href: site.social.yelp, label: "Yelp" },
              { href: site.social.twitter, label: "X / Twitter" },
              { href: site.social.chamber, label: "Greater Irmo Chamber" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-300 hover:border-brand-400 hover:text-white"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Coverage</h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm lg:grid-cols-1">
            {coverages.slice(0, 8).map((c) => (
              <li key={c.slug}>
                <Link href={`/insurance/${c.slug}`} className="hover:text-white">
                  {c.short}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/insurance" className="font-medium text-brand-300 hover:text-white">
                View all →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Company</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {company.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Visit or call</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <Icon name="pin" className="mt-0.5 size-4 shrink-0 text-brand-400" />
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {fullAddress}
              </a>
            </li>
            <li className="flex gap-3">
              <Icon name="phone" className="mt-0.5 size-4 shrink-0 text-brand-400" />
              <span>
                <a href={site.phoneHref} className="hover:text-white">{site.phone}</a>
                <span className="block text-xs text-slate-500">Fax {site.fax}</span>
              </span>
            </li>
            <li className="flex gap-3">
              <Icon name="mail" className="mt-0.5 size-4 shrink-0 text-brand-400" />
              <a href={`mailto:${site.email}`} className="break-all hover:text-white">{site.email}</a>
            </li>
            <li className="flex gap-3">
              <Icon name="clock" className="mt-0.5 size-4 shrink-0 text-brand-400" />
              <span>Mon–Fri, 9:00 AM – 5:30 PM</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Serving {site.serviceAreas.join(", ")} and surrounding areas.</p>
        </div>
      </div>
    </footer>
  );
}
