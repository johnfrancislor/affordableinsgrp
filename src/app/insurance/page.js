import Link from "next/link";
import Icon from "@/components/Icon";
import { CtaBand, PageHero } from "@/components/Sections";
import { categories, coverages } from "@/lib/coverages";

export const metadata = {
  title: "Insurance Products",
  description:
    "Auto, home, renters, life, health, flood, motorcycle, RV, business, contractors, trucking and bond coverage from an independent Columbia, SC agency.",
};

export default function InsurancePage() {
  return (
    <>
      <PageHero
        eyebrow="Insurance products"
        title="Coverage for your family, your toys and your business"
        text="As an independent agency, we write policies with many carriers, so you get options instead of a single take-it-or-leave-it price."
        crumbs={[{ label: "Insurance" }]}
      />
      <div className="container-x space-y-16 py-20">
        {categories.map((cat) => (
          <section key={cat.key} aria-labelledby={`cat-${cat.key}`}>
            <h2 id={`cat-${cat.key}`} className="text-2xl font-semibold text-ink">
              {cat.label} insurance
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {coverages
                .filter((c) => c.category === cat.key)
                .map((c) => (
                  <Link
                    key={c.slug}
                    href={`/insurance/${c.slug}`}
                    className="group flex gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-900/5 transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/10"
                  >
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                      <Icon name={c.icon} className="size-6" />
                    </span>
                    <span>
                      <span className="block font-display text-base font-semibold text-ink">{c.name}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-muted">{c.summary}</span>
                    </span>
                  </Link>
                ))}
            </div>
          </section>
        ))}
      </div>
      <CtaBand title="Not sure what you need?" text="Tell us about your situation and we'll recommend the right mix of coverage, with no pressure and no obligation." />
    </>
  );
}
