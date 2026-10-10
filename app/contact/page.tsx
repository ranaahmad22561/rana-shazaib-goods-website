import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Rana Shahzaib Goods to discuss cargo routes and shipment quote enquiries from Karachi.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__inner">
          <div className="page-hero__content">
            <span className="page-hero__crumb">Contact</span>
            <h1>Talk to us about your cargo</h1>
            <p>Ask about your shipment, route requirements or quote enquiry. Confirm availability and terms directly.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container contact-grid">
          <div className="contact-panel">
            <h2>Contact details</h2>
            <div className="contact-details">
              <div className="contact-detail">
                <span className="detail-icon" aria-hidden="true">☎</span>
                <div>
                  <strong>Phone</strong><br />
                  <a href={`tel:+92${siteConfig.phone.replace(/^0/, '')}`}>{siteConfig.phone}</a>
                </div>
              </div>
              <div className="contact-detail">
                <span className="detail-icon" aria-hidden="true">✉</span>
                <div>
                  <strong>Email</strong><br />
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </div>
              </div>
              <div className="contact-detail">
                <span className="detail-icon" aria-hidden="true">↗</span>
                <div>
                  <strong>WhatsApp</strong><br />
                  <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
                    Send a message
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="quote-panel">
            <p className="eyebrow">Service area</p>
            <h2>Enquiries from Karachi</h2>
            <p>
              Current destination enquiries include Faisalabad, Lahore and Sialkot. Listings do not guarantee
              availability; contact us to discuss your specific shipment.
            </p>
            <div className="route-cta-row">
              <Link className="btn btn--primary" href="/quote">Prepare a Quote Enquiry</Link>
              <Link className="btn btn--outline" href="/routes">Review Routes</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
