import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import { carriers, site } from "@/lib/site";

export function Stars({ className = "size-4" }) {
  return (
    <span className="flex text-amber-400" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
          <path d="M11.5 2.3a.5.5 0 0 1 1 0l2.3 4.7a2 2 0 0 0 1.5 1.1l5.2.8a.5.5 0 0 1 .3.9l-3.8 3.7a2 2 0 0 0-.6 1.8l.9 5.2a.5.5 0 0 1-.8.6l-4.6-2.5a2 2 0 0 0-1.9 0l-4.6 2.5a.5.5 0 0 1-.8-.6l.9-5.2a2 2 0 0 0-.6-1.8L1.2 9.8a.5.5 0 0 1 .3-.9l5.2-.8A2 2 0 0 0 8.2 7Z" />
        </svg>
      ))}
    </span>
  );
}

export function SectionHeading({ eyebrow, title, text, center = true }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-relaxed text-muted">{text}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, text, image, crumbs = [] }) {
  return (
    <section className="relative overflow-hidden bg-brand-50">
      {image && (
        <>
          <Image src={image} alt="" fill preload sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/75 to-ink/30" />
        </>
      )}
      {!image && (
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-60 [background-image:radial-gradient(var(--color-brand-200)_1px,transparent_1px)] [background-size:22px_22px]"
        />
      )}
      <div className="container-x relative py-16 sm:py-20">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className={`mb-5 flex flex-wrap items-center gap-1.5 text-sm ${image ? "text-slate-300" : "text-muted"}`}>
            <Link href="/" className="hover:underline">Home</Link>
            {crumbs.map((c) => (
              <span key={c.label} className="flex items-center gap-1.5">
                <span aria-hidden="true">/</span>
                {c.href ? <Link href={c.href} className="hover:underline">{c.label}</Link> : <span aria-current="page">{c.label}</span>}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <p className={`eyebrow ${image ? "!text-brand-300" : ""}`}>{eyebrow}</p>}
        <h1 className={`mt-3 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl ${image ? "text-white" : "text-ink"}`}>
          {title}
        </h1>
        {text && <p className={`mt-5 max-w-2xl text-lg leading-relaxed ${image ? "text-slate-200" : "text-muted"}`}>{text}</p>}
      </div>
    </section>
  );
}

export function CarrierStrip() {
  const row = [...carriers, ...carriers];
  return (
    <section className="border-y border-brand-100 bg-brand-50 py-10" aria-label="Insurance carriers we work with">
      <p className="text-center text-sm font-medium text-muted">
        We shop top-rated carriers so you don&apos;t have to
      </p>
      <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <ul className="flex w-max animate-marquee items-center gap-14 hover:[animation-play-state:paused]">
          {row.map((c, i) => (
            <li key={i} aria-hidden={i >= carriers.length} className="shrink-0">
              <Image src={c.src} alt={c.name} width={150} height={58} className="logo-blend h-12 w-auto" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ReviewCard({ review }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-900/5">
      <Stars />
      <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-slate-700">“{review.text}”</blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <span className="grid size-10 place-items-center rounded-full bg-brand-100 font-display text-sm font-semibold text-brand-700">
          {review.name.replace(/[^A-Z]/g, "").slice(0, 2)}
        </span>
        <span>
          <span className="block text-sm font-semibold text-ink">{review.name}</span>
          <span className="block text-xs text-muted">{review.location ?? "Verified client"}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function CtaBand({
  title = "Ready to stop overpaying for insurance?",
  text = "Tell us what you need covered. We'll compare carriers and come back with your best options. It's free, with no obligation.",
}) {
  return (
    <section className="container-x py-20">
      <div className="relative overflow-hidden rounded-3xl bg-brand-600 px-6 py-14 text-center sm:px-12">
        <div aria-hidden="true" className="absolute -right-20 -top-24 size-72 rounded-full bg-brand-500/60" />
        <div aria-hidden="true" className="absolute -bottom-28 -left-16 size-72 rounded-full bg-brand-700/60" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
          <p className="mt-4 text-brand-100">{text}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/quote" className="btn bg-white text-brand-700 hover:bg-brand-50">
              Get a Free Quote <Icon name="arrow" className="size-4" />
            </Link>
            <a href={site.phoneHref} className="btn text-white ring-1 ring-white/40 hover:bg-white/10">
              <Icon name="phone" className="size-4" /> Call {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
