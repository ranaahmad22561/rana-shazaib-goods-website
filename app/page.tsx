import Link from 'next/link';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Cargo Transport from Karachi | Rana Shahzaib Goods',
  description:
    'Arrange cargo and goods transport from Karachi to Faisalabad, Lahore and Sialkot. Share your shipment details to discuss availability and request a quote.',
  alternates: { canonical: '/' },
};

const faqItems = [
  {
    question: 'Which cities do you support?',
    answer: 'We support major cargo enquiries from Karachi to Faisalabad, Lahore and Sialkot.',
  },
  {
    question: 'Do I need to provide my goods details?',
    answer: 'Yes. The journey is assessed based on actual goods type, weight, package count, and route information.',
  },
  {
    question: 'Are transport prices fixed?',
    answer: 'Rates depend on the route, goods, weight, load size and pickup or delivery requirements. Share the details to discuss a quote before confirming.',
  },
  {
    question: 'Does requesting a quote confirm my shipment?',
    answer: 'No. A request lets the business review the details. The route, availability, price and booking must be confirmed directly with you.',
  },
  {
    question: 'How do I request a quote?',
    answer: 'Use the quote form on the website and send the enquiry through WhatsApp for quick follow-up.',
  },
];

const organizationStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://rana-shazaib-goods-website.vercel.app/#organization',
  name: siteConfig.businessName,
  url: 'https://rana-shazaib-goods-website.vercel.app/',
  logo: 'https://rana-shazaib-goods-website.vercel.app/images/logo.svg',
  email: siteConfig.email,
  telephone: `+92${siteConfig.phone.replace(/^0/, '')}`,
  areaServed: [siteConfig.origin, ...siteConfig.destinations],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: `+92${siteConfig.phone.replace(/^0/, '')}`,
    contactType: 'customer service',
    areaServed: 'PK',
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
      />
      <section className="hero">
        <div className="hero__inner">
          <div className="hero__visual">
            <img
              className="hero__background"
              src="/images/container-truck.jpg"
              alt="Real container truck carrying freight on a road"
              fetchPriority="high"
            />
            <div className="hero__badge">
              <span className="badge-icon" aria-hidden="true">↗</span>
              <div>
                <strong>From Karachi</strong>
                <small>Faisalabad · Lahore · Sialkot</small>
              </div>
            </div>
          </div>

          <div className="hero__content">
            <p className="eyebrow">Cargo &amp; goods transportation</p>
            <h1 className="hero__title">
              Cargo &amp; Goods Transport from <span>Karachi</span>
            </h1>
            <p>
              Send a cargo enquiry for Faisalabad, Lahore or Sialkot. Share your load and delivery details to discuss route availability and request a clear quote.
            </p>
            <div className="hero__actions">
              <Link className="btn btn--primary" href="/quote">Get a Cargo Quote</Link>
              <Link className="btn btn--outline" href="/contact">Contact Us</Link>
            </div>
            <div className="hero__route">
              <span className="route-dot" />
              <span>Karachi</span>
              <span className="route-line" />
              <span className="route-dot route-dot--end" />
              <span>Faisalabad · Lahore · Sialkot</span>
            </div>
          </div>

          <form className="quick-quote" action="/quote" method="get" aria-label="Start a cargo quote">
            <p className="quick-quote__eyebrow">Start your enquiry</p>
            <h3>Get a cargo quote</h3>
            <div className="quick-quote__row">
              <label>
                Pickup city
                <input type="text" name="pickupCity" defaultValue="Karachi" readOnly aria-label="Pickup city, Karachi" />
              </label>
              <label>
                Destination
                <select name="destinationCity" required>
                  <option value="">Select a city</option>
                  {siteConfig.destinations.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </label>
              <label>
                Goods weight (kg)
                <input type="number" name="weight" min="1" placeholder="e.g. 750" />
              </label>
              <label>
                Customer name
                <input type="text" name="fullName" autoComplete="name" maxLength={100} placeholder="Your full name" required />
              </label>
              <label>
                Phone number
                <input type="tel" name="mobileNumber" autoComplete="tel" inputMode="tel" maxLength={20} placeholder="Your phone number" required />
              </label>
              <label>
                Packages
                <input type="number" name="packages" min="1" placeholder="Number of packages" />
              </label>
              <label>
                Goods type
                <input type="text" name="goodsType" placeholder="General goods" />
              </label>
            </div>
            <button className="btn btn--primary" type="submit">
              Continue to quote <span aria-hidden="true">→</span>
            </button>
            <p className="quick-quote__note">Quotes are based on your shipment details.</p>
          </form>
        </div>
      </section>

      <div className="stat-strip">
        <div className="stat-strip__inner">
          <div className="stat-card">
            <span className="stat-card__num" aria-hidden="true">01</span>
            <span className="stat-card__text">Karachi-based origin</span>
          </div>
          <div className="stat-card">
            <span className="stat-card__num" aria-hidden="true">02</span>
            <span className="stat-card__text">Faisalabad, Lahore &amp; Sialkot</span>
          </div>
          <div className="stat-card">
            <span className="stat-card__num" aria-hidden="true">03</span>
            <span className="stat-card__text">General goods movement</span>
          </div>
          <div className="stat-card">
            <span className="stat-card__num" aria-hidden="true">04</span>
            <span className="stat-card__text">Straightforward quoting</span>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container two-col">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2>Professional cargo support for businesses and consignments.</h2>
            <p>
              Rana Shahzaib Goods handles goods-transport enquiries originating in Karachi for Faisalabad, Lahore and Sialkot. Each request starts with the actual shipment information and a direct discussion about route availability.
            </p>
            <p>
              Share the cargo type, approximate weight and delivery requirements. The team can then review the details and discuss a quote before you decide whether to book.
            </p>
          </div>

          <div className="quote-panel">
            <h3>A clear process, before you commit</h3>
            <div className="notice">
              Your request is a conversation starter—not an automatic booking. Confirm the price, schedule and arrangement directly before proceeding.
            </div>
            <ul style={{ paddingLeft: '18px', color: 'var(--slate-700)', marginTop: '20px' }}>
              <li>Routes listed before you enquire</li>
              <li>Quote requests based on your shipment details</li>
              <li>Direct discussion about availability</li>
              <li>Booking confirmed with you separately</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--compact" id="how-it-works">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">How it works</p>
            <h2>Know the next step at every stage.</h2>
          </div>
          <div className="process-grid">
            <article className="process-card">
              <span className="process-card__num">01</span>
              <h3>Submit shipment details</h3>
              <p>Tell us the goods type, destination, weight, package count, and pickup or delivery requirements.</p>
            </article>
            <article className="process-card">
              <span className="process-card__num">02</span>
              <h3>Request a quote</h3>
              <p>Send your shipment information through the form or WhatsApp for a quote review.</p>
            </article>
            <article className="process-card">
              <span className="process-card__num">03</span>
              <h3>Confirm transportation</h3>
              <p>Discuss the route, quote, and practical shipment requirements before confirming transport.</p>
            </article>
            <article className="process-card">
              <span className="process-card__num">04</span>
              <h3>Cargo dispatch</h3>
              <p>Once transportation is confirmed, prepare your cargo for dispatch according to the agreed plan.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Services</p>
            <h2>Start with the route and the kind of load.</h2>
          </div>
          <div className="card-grid">
            <article className="service-card">
              <div className="service-card__icon">📦</div>
              <h3>General Goods Transport</h3>
              <p>Movement for standard commercial items and regular goods shipments from Karachi.</p>
              <Link href="/services" className="btn btn--outline">Learn More</Link>
            </article>
            <article className="service-card">
              <div className="service-card__icon">🚛</div>
              <h3>Larger Shipments</h3>
              <p>Share the load size and any special handling needs so availability can be checked before you book.</p>
              <Link href="/services" className="btn btn--outline">Learn More</Link>
            </article>
            <article className="service-card">
              <div className="service-card__icon">📍</div>
              <h3>Karachi to Faisalabad</h3>
              <p>Goods movement planning for shipments heading to Faisalabad with clear route details.</p>
              <Link href="/routes" className="btn btn--outline">View Route</Link>
            </article>
            <article className="service-card">
              <div className="service-card__icon">🛣️</div>
              <h3>Karachi to Lahore</h3>
              <p>Reliable route support for cargo requests headed to Lahore and surrounding business needs.</p>
              <Link href="/routes" className="btn btn--outline">View Route</Link>
            </article>
            <article className="service-card">
              <div className="service-card__icon">🏙️</div>
              <h3>Karachi to Sialkot</h3>
              <p>Support for cargo movement to Sialkot with practical planning for goods and load details.</p>
              <Link href="/routes" className="btn btn--outline">View Route</Link>
            </article>
            <article className="service-card">
              <div className="service-card__icon">✉️</div>
              <h3>Fast Quote Request</h3>
              <p>Send your cargo requirement and route information through the WhatsApp enquiry system.</p>
              <Link href="/quote" className="btn btn--primary">Get a Quote</Link>
            </article>
          </div>
        </div>
      </section>


      
      <section className="section promo-film" aria-labelledby="promo-film-title">
        <div className="container promo-film__layout">
          <div className="promo-film__content">
            <p className="eyebrow">Cargo in motion</p>
            <h2 id="promo-film-title">Careful Loading. Smart Transport. Reliable Delivery.</h2>
            <p>
              Every shipment deserves careful handling and a clear plan. See how organized loading and modern cargo movement help goods travel from Karachi towards their destination.
            </p>
            <div className="promo-film__points">
              <div className="promo-film__point">
                <span aria-hidden="true">✓</span>
                <div><strong>Careful cargo handling</strong><small>Organized loading and secure preparation.</small></div>
              </div>
              <div className="promo-film__point">
                <span aria-hidden="true">↗</span>
                <div><strong>Planned route movement</strong><small>Route and shipment details discussed before booking.</small></div>
              </div>
              <div className="promo-film__point">
                <span aria-hidden="true">▣</span>
                <div><strong>Business-focused service</strong><small>Transport support for different goods and load sizes.</small></div>
              </div>
            </div>
            <Link className="btn btn--primary" href="/quote">Request a Cargo Quote <span aria-hidden="true">→</span></Link>
          </div>
          <div className="promo-film__media">
            <div className="promo-film__media-top">
              <span className="promo-film__live-dot" aria-hidden="true"></span>
              <span>Rana Shahzaib Goods · Cargo in Motion</span>
            </div>
            <video
              className="promo-film__video"
              controls
              playsInline
              preload="metadata"
              poster="/images/container-truck.jpg"
              aria-label="Illustrative video of freight goods being loaded onto a truck using a forklift"
            >
              <source
                src="https://videos.pexels.com/video-files/9856371/9856371-hd_1920_1080_30fps.mp4"
                type="video/mp4"
              />
              Your browser does not support embedded video.
              <a href="https://www.pexels.com/video/loading-a-truck-with-construction-products-9856371/" target="_blank" rel="noreferrer">Open the cargo-loading video</a>.
            </video>
            <div className="promo-film__media-caption">
              <span>LOADING</span><span>TRANSPORT</span><span>DELIVERY PLANNING</span>
            </div>
            <p className="promo-film__credit">
              Illustrative stock footage by <a href="https://www.pexels.com/video/loading-a-truck-with-construction-products-9856371/" target="_blank" rel="noreferrer">Amar Preciado on Pexels</a>.
            </p>
          </div>
        </div>
      </section>

<section className="section section--compact" aria-labelledby="why-choose-us-title">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Why choose us</p>
            <h2 id="why-choose-us-title">Cargo planning built around your shipment.</h2>
            <p>Get the details clear before you commit to a transport arrangement.</p>
          </div>
          <div className="feature-grid">
            <article className="feature-card">
              <div className="feature-card__icon" aria-hidden="true">↗</div>
              <h3>Route-focused service</h3>
              <p>Start with Karachi and the destination you need: Faisalabad, Lahore or Sialkot.</p>
            </article>
            <article className="feature-card">
              <div className="feature-card__icon" aria-hidden="true">✓</div>
              <h3>Clear quote discussion</h3>
              <p>Share the weight, goods type and package details so charges can be discussed with the right context.</p>
            </article>
            <article className="feature-card">
              <div className="feature-card__icon" aria-hidden="true">◎</div>
              <h3>Direct confirmation</h3>
              <p>Review the route, availability and agreed arrangements directly before the shipment is booked.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--compact" aria-labelledby="service-promise-title">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Clear before booking</p>
            <h2 id="service-promise-title">Know what to expect before you confirm.</h2>
          </div>
          <div className="reviews-panel">
            <div className="reviews-panel__copy">
              <p className="reviews-panel__eyebrow">A straightforward enquiry</p>
              <h3>Share the shipment details. Discuss the quote directly.</h3>
              <p>
                Tell us the route, type and size of your goods, plus pickup and delivery needs. We will review the request and discuss availability and pricing with you before anything is booked.
              </p>
              <div className="route-cta-row">
                <Link className="btn btn--primary" href="/quote">Request a Quote</Link>
                <Link className="btn btn--outline reviews-panel__contact" href="/routes">Check Routes</Link>
              </div>
            </div>
            <aside className="reviews-panel__note" aria-label="Booking information">
              <span className="reviews-panel__status">Before you book</span>
              <span className="reviews-panel__quote" aria-hidden="true">✓</span>
              <h3>Confirm details directly</h3>
              <p>
                Route availability, charges, timing and final booking are confirmed with you directly. A quote request alone does not confirm a shipment.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section--compact">
        <div className="container">
          <div className="route-banner">
            <p className="eyebrow">Most requested routes</p>
            <h2>Choose your destination from Karachi.</h2>
            <div className="route-map">
              <div className="city">
                <span className="city-dot" />
                <strong>Karachi</strong>
                <small>Goods collected</small>
              </div>
              <div className="map-line" />
              <div className="city city-end">
                <span className="city-dot" />
                <strong>Faisalabad</strong>
                <small>Goods delivered</small>
              </div>
            </div>
            <div className="route-cta-row">
              <Link href="/routes" className="btn btn--primary">View All Routes</Link>
              <Link href="/quote" className="btn btn--outline">Request Shipment Quote</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">FAQ</p>
            <h2>Questions often asked about cargo movement.</h2>
            <Link className="text-link" href="/faqs">See all frequently asked questions <span aria-hidden="true">→</span></Link>
          </div>

          <div className="faqlist">
            {faqItems.map((item, index) => (
              <details key={item.question} className="faq-item" open={index === 0}>
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
        </div>
      </section>

      <section className="section section--compact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-panel">
              <p className="eyebrow">Contact</p>
              <h2>Ready to move your goods?</h2>
              <p>Get in touch for Karachi cargo enquiries, route questions, or a quote request based on your shipment details.</p>
              <div className="contact-details">
                <div className="contact-detail">
                  <span className="detail-icon">☎</span>
                  <div>
                    <strong>Phone</strong>
                    <br />
                    <a href={`tel:+92${siteConfig.phone.replace(/^0/, '')}`} data-phone-link>{siteConfig.phone}</a>
                  </div>
                </div>
                <div className="contact-detail">
                  <span className="detail-icon">💬</span>
                  <div>
                    <strong>WhatsApp</strong>
                    <br />
                    <a href={`https://wa.me/${siteConfig.whatsapp}`} data-whatsapp-link target="_blank" rel="noreferrer">{siteConfig.phone}</a>
                  </div>
                </div>
                <div className="contact-detail">
                  <span className="detail-icon">✉</span>
                  <div>
                    <strong>Email</strong>
                    <br />
                    <a href={`mailto:${siteConfig.email}`} data-email-link>{siteConfig.email}</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="quote-panel">
              <p className="eyebrow">Quote request</p>
              <h3>Send your shipment details</h3>
              <p>Complete the enquiry form to share the goods, route, pickup and delivery information for a direct quote discussion.</p>
              <div className="route-cta-row">
                <Link className="btn btn--primary" href="/quote">Go to Quote Form</Link>
                <a className="btn btn--dark" href={`https://wa.me/${siteConfig.whatsapp}`} data-whatsapp-link target="_blank" rel="noreferrer">WhatsApp Us</a>
                <a className="btn btn--outline" href={`tel:+92${siteConfig.phone.replace(/^0/, '')}`} data-phone-link>Call Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
