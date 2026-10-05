import Image from "next/image";
import Icon from "@/components/Icon";
import { CarrierStrip, CtaBand, PageHero } from "@/components/Sections";
import { site, team } from "@/lib/site";

export const metadata = {
  title: "About Us",
  description:
    "Founded by Julius Jones in 1985, Affordable Insurance Group is a family-run independent agency serving St. Andrews, Irmo and Columbia, SC.",
};

const values = [
  { icon: "piggy", title: "Save time and money", text: "We compare plans so you get the best one, with the right company, at the right time." },
  { icon: "handshake", title: "Good old-fashioned advice", text: "Honest guidance from local agents who answer the phone and remember your name." },
  { icon: "shield", title: "Total satisfaction", text: "Unhappy with a rate increase? We'll re-quote your coverage free with another carrier." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={`Helping the Midlands save on insurance since ${site.founded}`}
        text="A full-service, family-run independent insurance agency based on Saint Andrews Road in Columbia, SC."
        crumbs={[{ label: "About" }]}
      />

      <section className="container-x grid items-center gap-14 py-20 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Our story</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">Built on relentless service</h2>
          <div className="mt-6 space-y-4 leading-relaxed text-slate-700">
            <p>
              Founded by Agency Manager Julius Jones in {site.founded}, Affordable Insurance Group serves the insurance
              and financial needs of clients in the St. Andrews, Irmo and Columbia areas of South Carolina.
            </p>
            <p>
              Through the relentless pursuit of excellence, Julius has put together a wide range of products for
              individuals and small businesses, including protection for your auto, home and property, plus solutions
              for your retirement.
            </p>
            <p>
              <strong className="text-ink">Our mission</strong> is to help our clients save time and money by helping
              them select the best plan, with the right company, at the right time.
            </p>
          </div>
        </div>
        <div className="relative">
          <div aria-hidden="true" className="absolute -right-4 -top-4 h-3/4 w-3/4 rounded-[2rem] bg-brand-600 sm:-right-6 sm:-top-6" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-xl">
            <Image src="/images/business.jpg" alt="Agents meeting around a table" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-brand-50/60 py-20">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl bg-white p-7 shadow-sm shadow-slate-900/5">
              <span className="grid size-12 place-items-center rounded-xl bg-brand-600 text-white">
                <Icon name={v.icon} className="size-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{v.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-20" id="team">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Meet the team</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">The people behind your policy</h2>
        </div>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {team.map((m) => (
            <li key={m.name} className="rounded-2xl border border-slate-100 p-6 text-center shadow-sm shadow-slate-900/5">
              <span className="mx-auto grid size-20 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 font-display text-2xl font-semibold text-white">
                {m.initials}
              </span>
              <p className="mt-4 font-semibold text-ink">{m.name}</p>
              <p className="mt-1 text-sm text-muted">{m.role}</p>
              <a href={site.phoneHref} className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:underline">
                <Icon name="phone" className="size-3.5" /> Call
              </a>
            </li>
          ))}
        </ul>
      </section>

      <CarrierStrip />
      <CtaBand />
    </>
  );
}
