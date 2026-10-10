import Link from 'next/link';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';
import { PromoVideo } from '@/components/promo-video';

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
      <section className="hero hero--design-one">
        <div className="hero__visual">
          <img
            className="hero__background"
            src="/images/container-truck.jpg"
            alt="Container truck carrying goods along a highway"
            fetchPriority="high"
          />
        </div>
        <div className="hero__inner">
          <div className="hero__content">
            <p className="hero__trust-pill"><span aria-hidden="true">✓</span> Reliable · Safe · On Time</p>
            <h1 className="hero__title">
              Rana Shahzaib <span>Goods</span>
            </h1>
            <p className="hero__route-title">Your Trusted Cargo Partner from Karachi to Faisalabad and Beyond</p>
            <p>
              We provide safe, reliable and affordable cargo transport services for business and personal needs across Pakistan.
            </p>
            <div className="hero__actions">
              <Link className="btn btn--primary" href="/quote">Get a Free Quote <span aria-hidden="true">→</span></Link>
              <Link className="btn btn--outline" href="/services">Explore Services</Link>
            </div>
            <div className="hero__route" aria-label="Cargo route from Karachi to Faisalabad, Lahore and Sialkot">
              <span className="route-dot" aria-hidden="true" />
              <span>Karachi</span>
              <span className="route-line" aria-hidden="true" />
              <span className="route-dot route-dot--end" aria-hidden="true" />
              <span>Faisalabad · Lahore · Sialkot</span>
            </div>
          </div>

          <form className="quick-quote quick-quote--light" action="/quote" method="get" aria-label="Start a cargo quote">
            <p className="quick-quote__eyebrow">Start your enquiry</p>
            <h3>Get a Quick Quote</h3>
            <p className="quick-quote__intro">Share your shipment details to request a route-specific quote.</p>
            <div className="quick-quote__row">
              <label>
                Customer name
                <input type="text" name="fullName" autoComplete="name" maxLength={100} placeholder="Your full name" required />
              </label>
              <label>
                Phone number
                <input type="tel" name="mobileNumber" autoComplete="tel" inputMode="tel" maxLength={20} placeholder="Your phone number" required />
              </label>
              <label>
                From
                <input type="text" name="pickupCity" defaultValue="Karachi" readOnly aria-label="Pickup city, Karachi" />
              </label>
              <label>
                To
                <select name="destinationCity" required>
                  <option value="">Select a city</option>
                  {siteConfig.destinations.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </label>
              <label>
                Goods type
                <input type="text" name="goodsType" placeholder="General goods" />
              </label>
              <label>
                Weight (kg)
                <input type="number" name="weight" min="1" placeholder="e.g. 750" />
              </label>
              <label className="quick-quote__packages">
                Number of packages
                <input type="number" name="packages" min="1" placeholder="Number of packages" />
              </label>
            </div>
            <button className="btn btn--primary" type="submit">
              Continue to Quote <span aria-hidden="true">→</span>
            </button>
            <p className="quick-quote__note">A quote request does not confirm a booking.</p>
          </form>
        </div>
      </section>

      <div className="stat-strip">
        <div className="stat-strip__inner">
          <div className="stat-card">
            <span className="stat-card__num" aria-hidden="true">↗</span>
            <span className="stat-card__text">Clear route details</span>
          </div>
          <div className="stat-card">
            <span className="stat-card__num" aria-hidden="true">✓</span>
            <span className="stat-card__text">Shipment-based quotes</span>
          </div>
          <div className="stat-card">
            <span className="stat-card__num" aria-hidden="true">▣</span>
            <span className="stat-card__text">Different load sizes</span>
          </div>
          <div className="stat-card">
            <span className="stat-card__num" aria-hidden="true">→</span>
            <span className="stat-card__text">Direct confirmation</span>
          </div>
        </div>
      </div>

      
      <section className="section design-services" aria-labelledby="design-services-title">
        <div className="container design-services__layout">
          <div className="design-services__intro">
            <img
              className="design-services__image"
              src="/images/container-truck.jpg"
              alt="Container truck transporting goods on a highway"
              loading="lazy"
            />
            <div className="design-services__copy">
              <p className="eyebrow">Our services</p>
              <h2 id="design-services-title">Reliable Transport Solutions</h2>
              <p>
                We offer practical goods transport support for business shipments, container cargo and intercity routes.
              </p>
              <Link href="/services" className="btn btn--primary">Explore Our Services <span aria-hidden="true">→</span></Link>
            </div>
          </div>
          <div className="design-services__cards">
            <article className="design-service-card">
              <span className="design-service-card__icon" aria-hidden="true">▣</span>
              <div><h3>General Goods Transport</h3><p>Movement for standard commercial items and regular goods shipments from Karachi.</p></div>
            </article>
            <article className="design-service-card">
              <span className="design-service-card__icon" aria-hidden="true">▰</span>
              <div><h3>Larger Shipments</h3><p>Share the load size and any special handling needs so availability can be checked before you book.</p></div>
            </article>
            <article className="design-service-card">
              <span className="design-service-card__icon" aria-hidden="true">⬡</span>
              <div><h3>Karachi to Faisalabad</h3><p>Goods movement planning for shipments heading to Faisalabad with clear route details.</p></div>
            </article>
            <article className="design-service-card">
              <span className="design-service-card__icon" aria-hidden="true">✓</span>
              <div><h3>Karachi to Lahore</h3><p>Reliable route support for cargo requests headed to Lahore and surrounding business needs.</p></div>
            </article>
            <article className="design-service-card">
              <span className="design-service-card__icon" aria-hidden="true">⌖</span>
              <div><h3>Karachi to Sialkot</h3><p>Support for cargo movement to Sialkot with practical planning for goods and load details.</p></div>
            </article>
            <article className="design-service-card">
              <span className="design-service-card__icon" aria-hidden="true">✉</span>
              <div><h3>Fast Quote Request</h3><p>Send your cargo requirement and route information through the WhatsApp enquiry system.</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--compact design-routes" aria-labelledby="design-routes-title">
        <div className="container">
          <div className="design-routes__heading">
            <div>
              <p className="eyebrow">Popular routes</p>
              <h2 id="design-routes-title">Our Key Transport Routes</h2>
              <p>We specialize in goods transport from Karachi to major cities across Pakistan.</p>
            </div>
            <Link href="/routes" className="btn btn--outline">View All Routes <span aria-hidden="true">→</span></Link>
          </div>
          <div className="design-routes__grid">
            {siteConfig.destinations.map((city, index) => (
              <Link href="/routes" className="design-route-card" key={city}>
                <img
                  src="/images/container-truck.jpg"
                  alt={`Container truck transport route from Karachi to ${city}`}
                  loading="lazy"
                  className={`design-route-card__image design-route-card__image--${index + 1}`}
                />
                <span className="design-route-card__copy">
                  <strong>Karachi → {city}</strong>
                  <small>{index === 0 ? 'Route details · Quote on request' : index === 1 ? 'Goods transport · Quote on request' : 'Shipment planning · Quote on request'}</small>
                </span>
                <span className="design-route-card__arrow" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section promo-film" aria-labelledby="promo-film-title">
              <div className="container promo-film__stack">
                <div className="promo-film__heading">
                  <p className="eyebrow">Cargo in motion</p>
                  <h2 id="promo-film-title">Careful Loading. Smart Transport. Reliable Delivery.</h2>
                </div>
                <PromoVideo />
                <div className="promo-film__below">
                  <p>
                    Every shipment deserves careful handling and a clear plan. This one-minute cargo reel brings together illustrative footage of loading, container handling, unloading and transport—similar to the services customers can enquire about through Rana Shahzaib Goods.
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
              </div>
            </section>

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
