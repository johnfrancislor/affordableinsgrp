import { Suspense } from "react";
import Icon from "@/components/Icon";
import RequestForm from "@/components/RequestForm";
import { PageHero } from "@/components/Sections";
import { site } from "@/lib/site";

export const metadata = {
  title: "Get a Free Quote",
  description: "Request a free auto, home, life or business insurance quote from Affordable Insurance Group in Columbia, SC.",
};

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Free quote"
        title="Get a free, no-obligation quote"
        text="Share a few details and one of our agents will shop our carriers for your best rate. You can also call us. Most quotes take just a few minutes."
        crumbs={[{ label: "Get a Quote" }]}
      />
      <div className="container-x grid gap-10 py-16 lg:grid-cols-[1fr_360px] lg:py-20">
        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-10">
          <h2 className="text-2xl font-semibold text-ink">Tell us what you need</h2>
          <p className="mt-2 text-muted">Fields marked * are required.</p>
          <div className="mt-8">
            <Suspense>
              <RequestForm kind="quote" />
            </Suspense>
          </div>
        </div>

        <aside className="space-y-5">
          <a href={site.phoneHref} className="flex items-center gap-4 rounded-2xl bg-brand-600 p-6 text-white shadow-lg shadow-brand-900/20">
            <span className="grid size-12 place-items-center rounded-xl bg-white/15">
              <Icon name="phone" className="size-6" />
            </span>
            <span>
              <span className="block text-sm text-brand-100">Prefer to talk?</span>
              <span className="block font-display text-xl font-semibold">{site.phone}</span>
            </span>
          </a>

          <div className="rounded-2xl border border-slate-100 p-6">
            <h3 className="font-semibold text-ink">Instant online quotes</h3>
            <p className="mt-1 text-sm text-muted">Use our secure quoting partners any time, 24/7.</p>
            <div className="mt-4 space-y-2">
              <a href={site.quoteTools.personal} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3 text-sm font-medium text-ink hover:bg-brand-50 hover:text-brand-700">
                Home &amp; auto quote <Icon name="external" className="size-4" />
              </a>
              <a href={site.quoteTools.contractors} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3 text-sm font-medium text-ink hover:bg-brand-50 hover:text-brand-700">
                Contractors quote <Icon name="external" className="size-4" />
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-100 p-6">
            <h3 className="font-semibold text-ink">What happens next</h3>
            <ol className="mt-4 space-y-4 text-sm">
              {["We review your details", "We compare quotes from multiple carriers", "An agent calls you with your best options"].map((s, i) => (
                <li key={s} className="flex gap-3">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand-100 text-xs font-semibold text-brand-700">{i + 1}</span>
                  <span className="text-slate-700">{s}</span>
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </div>
    </>
  );
}
