import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Rana Shahzaib Goods and cargo enquiries from Karachi to Faisalabad, Lahore and Sialkot.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__inner">
          <div className="page-hero__content">
            <span className="page-hero__crumb">About</span>
            <h1>About Rana Shahzaib Goods</h1>
            <p>
              Rana Shahzaib Goods helps customers discuss cargo and goods movement from Karachi, with clear
              shipment information and direct communication about route availability.
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container two-column">
          <div>
            <h2>Clear information before a booking</h2>
            <p>
              Cargo requirements can vary by route, goods, load size and delivery details. We ask customers to
              share those details first so the route and quote can be discussed before any transport is confirmed.
            </p>
            <p>
              Current enquiries focus on Karachi to Faisalabad, Lahore and Sialkot. Contact us to discuss your
              shipment and confirm whether an arrangement is available for your requirements.
            </p>
          </div>
          <div className="card">
            <h3>What to include in an enquiry</h3>
            <ul className="check-list">
              <li>Pickup and delivery cities and addresses</li>
              <li>Type, approximate weight and package count of the goods</li>
              <li>Preferred pickup date and any handling requirements</li>
              <li>A working phone number for follow-up</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
