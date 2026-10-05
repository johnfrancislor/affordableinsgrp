"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Icon from "./Icon";
import { nav, site } from "@/lib/site";
import { coverages } from "@/lib/coverages";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur transition-shadow ${
        scrolled ? "shadow-[0_1px_0_rgb(15_23_42/0.08),0_8px_24px_-12px_rgb(15_23_42/0.15)]" : ""
      }`}
    >
      <div className="hidden bg-ink text-xs text-slate-300 md:block">
        <div className="container-x flex h-9 items-center justify-between">
          <p>Independent agency serving the Midlands of South Carolina since {site.founded}</p>
          <div className="flex items-center gap-5">
            <a href={`mailto:${site.email}`} className="flex items-center gap-1.5 hover:text-white">
              <Icon name="mail" className="size-3.5" /> {site.email}
            </a>
            <span className="flex items-center gap-1.5">
              <Icon name="clock" className="size-3.5" /> Mon–Fri 9:00 AM – 5:30 PM
            </span>
          </div>
        </div>
      </div>

      <div className="container-x flex h-[72px] items-center justify-between gap-6">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((item) =>
            item.href === "/insurance" ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href) ? "text-brand-600" : "text-slate-600 hover:text-ink"
                  }`}
                >
                  {item.label}
                  <Icon name="chevron" className="size-4 transition-transform group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-3 opacity-0 transition-all group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <div className="grid grid-cols-2 gap-1 rounded-2xl border border-slate-100 bg-white p-3 shadow-xl shadow-slate-900/10">
                    {coverages.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/insurance/${c.slug}`}
                        className="flex items-center gap-3 rounded-lg p-2.5 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-700"
                      >
                        <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-600">
                          <Icon name={c.icon} className="size-4" />
                        </span>
                        {c.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href) ? "text-brand-600" : "text-slate-600 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a href={site.phoneHref} className="hidden items-center gap-2 px-3 text-sm font-semibold text-ink xl:flex">
            <Icon name="phone" className="size-4 text-brand-600" /> {site.phone}
          </a>
          <Link href="/quote" className="btn btn-primary hidden !py-2.5 sm:inline-flex">
            Get a Quote
          </Link>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-lg text-ink hover:bg-slate-100 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <Icon name={open ? "close" : "menu"} className="size-6" />
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-slate-100 bg-white lg:hidden">
          {/* Any link click bubbles up here and closes the menu. */}
          <nav className="container-x flex flex-col py-4" aria-label="Mobile" onClick={(e) => e.target.closest("a") && setOpen(false)}>
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-3 text-base font-medium ${
                  isActive(item.href) ? "bg-brand-50 text-brand-700" : "text-slate-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <p className="mt-4 px-3 text-xs font-semibold uppercase tracking-wider text-muted">Coverage</p>
            <div className="mt-2 grid grid-cols-2 gap-1">
              {coverages.map((c) => (
                <Link key={c.slug} href={`/insurance/${c.slug}`} className="rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50">
                  {c.short}
                </Link>
              ))}
            </div>
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              <Link href="/quote" className="btn btn-primary">Get a Free Quote</Link>
              <a href={site.phoneHref} className="btn btn-outline">
                <Icon name="phone" className="size-4" /> {site.phone}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
