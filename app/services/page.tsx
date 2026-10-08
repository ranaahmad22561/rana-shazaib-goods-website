import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cargo Services',
  description: 'Explore goods transport enquiry and shipment coordination for routes from Karachi.',
  alternates: { canonical: '/services' },
};

const services = [
  {
    title: 'General goods',
    text: 'Discuss transport options for standard commercial goods. Share the cargo type, volume and handling requirements for review.',
  },
  {
    title: 'Household cargo',
    text: 'Plan a household shipment by providing package counts, approximate weight, pickup and delivery addresses.',
  },
  {
    title: 'Commercial shipments',
    text: 'Share business shipment requirements and delivery timing so route availability and quote details can be discussed.',
  },
  {
    title: 'Route guidance',
    text: 'Ask about cargo enquiries from Karachi to Faisalabad, Lahore and Sialkot.',
  },
  {
    title: 'Shipment planning',
    text: 'Discuss cargo size, pickup and delivery details before deciding whether to confirm transport.',
  },
  {
    title: 'Quote enquiries',
    text: 'Send your shipment information using the quote form. The form prepares a WhatsApp message for you to review and send.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__inner">
          <div className="page-hero__content">
            <span className="page-hero__crumb">Services</span>
            <h1>Cargo support shaped around your shipment</h1>
            <p>
              Tell us what you need to move and where it is going. We can discuss route availability, requirements
              and a quote before you confirm a booking.
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="card-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <Link className="text-link" href="/quote">Discuss this shipment <span aria-hidden="true">→</span></Link>
              </article>
            ))}
          </div>
          <div className="route-cta-row">
            <Link className="btn btn--primary" href="/quote">Request a Quote</Link>
            <Link className="btn btn--outline" href="/routes">See Our Routes</Link>
          </div>
        </div>
      </section>
    </>
  );
}
