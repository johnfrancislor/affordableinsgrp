import Link from "next/link";
import { PageHero } from "@/components/Sections";

export const metadata = {
  title: "Privacy Policy",
  description: "Website privacy policy for Affordable Insurance Group.",
};

const contact = (
  <Link href="/contact" className="font-medium text-brand-600 hover:underline">
    contacting us
  </Link>
);

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" text="How we gather, use and protect information on this website." crumbs={[{ label: "Privacy Policy" }]} />
      <article className="container-x max-w-3xl py-16 text-[15px] leading-relaxed text-slate-700 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-ink [&_h3]:mt-6 [&_h3]:font-semibold [&_h3]:text-ink [&_p]:mt-3">
        <p>
          This notice describes our privacy policy (&ldquo;Notice&rdquo;). By visiting our Web Site (&ldquo;Web Site&rdquo;),
          you are accepting the practices described in this Notice.
        </p>

        <h2>1. Notice: information we gather</h2>
        <h3>Volunteered information</h3>
        <p>
          We will receive and store any information you enter on the Web Site or give us in any other way that personally
          identifies you, to improve your experience at the Web Site, to get a better general understanding of the type of
          individuals visiting the Web Site, and to enable us to contact you when needed. Typically you will provide
          information on the Web Site for the purchase of products or services or when you submit comments or questions.
        </p>
        <h3>Automatic information</h3>
        <p>
          To provide content that users need and desire, we collect aggregated site-visitation statistics using cookies. A
          cookie is a small data file placed on your computer when you first visit the Web Site. Cookies can neither damage
          user files nor read information from users&apos; hard drives, and only we will be able to read the cookie that the
          Web Site creates.
        </p>
        <h3>Information use</h3>
        <p>
          We use information for personal identification; to understand the type of individuals visiting the Web Site; to
          respond to your requests, comments or questions; to improve your experience; to collect aggregated
          site-visitation statistics; and to alert you to product enhancements, special offers, updated information and new
          services.
        </p>
        <p>
          We may disclose information to third parties, including customer lists, limited to your name, company, position,
          address, phone and fax numbers, and web site and email addresses. If you do not wish to have such information
          disclosed, please let us know by {contact}, including your name and address. Once properly notified, we will
          remove your name from the lists and disclosures as soon as practicable.
        </p>
        <p>
          When you order products or services, we ask for your credit card number and billing address. We use this
          information only to bill you for the products or services you order at that time.
        </p>
        <p>
          Questions or comments submitted to us may become available in public sections of the Web Site, without facts that
          identify the user. We may release user information if required to comply with law, to enforce the Web Site Terms
          and Conditions, or to protect the rights, property or safety of us or our users.
        </p>

        <h2>2. Choice</h2>
        <p>
          You can always choose not to provide certain information, though you may not be able to purchase products or use
          some features. To remove information from our databases, or to prevent disclosure to third parties, you may
          contact us. Most web browsers accept cookies automatically, but you can change your browser settings to block or
          be notified about them.
        </p>

        <h2>3. Access</h2>
        <p>You may review and update your personal information by {contact}. For security, we require user verification.</p>

        <h2>4. Security</h2>
        <p>
          We take steps to protect your data from loss, misuse, alteration, destruction or unauthorized access, and use
          encryption (SSL/TLS) to secure ordering information. While we use these security technologies, no electronic
          commerce can be guaranteed to be totally secure.
        </p>

        <h2>5. User safeguards</h2>
        <p>
          You are responsible for keeping your user name, password and account information secret, and for signing off
          when using a computer others can access.
        </p>

        <h2>6. Children</h2>
        <p>
          We do not sell products for children. Users of the Web Site must be at least eighteen years old. If a child has
          provided personal information, a parent or guardian should contact us to delete it.
        </p>

        <h2>7. Third-party web sites</h2>
        <p>
          The Web Site links to third-party sites, such as online quote tools, carrier payment portals and maps, that may
          collect personally identifiable information. This Notice does not cover their practices. Please read their privacy
          statements.
        </p>

        <h2>8. Analytics</h2>
        <p>
          Google Analytics Advertising Features may track visitor data on this website, including Demographics and Interest
          Reporting, to understand our visitors and improve marketing. This data is not sold to third parties and is not
          personally identifiable. You can opt out using Google&apos;s Analytics opt-out browser add-on.
        </p>

        <h2>9. Agreement and modification</h2>
        <p>
          By using the Web Site you consent to the collection and use of information as explained in this Notice. We may
          revise this Notice at any time by updating this page, and changes take effect immediately. If you have questions
          about your privacy, please contact us. If you do not accept this Notice, do not use the Web Site.
        </p>
      </article>
    </>
  );
}
