import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Notice',
  description: 'How the Rana Shazaib Goods website handles information shared through a cargo enquiry.',
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__inner">
          <div className="page-hero__content">
            <span className="page-hero__crumb">Privacy Notice</span>
            <h1>How enquiry information is handled</h1>
            <p>Last updated: October 7, 2026</p>
          </div>
        </div>
      </section>
      <section className="section">
        <article className="container legal-content">
          <p>
            This notice describes the intended handling of information when you use this website. It must be
            checked against the business&apos; actual hosting, messaging and record-keeping practices before launch.
          </p>
          <h2>Information you provide</h2>
          <p>
            The quote form collects the contact and shipment details you enter in your browser. It creates a
            WhatsApp message draft only after you submit the form. The website does not transmit that form to a
            website database or send it automatically. You choose whether to open WhatsApp and send the draft.
          </p>
          <h2>WhatsApp and other contact methods</h2>
          <p>
            If you choose to send a WhatsApp message, your information is handled by WhatsApp and the business
            account receiving the message under their own applicable terms and privacy practices. Phone calls and
            email are handled by the services you use to contact the business.
          </p>
          <h2>Website operation</h2>
          <p>
            The site does not intentionally use advertising cookies or analytics in this application. The hosting
            provider may process basic technical request information to operate, protect and troubleshoot the
            website. Confirm the provider&apos;s log, retention and security settings before publication.
          </p>
          <h2>Retention and your choices</h2>
          <p>
            Information sent directly to the business may be retained in its messaging, phone or email systems.
            Contact the business to ask about an enquiry you sent or request deletion where applicable. This
            website cannot erase a message already delivered to a third-party service.
          </p>
          <h2>Contact</h2>
          <p>
            For privacy questions, contact <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or use
            the <Link href="/contact">Contact page</Link>.
          </p>
          <p className="legal-review-note">
            This website notice is general information, not legal advice. The business should confirm it reflects
            its real practices and obtain local legal review before publishing.
          </p>
        </article>
      </section>
    </>
  );
}
