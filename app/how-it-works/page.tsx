import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How Cargo Enquiries Work',
  description: 'See the steps to request a cargo quote and confirm transport from Karachi.',
  alternates: { canonical: '/how-it-works' },
};

const steps = [
  {
    number: '01',
    title: 'Share shipment details',
    text: 'Provide the pickup and destination cities, cargo type, approximate weight, package count and delivery requirements.',
  },
  {
    number: '02',
    title: 'Review the enquiry',
    text: 'Your details are prepared in a WhatsApp message. Review the information and send the message to contact the business.',
  },
  {
    number: '03',
    title: 'Discuss route and quote',
    text: 'Confirm availability, price, pickup and delivery arrangements directly with the business.',
  },
  {
    number: '04',
    title: 'Confirm before dispatch',
    text: 'A quote enquiry is not a booking. Proceed only after the final transport details have been agreed directly.',
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__inner">
          <div className="page-hero__content">
            <span className="page-hero__crumb">How it works</span>
            <h1>A clear process from enquiry to confirmation</h1>
            <p>Know what information to share and what needs to be confirmed before cargo moves.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="process-grid">
            {steps.map((step) => (
              <article key={step.number} className="process-card">
                <span className="process-card__num" aria-hidden="true">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <div className="route-cta-row">
            <Link className="btn btn--primary" href="/quote">Start a Quote Enquiry</Link>
            <Link className="btn btn--outline" href="/faqs">Read FAQs</Link>
          </div>
        </div>
      </section>
    </>
  );
}
