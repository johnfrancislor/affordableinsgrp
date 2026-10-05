import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { CarrierStrip, CtaBand, ReviewCard, SectionHeading, Stars } from "@/components/Sections";
import { coverages, featured, getCoverage } from "@/lib/coverages";
import { reviews, site } from "@/lib/site";

const years = new Date().getFullYear() - site.founded;

const plans = [
  {
    name: "Personal",
    text: "For individuals and families",
    items: ["Auto insurance", "Homeowners & renters", "Life insurance", "Health & disability", "Flood coverage"],
    href: "/quote?coverage=personal",
  },
  {
    name: "Home + Auto Bundle",
    text: "Our most popular way to save",
    highlight: true,
    items: [
      "One agent for both policies",
      "Multi-policy discounts",
      "Quotes from several carriers",
      "Free annual policy review",
      "Free re-quote if your rate jumps",
    ],
    href: "/quote?coverage=bundle",
  },
  {
    name: "Business",
    text: "For owners, contractors and fleets",
    items: ["General liability", "Commercial auto", "Contractors & BOP", "Workers' compensation", "Bonds & trucking"],
    href: "/quote?coverage=business",
  },
];

const steps = [
  { icon: "phone", title: "Tell us what you need", text: "Call, email or stop by. A few details about you, your home, vehicles or business is all it takes." },
  { icon: "search", title: "We shop the market", text: "We compare coverage, deductibles and prices across our network of trusted carriers." },
  { icon: "handshake", title: "You choose, we stay", text: "Pick the option that fits. We're here for changes, renewals and claims questions for years to come." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 hidden w-1/2 opacity-70 [background-image:radial-gradient(var(--color-brand-200)_1px,transparent_1px)] [background-size:22px_22px] lg:block"
        />
        <div className="container-x relative grid items-center gap-14 py-14 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:py-24">
          <div>
            <p className="eyebrow">
              <span className="size-1.5 rounded-full bg-brand-500" /> Columbia, SC · Since {site.founded}
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl lg:text-[3.5rem]">
              The right insurance plan, <span className="text-brand-600">shopped for you.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              We&apos;re an independent agency. Instead of selling you one company&apos;s policy, we compare top carriers to
              find coverage that fits your life and your budget.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/quote" className="btn btn-primary">
                Get Started <Icon name="arrow" className="size-4" />
              </Link>
              <a href={site.phoneHref} className="btn btn-outline">
                <Icon name="phone" className="size-4 text-brand-600" /> {site.phone}
              </a>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-slate-100 pt-8">
              <div className="flex flex-col">
                <dt className="text-sm text-muted">Years serving SC</dt>
                <dd className="order-first font-display text-3xl font-semibold text-ink">{years}+</dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-sm text-muted">Trusted carriers</dt>
                <dd className="order-first font-display text-3xl font-semibold text-ink">9+</dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-sm text-muted">Client rating</dt>
                <dd className="order-first font-display text-3xl font-semibold text-ink">5.0★</dd>
              </div>
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div aria-hidden="true" className="absolute -right-3 -top-3 h-[88%] w-[85%] rounded-[2rem] bg-brand-600 sm:-right-5 sm:-top-5" />
            <div className="relative aspect-[4/3.6] overflow-hidden rounded-[2rem] shadow-2xl shadow-brand-900/20">
              <Image
                src="/images/agent.jpg"
                alt="A friendly Affordable Insurance Group agent helping a client over the phone"
                fill
                preload
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-[45%_center]"
              />
            </div>
            <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl shadow-slate-900/10 sm:left-[-1.5rem]">
              <span className="grid size-11 place-items-center rounded-full bg-amber-50 text-amber-500">
                <Icon name="star" className="size-5" />
              </span>
              <span>
                <span className="block font-display text-lg font-semibold leading-none text-ink">5.0 / 5</span>
                <span className="mt-1 block text-xs text-muted">from {reviews.length} client reviews</span>
              </span>
            </div>
            <div className="absolute right-4 top-6 hidden items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-medium text-ink shadow-lg sm:flex">
              <Icon name="shield" className="size-4 text-brand-600" /> Independent Agent
            </div>
          </div>
        </div>
      </section>

      <CarrierStrip />

      {/* Services */}
      <section className="container-x py-20 sm:py-24">
        <SectionHeading
          eyebrow="Our services"
          title="Coverage for every part of your life"
          text="From your first car to your growing business, we write the policies Midlands families and companies rely on."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((slug) => {
            const c = getCoverage(slug);
            return (
              <Link
                key={slug}
                href={`/insurance/${slug}`}
                className="group rounded-2xl border border-slate-100 bg-white p-7 shadow-sm shadow-slate-900/5 transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/10"
              >
                <span className="grid size-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <Icon name={c.icon} className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink">{c.name}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{c.summary}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  Learn more <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {coverages
            .filter((c) => !featured.includes(c.slug))
            .map((c) => (
              <Link
                key={c.slug}
                href={`/insurance/${c.slug}`}
                className="flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-brand-300 hover:text-brand-700"
              >
                <Icon name={c.icon} className="size-4" /> {c.short}
              </Link>
            ))}
        </div>
      </section>

      {/* Choose your plan */}
      <section className="bg-gradient-to-b from-white via-brand-50/60 to-white py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Choose your plan"
            title="Find the coverage that fits"
            text="Every quote is custom, so there are no one-size-fits-all prices here. Pick where you're starting and we'll take it from there."
          />
          <div className="mx-auto mt-14 grid max-w-5xl items-center gap-6 lg:grid-cols-3">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`overflow-hidden rounded-2xl bg-white ${
                  p.highlight
                    ? "shadow-2xl shadow-brand-900/15 ring-2 ring-brand-600 lg:-my-4"
                    : "border border-slate-100 shadow-sm shadow-slate-900/5"
                }`}
              >
                <div className={`px-6 py-4 text-center font-display font-semibold ${p.highlight ? "bg-brand-600 text-white" : "bg-brand-50 text-brand-800"}`}>
                  {p.highlight && <span className="mb-0.5 block text-[11px] uppercase tracking-widest text-brand-200">Most popular</span>}
                  {p.name}
                </div>
                <div className="p-7">
                  <p className="text-center text-sm text-muted">{p.text}</p>
                  <p className="mt-2 text-center font-display text-2xl font-semibold text-ink">Free quote</p>
                  <ul className="mt-6 space-y-3 border-t border-slate-100 pt-6">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-[15px] text-slate-700">
                        <span className="grid size-5 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
                          <Icon name="check" className="size-3" strokeWidth={3} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href={p.href} className={`btn mt-8 w-full ${p.highlight ? "btn-primary" : "btn-outline"}`}>
                    Choose Plan
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="container-x grid items-center gap-14 py-20 sm:py-24 lg:grid-cols-2">
        <div className="relative">
          <div aria-hidden="true" className="absolute -bottom-4 -left-4 h-3/4 w-3/4 rounded-[2rem] bg-brand-100 sm:-bottom-6 sm:-left-6" />
          <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-xl">
            <Image
              src="/images/family.jpg"
              alt="A mother pushing her daughter on a swing at sunset"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-[62%_center]"
            />
          </div>
          <div className="absolute -right-2 bottom-8 rounded-2xl bg-white p-5 shadow-xl sm:right-6">
            <p className="font-display text-3xl font-semibold text-brand-600">Since {site.founded}</p>
            <p className="text-sm text-muted">Family-run, locally owned</p>
          </div>
        </div>
        <div>
          <p className="eyebrow">Agency guarantee</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">We guarantee your total satisfaction</h2>
          <p className="mt-5 leading-relaxed text-muted">
            Your satisfaction with your company, your rate and your coverage is our guarantee. If you get an unfounded
            rate increase or aren&apos;t happy with your policy for any reason, we&apos;ll re-quote your protection free with
            one of our other carriers. It&apos;s our thank-you for being a loyal client.
          </p>
          <ul className="mt-8 space-y-5">
            {[
              ["Free re-quotes, any time", "Rate went up? We shop it again at no cost."],
              ["One agent, many carriers", "You get choices without calling ten companies."],
              ["Real local people", "Stop by our St. Andrews Rd office or give us a call."],
            ].map(([t, d]) => (
              <li key={t} className="flex gap-4">
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
                  <Icon name="check" className="size-4" strokeWidth={2.5} />
                </span>
                <span>
                  <span className="block font-semibold text-ink">{t}</span>
                  <span className="block text-[15px] text-muted">{d}</span>
                </span>
              </li>
            ))}
          </ul>
          <Link href="/about" className="btn btn-primary mt-9">
            More about us <Icon name="arrow" className="size-4" />
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-ink py-20 text-white sm:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow !text-brand-300">How it works</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Shopping for insurance isn&apos;t fun. So we do it.</h2>
          </div>
          <ol className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="relative rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
                <span className="absolute right-6 top-5 font-display text-5xl font-bold text-white/10">0{i + 1}</span>
                <span className="grid size-12 place-items-center rounded-xl bg-brand-600">
                  <Icon name={s.icon} className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-400">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Reviews */}
      <section className="container-x py-20 sm:py-24">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="What people are saying" title="Clients stay with us for decades" center={false} />
          <div className="flex items-center gap-3">
            <Stars className="size-5" />
            <span className="text-sm text-muted">
              <strong className="text-ink">5.0</strong> from {reviews.length} reviews
            </span>
          </div>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.slice(0, 3).map((r) => (
            <ReviewCard key={r.name} review={r} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/reviews" className="btn btn-outline">
            Read all reviews <Icon name="arrow" className="size-4" />
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
