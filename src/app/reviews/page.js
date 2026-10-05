import { CtaBand, PageHero, ReviewCard, Stars } from "@/components/Sections";
import { reviews, site } from "@/lib/site";

export const metadata = {
  title: "Client Reviews",
  description: `Rated 5.0 out of 5 from ${reviews.length} client reviews. See why Columbia, SC families stay with Affordable Insurance Group for years.`,
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Real reviews from real clients"
        text="Many of our clients have been with us for over a decade. Here's what they say."
        crumbs={[{ label: "Reviews" }]}
      />
      <section className="container-x py-16 lg:py-20">
        <div className="flex flex-col items-center gap-3 rounded-2xl bg-brand-50 p-8 text-center sm:flex-row sm:justify-center sm:gap-6 sm:text-left">
          <p className="font-display text-5xl font-semibold text-ink">5.0</p>
          <div>
            <Stars className="size-6" />
            <p className="mt-1 text-sm text-muted">
              Average rating from {reviews.length} reviews on IWantInsurance.com
            </p>
          </div>
          <a
            href={site.social.yelp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline sm:ml-6"
          >
            See us on Yelp
          </a>
        </div>
        <div className="mt-12 columns-1 gap-5 md:columns-2 lg:columns-3 [&>*]:mb-5 [&>*]:break-inside-avoid">
          {reviews.map((r) => (
            <ReviewCard key={r.name} review={r} />
          ))}
        </div>
      </section>
      <CtaBand title="Join our happy clients" />
    </>
  );
}
