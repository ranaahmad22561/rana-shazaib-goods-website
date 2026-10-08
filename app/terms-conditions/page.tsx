import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Service Terms',
  description: 'Important information about quote enquiries and confirming cargo transport arrangements.',
  alternates: { canonical: '/terms-conditions' },
};

export default function TermsConditionsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__inner">
          <div className="page-hero__content">
            <span className="page-hero__crumb">Service terms</span>
            <h1>Information about enquiries and bookings</h1>
            <p>Last updated: October 7, 2026</p>
          </div>
        </div>
      </section>
      <section className="section">
        <article className="container legal-content">
          <p className="legal-review-note">
            This is preliminary website information, not a complete contract. The business must obtain legal
            review and confirm its actual service, payment, cancellation and liability terms before launch.
          </p>
          <h2>Quote requests are enquiries only</h2>
          <p>
            The website quote form prepares a message for you to review in WhatsApp. The business receives an
            enquiry only after you choose to send the message. A quote request does not reserve a vehicle, space,
            rate or delivery date, and is not a confirmed booking.
          </p>
          <h2>Confirm the arrangement directly</h2>
          <p>
            Before handing over goods, confirm the accepted shipment, final price and any additional charges,
            pickup and delivery addresses, schedule, handling requirements, payment method, cancellation terms
            and the party responsible for transport. Do not rely on an unconfirmed estimate or route listing.
          </p>
          <h2>Accurate shipment details</h2>
          <p>
            Provide complete and accurate contact, cargo, weight, package and address details. Tell the business
            about special handling needs and anything that may affect whether the shipment can be accepted.
            Acceptance and any restrictions must be confirmed directly.
          </p>
          <h2>Website information</h2>
          <p>
            Routes shown on this site describe destinations for enquiries only. Availability, prices, transit
            times and services can depend on the actual shipment and must be confirmed before a booking.
          </p>
          <h2>Contact</h2>
          <p>
            Contact {siteConfig.businessName} at <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or
            by phone at <a href={`tel:+92${siteConfig.phone.replace(/^0/, '')}`}>{siteConfig.phone}</a> to
            discuss an enquiry or clarify an arrangement.
          </p>
        </article>
      </section>
    </>
  );
}
