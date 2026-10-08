import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Cargo Routes from Karachi',
  description: 'Ask about cargo transport enquiries from Karachi to Faisalabad, Lahore and Sialkot.',
  alternates: { canonical: '/routes' },
};

export default function RoutesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__inner">
          <div className="page-hero__content">
            <span className="page-hero__crumb">Routes</span>
            <h1>Cargo routes from Karachi</h1>
            <p>
              Enquire about shipments to our listed destinations. Availability, transit arrangements and rates
              depend on the details of each load and must be confirmed directly.
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="route-grid">
            {siteConfig.destinations.map((city) => (
              <article key={city} className="route-card">
                <span className="route-card__meta">Karachi to</span>
                <h3>{city}</h3>
                <p>
                  Share your cargo type, weight, package count and pickup or delivery requirements to discuss
                  whether this route can accommodate your shipment.
                </p>
                <ul>
                  <li>Pickup city: {siteConfig.origin}</li>
                  <li>Destination: {city}</li>
                  <li>Quote and availability confirmed per enquiry</li>
                </ul>
                <Link className="btn btn--outline" href={`/quote?destinationCity=${encodeURIComponent(city)}`}>
                  Request a quote
                </Link>
              </article>
            ))}
          </div>
          <p className="route-disclaimer">
            Route listings are enquiry options only and are not a promise of availability or a confirmed transport
            booking. Confirm price, schedule, handling and service terms directly before proceeding.
          </p>
        </div>
      </section>
    </>
  );
}
