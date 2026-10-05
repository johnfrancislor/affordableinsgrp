import Link from "next/link";

export default function Logo({ light = false }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="Affordable Insurance Group home">
      <span className="grid size-10 place-items-center rounded-xl bg-brand-600 text-white shadow-md shadow-brand-600/30">
        <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 13c0 5-3.5 7.5-7.7 9a1 1 0 0 1-.6 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1.2 1.2 0 0 1 1.6 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      </span>
      <span className="leading-none">
        <span className={`block font-display text-lg font-bold ${light ? "text-white" : "text-ink"}`}>
          Affordable
        </span>
        <span className={`block text-[11px] font-medium uppercase tracking-[0.18em] ${light ? "text-brand-200" : "text-muted"}`}>
          Insurance Group
        </span>
      </span>
    </Link>
  );
}
