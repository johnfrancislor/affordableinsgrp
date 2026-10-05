import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import { CtaBand, PageHero } from "@/components/Sections";
import { coverages, getCoverage } from "@/lib/coverages";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return coverages.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const c = getCoverage(slug);
  return {
    title: `${c.name} in Columbia, SC`,
    description: `${c.summary} Free ${c.short.toLowerCase()} insurance quotes from Affordable Insurance Group, serving Columbia, Irmo, Chapin and Lexington.`,
  };
}

function Item({ item }) {
  return (
    <li className="flex gap-3">
      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
        <Icon name="check" className="size-3" strokeWidth={3} />
      </span>
      <span className="text-[15px] leading-relaxed text-slate-700">
        {typeof item === "string" ? (
          item
        ) : (
          <>
            <strong className="font-semibold text-ink">{item.label}:</strong> {item.text}
          </>
        )}
      </span>
    </li>
  );
}

export default async function CoveragePage({ params }) {
  const { slug } = await params;
  const c = getCoverage(slug);
  if (!c) notFound();

  const related = coverages.filter((r) => r.category === c.category && r.slug !== c.slug).slice(0, 4);
  const hasDetailedItems = (s) => s.items?.some((i) => typeof i !== "string");

  return (
    <>
      <PageHero
        eyebrow={`${c.category} insurance`}
        title={c.name}
        text={c.summary}
        image={c.image}
        crumbs={[{ label: "Insurance", href: "/insurance" }, { label: c.short }]}
      />

      <div className="container-x grid gap-12 py-16 lg:grid-cols-[1fr_340px] lg:py-20">
        <article className="min-w-0">
          <div className="space-y-4 text-lg leading-relaxed text-slate-700">
            {c.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          {c.sections.map((s) => (
            <section key={s.title} className="mt-12">
              <h2 className="text-2xl font-semibold text-ink">{s.title}</h2>
              {s.p?.map((p) => (
                <p key={p} className="mt-4 leading-relaxed text-slate-700">
                  {p}
                </p>
              ))}
              {s.items && (
                <ul className={`mt-5 ${hasDetailedItems(s) ? "space-y-4" : "grid gap-3 sm:grid-cols-2"}`}>
                  {s.items.map((item) => (
                    <Item key={typeof item === "string" ? item : item.label} item={item} />
                  ))}
                </ul>
              )}
            </section>
          ))}

          {c.faqs && (
            <section className="mt-14">
              <h2 className="text-2xl font-semibold text-ink">Common questions</h2>
              <div className="mt-6 divide-y divide-slate-100 rounded-2xl border border-slate-100">
                {c.faqs.map((f) => (
                  <details key={f.q} className="group px-6 py-5">
                    <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-ink">
                      {f.q}
                      <Icon name="chevron" className="size-5 shrink-0 text-brand-600 transition-transform group-open:rotate-180" />
                    </summary>
                    <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          <p className="mt-12 rounded-xl bg-slate-50 p-5 text-sm leading-relaxed text-muted">
            Coverage, limits and discounts vary by carrier and policy. Figures shown are general averages. Talk to an
            agent for details on your own situation.
          </p>
        </article>

        <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-2xl bg-brand-600 p-7 text-white shadow-xl shadow-brand-900/20">
            <span className="grid size-12 place-items-center rounded-xl bg-white/15">
              <Icon name={c.icon} className="size-6" />
            </span>
            <h2 className="mt-5 text-xl font-semibold">Get a free {c.short.toLowerCase()} quote</h2>
            <p className="mt-2 text-sm leading-relaxed text-brand-100">
              We&apos;ll compare carriers and bring you the best options, usually within one business day.
            </p>
            <Link href={`/quote?coverage=${c.slug}`} className="btn mt-6 w-full bg-white text-brand-700 hover:bg-brand-50">
              Request a quote
            </Link>
            {c.quoteUrl && (
              <a
                href={c.quoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn mt-2 w-full text-white ring-1 ring-white/40 hover:bg-white/10"
              >
                Instant online quote <Icon name="external" className="size-4" />
              </a>
            )}
            <a href={site.phoneHref} className="mt-5 flex items-center justify-center gap-2 text-sm font-semibold">
              <Icon name="phone" className="size-4" /> {site.phone}
            </a>
          </div>

          {related.length > 0 && (
            <div className="rounded-2xl border border-slate-100 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">Related coverage</h2>
              <ul className="mt-4 space-y-1">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/insurance/${r.slug}`}
                      className="flex items-center gap-3 rounded-lg p-2 text-[15px] text-slate-700 hover:bg-brand-50 hover:text-brand-700"
                    >
                      <Icon name={r.icon} className="size-5 text-brand-600" /> {r.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="rounded-2xl border border-slate-100 p-6 text-sm">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">Office hours</h2>
            <p className="mt-3 text-slate-700">Monday – Friday</p>
            <p className="font-semibold text-ink">9:00 AM – 5:30 PM</p>
            <p className="mt-3 text-muted">
              {site.address.street}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </p>
          </div>
        </aside>
      </div>

      <CtaBand />
    </>
  );
}
