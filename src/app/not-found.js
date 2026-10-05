import Link from "next/link";
import Icon from "@/components/Icon";

export default function NotFound() {
  return (
    <section className="container-x flex flex-col items-center py-28 text-center">
      <p className="font-display text-7xl font-bold text-brand-600">404</p>
      <h1 className="mt-4 text-3xl font-semibold text-ink">We couldn&apos;t find that page</h1>
      <p className="mt-3 max-w-md text-muted">It may have moved when we redesigned our site. Try one of these instead.</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn btn-primary">Back to home</Link>
        <Link href="/insurance" className="btn btn-outline">
          Browse insurance <Icon name="arrow" className="size-4" />
        </Link>
      </div>
    </section>
  );
}
