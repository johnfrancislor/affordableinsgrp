import Icon from "@/components/Icon";
import { CtaBand, PageHero } from "@/components/Sections";
import { serviceCenter, site } from "@/lib/site";

export const metadata = {
  title: "Service Center",
  description: "Make a payment, request an auto ID card or certificate, or schedule a policy review with Affordable Insurance Group.",
};

export default function ServiceCenterPage() {
  return (
    <>
      <PageHero
        eyebrow="Service center"
        title="Manage your policy, any time"
        text="Self-service options for existing clients, available day or night. Need something else? Just call us."
        crumbs={[{ label: "Service Center" }]}
      />
      <section className="container-x py-16 lg:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCenter.map((s) => (
            <a
              key={s.title}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-900/5 transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/10"
            >
              <span className="grid size-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                <Icon name={s.icon} className="size-6" />
              </span>
              <h2 className="mt-5 font-display text-base font-semibold text-ink">{s.title}</h2>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">{s.text}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                Open <Icon name="external" className="size-3.5" />
              </span>
            </a>
          ))}
        </div>

        <div className="mt-12 grid gap-5 rounded-2xl bg-ink p-8 text-white sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <h2 className="text-xl font-semibold">Need to file a claim or change a policy?</h2>
            <p className="mt-1 text-slate-400">Call us during office hours and we&apos;ll walk you through it.</p>
          </div>
          <a href={site.phoneHref} className="btn btn-primary">
            <Icon name="phone" className="size-4" /> {site.phone}
          </a>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
