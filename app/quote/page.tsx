import type { Metadata } from 'next';
import { QuoteForm } from '@/components/quote-form';

export const metadata: Metadata = {
  title: 'Request a Cargo Quote',
  description: 'Share your cargo, route and delivery details to prepare a quote enquiry for Karachi to Faisalabad, Lahore or Sialkot.',
  alternates: { canonical: '/quote' },
};

export default function QuotePage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__inner">
          <div className="page-hero__content">
            <span className="page-hero__crumb">Get a quote</span>
            <h1>Request a cargo quote</h1>
            <p>Share your route, contact and cargo details. Review the prepared enquiry in WhatsApp before you send it.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container quote-form-container">
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
