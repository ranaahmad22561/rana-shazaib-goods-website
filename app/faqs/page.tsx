import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cargo Transport FAQs',
  description: 'Answers about destinations, cargo quote enquiries and confirming transport from Karachi.',
  alternates: { canonical: '/faqs' },
};

const faqs = [
  {
    question: 'Which cities can I enquire about?',
    answer: 'Current route enquiries are for Karachi to Faisalabad, Lahore and Sialkot. Contact us to confirm availability for your specific shipment.',
  },
  {
    question: 'How do I request a quote?',
    answer: 'Complete the quote form with your contact, route and shipment details. It prepares a WhatsApp message that you can review and send.',
  },
  {
    question: 'Does submitting the form book my shipment?',
    answer: 'No. The form prepares a message; the enquiry reaches the business only when you send it from WhatsApp. A booking exists only after all arrangements have been confirmed directly.',
  },
  {
    question: 'How is the transport price decided?',
    answer: 'Price depends on the route, goods, weight, package size, pickup and delivery requirements. Ask for and confirm the final charges before booking.',
  },
  {
    question: 'What shipment information should I provide?',
    answer: 'Include goods type, approximate weight, package count, pickup and delivery addresses, preferred date, and any handling requirements.',
  },
  {
    question: 'When will my shipment arrive?',
    answer: 'Timing depends on the confirmed arrangement and shipment. Ask the business to confirm the expected schedule before booking.',
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__inner">
          <div className="page-hero__content">
            <span className="page-hero__crumb">FAQs</span>
            <h1>Questions about cargo enquiries</h1>
            <p>Review the basics about route coverage, quote requests and confirming a shipment.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="faqlist">
            {faqs.map((item) => (
              <details key={item.question} className="faq-item">
                <summary className="faq-item__question">
                  {item.question}
                  <span className="faq-item__icon" aria-hidden="true">+</span>
                </summary>
                <div className="faq-item__answer faq-item__answer--visible">
                  <div className="faq-item__answer-inner">{item.answer}</div>
                </div>
              </details>
            ))}
          </div>
          <div className="route-cta-row">
            <Link className="btn btn--primary" href="/quote">Request a Quote</Link>
            <Link className="btn btn--outline" href="/contact">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
