from pathlib import Path

root = Path(__file__).resolve().parent

common = '''<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title}</title>
    <meta name="description" content="{description}" />
    <meta name="theme-color" content="#0c1b2a" />
    {robots}
    <meta property="og:site_name" content="Rana Shahzaib Goods" />
    <meta property="og:locale" content="en_PK" />
    <meta property="og:title" content="{og_title}" />
    <meta property="og:description" content="{og_desc}" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://ranashazaibgoods.com/images/social-share.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Rana Shahzaib Goods cargo transport from Karachi to Faisalabad, Lahore and Sialkot" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="{og_title}" />
    <meta name="twitter:description" content="{og_desc}" />
    <link rel="canonical" href="{canonical_url}" />
    <meta property="og:url" content="{canonical_url}" />
    <link rel="icon" type="image/svg+xml" href="./images/logo.svg" />
    <link rel="stylesheet" href="./css/site.css" />
    <script defer src="./js/main.js"></script>
    <script type="application/ld+json">
      {{
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://ranashazaibgoods.com/#organization",
        "name": "Rana Shahzaib Goods",
        "url": "https://ranashazaibgoods.com/",
        "logo": "https://ranashazaibgoods.com/images/logo.svg",
        "email": "ahmadali22561@gmail.com",
        "telephone": "+923267813992",
        "contactPoint": {{
          "@type": "ContactPoint",
          "telephone": "+923267813992",
          "contactType": "customer service",
          "areaServed": "PK"
        }},
        "areaServed": ["Karachi", "Faisalabad", "Lahore", "Sialkot"]
      }}
    </script>
    {extra_head}
  </head>
  <body>
    <a class="skip-link" href="#main-content">Skip to main content</a>
    <div class="site-topbar">
      <div class="site-topbar__inner">
        <div class="site-topbar__links">
          <span>Cargo &amp; Goods Transportation</span>
          <span>Karachi → Faisalabad | Lahore | Sialkot</span>
        </div>
        <div class="site-topbar__meta">
          <a href="tel:+923267813992" data-phone-link>Phone: <strong data-phone>03267813992</strong></a>
          <a href="https://wa.me/923267813992" data-whatsapp-link>WhatsApp: <strong data-whatsapp>03267813992</strong></a>
        </div>
      </div>
    </div>

    <header class="site-header">
      <div class="site-header__inner">
        <a class="brand" href="./index.html" aria-label="Rana Shahzaib Goods home">
          <img class="brand__logo" src="./images/logo.svg" alt="Rana Shahzaib Goods logo" />
          <span class="brand__text">Rana Shahzaib <strong>Goods</strong></span>
        </a>

        <nav class="nav" id="main-navigation" aria-label="Main navigation">
          <a href="./index.html" {home}>Home</a>
          <a href="./services.html" {services}>Services</a>
          <a href="./routes.html" {routes}>Routes</a>
          <a href="./index.html#how-it-works" {how}>How It Works</a>
          <a href="./faqs.html">FAQs</a>
          <a href="./quote.html" {quote}>Get a Quote</a>
          <a href="./contact.html" {contact}>Contact Us</a>
          <a href="./about.html" {about}>About Us</a>
        </nav>

        <a class="header-cta" href="https://wa.me/923267813992" data-whatsapp-link target="_blank" rel="noopener noreferrer">Get a Quote</a>
        <button class="mobile-toggle" type="button" aria-label="Toggle menu" aria-controls="main-navigation" aria-expanded="false">☰</button>
      </div>
    </header>

    {content}

    <footer class="footer">
      <div class="footer__inner">
        <div>
          <a class="brand" href="./index.html" aria-label="Rana Shahzaib Goods home">
            <img class="brand__logo" src="./images/logo.svg" alt="Rana Shahzaib Goods logo" />
            <span class="brand__text">Rana Shahzaib <strong>Goods</strong></span>
          </a>
          <p style="margin-top: 18px;">Cargo and goods transportation services from Karachi toward Faisalabad, Lahore and Sialkot.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="./index.html">Home</a></li>
            <li><a href="./about.html">About Us</a></li>
            <li><a href="./services.html">Services</a></li>
            <li><a href="./routes.html">Routes</a></li>
            <li><a href="./faqs.html">FAQs</a></li>
            <li><a href="./quote.html">Get a Quote</a></li>
            <li><a href="./contact.html">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Our Routes</h4>
          <ul>
            <li><a href="./routes.html">Karachi → Faisalabad</a></li>
            <li><a href="./routes.html">Karachi → Lahore</a></li>
            <li><a href="./routes.html">Karachi → Sialkot</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>Phone: <a href="tel:+923267813992" data-phone-link><span data-phone>03267813992</span></a></li>
            <li>WhatsApp: <a href="https://wa.me/923267813992" data-whatsapp-link target="_blank" rel="noopener noreferrer"><span data-whatsapp>03267813992</span></a></li>
          </ul>
        </div>
      </div>

      <div class="footer__bottom">
        <div class="footer__bottom-inner">
          <span>© <span data-current-year>2026</span> Rana Shahzaib Goods. All Rights Reserved.</span>
          <div class="footer__bottom-links">
            <a href="./privacy-policy.html">Privacy Policy</a>
            <a href="./terms-conditions.html">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  </body>
</html>
'''

pages = {
    'index.html': {
        'title': 'Cargo Transport from Karachi | Rana Shahzaib Goods',
        'description': 'Arrange cargo and goods transport from Karachi to Faisalabad, Lahore and Sialkot. Share your shipment details to discuss availability and request a clear quote.',
        'og_title': 'Cargo Transport from Karachi | Rana Shahzaib Goods',
        'og_desc': 'Cargo and goods transport from Karachi to Faisalabad, Lahore and Sialkot. Share your shipment details to request a quote.',
        'robots': '',
        'extra_head': '',
        'home': 'class="is-current" aria-current="page"',
        'about': '',
        'services': '',
        'routes': '',
        'how': '',
        'quote': '',
        'contact': '',
        'content': '''<main>
      <section class="hero">
        <div class="hero__inner">
          <div class="hero__content">
            <p class="eyebrow hero__subtitle">Reliable logistics</p>
            <h1 class="hero__title">Cargo &amp; Goods Transport from <span>Karachi</span></h1>
            <p>Rana Shahzaib Goods arranges cargo transport from Karachi to Faisalabad, Lahore and Sialkot. Share your shipment details to discuss availability and request a clear quote.</p>
            <div class="hero__actions">
              <a class="btn btn--primary" href="./quote.html">Get a Quote <span aria-hidden="true">→</span></a>
              <a class="btn btn--outline" href="https://wa.me/923267813992" data-whatsapp-link target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
            </div>
            <div class="hero__route" aria-label="Karachi to destination cities route">
              <span class="route-dot"></span>
              <span>Karachi</span>
              <span class="route-line"></span>
              <span class="route-dot route-dot--end"></span>
              <span>Faisalabad / Lahore / Sialkot</span>
            </div>
          </div>

          <div class="hero__visual">
            <div class="hero__visual-card">
              <div class="hero__img">
                <img src="./images/hero-illustration.svg" alt="Illustration of a container truck transporting goods from Karachi toward Faisalabad, Lahore and Sialkot" />
              </div>
              <div class="hero__badge">
                <span class="badge-icon">↗</span>
                <div>
                  <strong>Karachi → Faisalabad</strong>
                  <small>General goods transport</small>
                </div>
              </div>
            </div>

            <aside class="quick-quote" aria-label="Quick quote request">
              <h3>Need to Send Goods?</h3>
              <div class="quick-quote__row">
                <div>
                  <label for="quick-from">From</label>
                  <input id="quick-from" type="text" value="Karachi" readonly />
                </div>
                <div>
                  <label for="quick-to">To</label>
                  <select id="quick-to">
                    <option value="">Select City</option>
                    <option>Faisalabad</option>
                    <option>Lahore</option>
                    <option>Sialkot</option>
                  </select>
                </div>
                <div>
                  <label for="quick-weight">Approx. Weight</label>
                  <input id="quick-weight" type="text" placeholder="e.g. 750 KG" />
                </div>
                <div>
                  <label for="quick-goods">Goods Type</label>
                  <input id="quick-goods" type="text" placeholder="General cargo" />
                </div>
              </div>
              <a class="btn btn--primary" href="./quote.html">Get a Quote</a>
            </aside>
          </div>
        </div>
      </section>

      <section class="stat-strip" aria-label="Service highlights">
        <div class="stat-strip__inner">
          <div class="stat-card"><span class="stat-card__num">01</span><span class="stat-card__text">Karachi Origin</span></div>
          <div class="stat-card"><span class="stat-card__num">02</span><span class="stat-card__text">3 Major Destinations</span></div>
          <div class="stat-card"><span class="stat-card__num">03</span><span class="stat-card__text">Shipment-Based Planning</span></div>
          <div class="stat-card"><span class="stat-card__num">04</span><span class="stat-card__text">Easy Quote Request</span></div>
        </div>
      </section>

      <section class="section site-anchor" id="about">
        <div class="container two-col">
          <div>
            <p class="eyebrow">About us</p>
            <h2>Professional cargo support for goods moving from Karachi.</h2>
            <p>Rana Shahzaib Goods provides cargo and goods transportation services from Karachi toward Faisalabad, Lahore and Sialkot. We support customers who need a practical and straightforward way to move general goods in a professional, organised manner.</p>
            <p>Our approach is built around clear communication, straightforward enquiry handling, and transport arrangements based on the actual route and cargo requirements. Every shipment enquiry begins with the details needed to review the request and discuss a quote.</p>
            <div class="route-cta-row">
              <a class="btn btn--primary" href="./quote.html">Request a Quote</a>
              <a class="btn btn--outline" href="./about.html">Learn More</a>
            </div>
          </div>

          <div class="route-banner">
            <p class="eyebrow">Route coverage</p>
            <h3>Karachi to the major cities your business depends on.</h3>
            <div class="route-map" aria-label="Karachi to destination cities map">
              <span>Karachi</span>
              <span class="map-line"></span>
              <span>Faisalabad</span>
            </div>
            <div class="route-map" aria-label="Karachi to Lahore route map">
              <span>Karachi</span>
              <span class="map-line"></span>
              <span>Lahore</span>
            </div>
            <div class="route-map" aria-label="Karachi to Sialkot route map">
              <span>Karachi</span>
              <span class="map-line"></span>
              <span>Sialkot</span>
            </div>
            <div class="notice">Share your pickup and destination details so the route and availability can be discussed before a booking is confirmed.</div>
          </div>
        </div>
      </section>

      <section class="section section--compact site-anchor" id="services">
        <div class="container">
          <div class="section-header">
            <p class="eyebrow">Our services</p>
            <h2>Flexible cargo solutions for business shipments.</h2>
          </div>

          <div class="card-grid">
            <article class="service-card">
              <div class="service-card__icon">📦</div>
              <h3>General Goods Transportation</h3>
              <p>For regular commercial and household goods moving from Karachi toward the main destination cities.</p>
              <a href="./services.html" class="btn btn--outline">Learn More</a>
            </article>
            <article class="service-card">
              <div class="service-card__icon">🚛</div>
              <h3>Larger Shipments</h3>
              <p>Share load size and handling needs so suitable transport options and availability can be discussed before booking.</p>
              <a href="./services.html" class="btn btn--outline">Learn More</a>
            </article>
            <article class="service-card">
              <div class="service-card__icon">📍</div>
              <h3>Karachi to Faisalabad Cargo</h3>
              <p>Tailored support for goods being transported from Karachi to Faisalabad in line with shipment needs.</p>
              <a href="./routes.html" class="btn btn--outline">Request Quote</a>
            </article>
            <article class="service-card">
              <div class="service-card__icon">🛣️</div>
              <h3>Karachi to Lahore Cargo</h3>
              <p>Professional movement of goods toward Lahore with a clear enquiry and quotation process.</p>
              <a href="./routes.html" class="btn btn--outline">Request Quote</a>
            </article>
            <article class="service-card">
              <div class="service-card__icon">🏙️</div>
              <h3>Karachi to Sialkot Cargo</h3>
              <p>Reliable cargo planning for goods travelling from Karachi to Sialkot and other route requirements.</p>
              <a href="./routes.html" class="btn btn--outline">Request Quote</a>
            </article>
            <article class="service-card">
              <div class="service-card__icon">✉️</div>
              <h3>Cargo Quote &amp; Booking</h3>
              <p>Submit your shipment details and request a quotation for a transparent review of the transport requirement.</p>
              <a href="./quote.html" class="btn btn--outline">Request Quote</a>
            </article>
          </div>
        </div>
      </section>

      <section class="section site-anchor" id="how-it-works">
        <div class="container">
          <div class="section-header">
            <p class="eyebrow">How it works</p>
            <h2>A simple process for commercial and general cargo enquiries.</h2>
          </div>
          <div class="process-grid">
            <article class="process-card">
              <div class="process-card__num">01</div>
              <h3>Submit Shipment Details</h3>
              <p>Share the origin, destination, goods type, weight and pickup information needed for review.</p>
            </article>
            <article class="process-card">
              <div class="process-card__num">02</div>
              <h3>Request a Quote</h3>
              <p>Provide your cargo requirements and the business will review the request for a suitable quotation.</p>
            </article>
            <article class="process-card">
              <div class="process-card__num">03</div>
              <h3>Confirm Transportation</h3>
              <p>Discuss the shipment requirement, route details and the final cargo arrangement before dispatch.</p>
            </article>
            <article class="process-card">
              <div class="process-card__num">04</div>
              <h3>Cargo Dispatch</h3>
              <p>Once the schedule and requirements are confirmed, the goods are arranged for movement toward destination.</p>
            </article>
          </div>
        </div>
      </section>

      <section class="section section--compact">
        <div class="container">
          <div class="section-header">
            <p class="eyebrow">Why choose us</p>
            <h2>Clear communication and practical cargo support.</h2>
          </div>
          <div class="feature-grid">
            <article class="feature-card">
              <div class="feature-card__icon">✓</div>
              <h3>Clear Quote Process</h3>
              <p>Send your shipment details and get a clear review of your cargo requirement.</p>
            </article>
            <article class="feature-card">
              <div class="feature-card__icon">📍</div>
              <h3>Multiple Destination Cities</h3>
              <p>Support for Karachi to Faisalabad, Lahore and Sialkot cargo movement.</p>
            </article>
            <article class="feature-card">
              <div class="feature-card__icon">🚚</div>
              <h3>Larger Shipments</h3>
              <p>Describe your load size and any special handling needs for an availability review.</p>
            </article>
            <article class="feature-card">
              <div class="feature-card__icon">💬</div>
              <h3>Easy Customer Communication</h3>
              <p>Simple WhatsApp and direct contact flow for enquiries and quote requests.</p>
            </article>
            <article class="feature-card">
              <div class="feature-card__icon">🧾</div>
              <h3>Simple Booking Process</h3>
              <p>Begin with shipment details and move toward a practical cargo arrangement.</p>
            </article>
            <article class="feature-card">
              <div class="feature-card__icon">🤝</div>
              <h3>Direct Support</h3>
              <p>Work with a team that responds to real cargo requirements and route questions.</p>
            </article>
          </div>
        </div>
      </section>

      <section class="section section--compact">
        <div class="container">
          <div class="section-header">
            <p class="eyebrow">Cargo types</p>
            <h2>What can you send?</h2>
          </div>
          <div class="feature-grid">
            <article class="feature-card">
              <div class="feature-card__icon">🏬</div>
              <h3>General Commercial Goods</h3>
              <p>Business shipments and commercial products that fit the legal cargo requirements.</p>
            </article>
            <article class="feature-card">
              <div class="feature-card__icon">🛍️</div>
              <h3>Shop &amp; Business Stock</h3>
              <p>Goods stock for retail or commercial operations moving between cities.</p>
            </article>
            <article class="feature-card">
              <div class="feature-card__icon">📦</div>
              <h3>Wholesale Goods</h3>
              <p>Bulk shipments and wholesale merchandise requiring a planned transport route.</p>
            </article>
            <article class="feature-card">
              <div class="feature-card__icon">📦</div>
              <h3>Packed Merchandise</h3>
              <p>Packaged goods and merchandise prepared for cargo movement and route transport.</p>
            </article>
            <article class="feature-card">
              <div class="feature-card__icon">📦</div>
              <h3>Other Suitable Cargo</h3>
              <p>Other legal and suitable goods based on shipment requirements and transport conditions.</p>
            </article>
            <article class="feature-card">
              <div class="feature-card__icon">⚠️</div>
              <h3>Acceptance Note</h3>
              <p>Cargo acceptance is subject to transport requirements and applicable laws.</p>
            </article>
          </div>
        </div>
      </section>

      <section class="section site-anchor" id="faq">
        <div class="container two-col">
          <div>
            <p class="eyebrow">FAQ</p>
            <h2>Answers to common cargo quotation questions.</h2>
            <p>We keep the process straightforward so customers can share shipment details and request a quote with confidence.</p>
          </div>
          <div class="faqlist" aria-label="Frequently asked questions">
            <article class="faq-item is-open">
              <button class="faq-item__question" type="button">How can I request a cargo quotation?<span class="faq-item__icon">+</span></button>
              <div class="faq-item__answer" style="max-height: 160px;">
                <div class="faq-item__answer-inner">Use the quotation form or WhatsApp message flow and share your shipment details including origin, destination, goods type, weight, and pickup information.</div>
              </div>
            </article>
            <article class="faq-item">
              <button class="faq-item__question" type="button">Which cities do you currently serve?<span class="faq-item__icon">+</span></button>
              <div class="faq-item__answer"><div class="faq-item__answer-inner">We currently handle cargo movement from Karachi toward Faisalabad, Lahore and Sialkot.</div></div>
            </article>
            <article class="faq-item">
              <button class="faq-item__question" type="button">Where does the cargo originate?<span class="faq-item__icon">+</span></button>
              <div class="faq-item__answer"><div class="faq-item__answer-inner">Goods are received from Karachi and then transported toward the destination city based on the enquiry and booking details.</div></div>
            </article>
            <article class="faq-item">
              <button class="faq-item__question" type="button">Can I send different types of goods?<span class="faq-item__icon">+</span></button>
              <div class="faq-item__answer"><div class="faq-item__answer-inner">Yes, general cargo and suitable goods can be reviewed based on the actual shipment type, packaging, and transport requirements.</div></div>
            </article>
            <article class="faq-item">
              <button class="faq-item__question" type="button">How is the transport rate calculated?<span class="faq-item__icon">+</span></button>
              <div class="faq-item__answer"><div class="faq-item__answer-inner">The quotation can depend on the goods type, approximate weight, package count, dimensions, route, pickup and delivery requirements, and current transport conditions.</div></div>
            </article>
            <article class="faq-item">
              <button class="faq-item__question" type="button">What information is required for a quotation?<span class="faq-item__icon">+</span></button>
              <div class="faq-item__answer"><div class="faq-item__answer-inner">A name, mobile number, origin and destination, goods type, weight, package count, pickup address, delivery address and any additional details help us review the shipment.</div></div>
            </article>
            <article class="faq-item">
              <button class="faq-item__question" type="button">How do I contact Rana Shahzaib Goods?<span class="faq-item__icon">+</span></button>
              <div class="faq-item__answer"><div class="faq-item__answer-inner">You can contact the business by phone, WhatsApp, email or by using the quote enquiry form on the website.</div></div>
            </article>
          </div>
        </div>
      </section>

      <section class="section section--compact">
        <div class="container contact-grid">
          <div class="contact-panel">
            <p class="eyebrow">Contact</p>
            <h2>Ready to move your goods?</h2>
            <p>Get in touch to discuss your cargo enquiry and request a quote for Karachi-based movement toward Faisalabad, Lahore or Sialkot.</p>
            <div class="contact-details">
              <div class="contact-detail">
                <span class="detail-icon">☎</span>
                <div><strong>Phone</strong><br /><span data-phone>03267813992</span></div>
              </div>
              <div class="contact-detail">
                <span class="detail-icon">💬</span>
                <div><strong>WhatsApp</strong><br /><a href="https://wa.me/923267813992" data-whatsapp-link target="_blank" rel="noopener noreferrer"><span data-whatsapp>03267813992</span></a></div>
              </div>
              <div class="contact-detail">
                <span class="detail-icon">✉</span>
              </div>
            </div>
          </div>

          <div class="contact-panel">
            <p class="eyebrow">Quick action</p>
            <h3>Get your cargo quotation</h3>
            <p>Share your route requirements and shipment details for a clear review.</p>
            <div class="route-cta-row">
              <a class="btn btn--primary" href="./quote.html">Get a Quote</a>
              <a class="btn btn--dark" href="https://wa.me/923267813992" data-whatsapp-link target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a class="btn btn--outline" href="tel:+923267813992" data-phone-link>Call Now</a>
            </div>
          </div>
        </div>
      </section>
    </main>''',
    },
    'about.html': {
        'title': 'About Our Cargo Company | Rana Shahzaib Goods',
        'description': 'Learn about Rana Shahzaib Goods and our cargo transport arrangements from Karachi to Faisalabad, Lahore and Sialkot.',
        'og_title': 'About Our Cargo Company | Rana Shahzaib Goods',
        'og_desc': 'Learn about our cargo and goods transport arrangements from Karachi to Faisalabad, Lahore and Sialkot.',
        'robots': '',
        'extra_head': '',
        'home': '',
        'about': 'class="is-current" aria-current="page"',
        'services': '',
        'routes': '',
        'how': '',
        'quote': '',
        'contact': '',
        'content': '''<main>
      <section class="page-hero">
        <div class="page-hero__inner">
          <div class="page-hero__content">
            <span class="page-hero__crumb">About us</span>
            <h1>Dedicated cargo support from Karachi.</h1>
            <p>Rana Shahzaib Goods provides a clear and dependable route for moving general goods from Karachi toward Faisalabad, Lahore and Sialkot.</p>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container two-col">
          <div>
            <p class="eyebrow">Our business</p>
            <h2>Professional goods transportation built around clear answers.</h2>
            <p>Rana Shahzaib Goods works with customers who need a practical cargo and goods transport solution from Karachi. The focus is on handling cargo requirements professionally, with straightforward communication and a clear quotation process.</p>
            <p>We support shipments toward Faisalabad, Lahore and Sialkot, helping customers understand the route, cargo type, and enquiry details before moving goods. The business remains centred on realistic movement requirements and responsible transport planning.</p>
          </div>
          <div class="quote-panel">
            <h3>What we do</h3>
            <div class="notice">We handle cargo enquiries and transport arrangements for general goods moving from Karachi toward major destination cities.</div>
            <ul style="padding-left: 18px; color: var(--slate-700); margin-top: 20px;">
              <li>Review cargo movement request details.</li>
              <li>Support enquiries for destination cities.</li>
              <li>Discuss goods types and shipment requirements.</li>
              <li>Provide a clear quotation based on actual information.</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="section section--compact">
        <div class="container">
          <div class="section-header">
            <p class="eyebrow">Why it matters</p>
            <h2>Simple logistics support for commercial cargo.</h2>
          </div>
          <div class="feature-grid">
            <article class="feature-card">
              <div class="feature-card__icon">🧭</div>
              <h3>Route clarity</h3>
              <p>We focus on the destination city and the actual cargo details to keep the process understandable.</p>
            </article>
            <article class="feature-card">
              <div class="feature-card__icon">📦</div>
              <h3>Goods-focused planning</h3>
              <p>Business customers can explain what they are sending, how much, and what their route requirement is.</p>
            </article>
            <article class="feature-card">
              <div class="feature-card__icon">💬</div>
              <h3>Clear communication</h3>
              <p>From the initial enquiry to the quote request, customers receive a simple and professional process.</p>
            </article>
          </div>
        </div>
      </section>
    </main>''',
    },
    'services.html': {
        'title': 'Cargo Transport Services | Rana Shahzaib Goods',
        'description': 'Explore goods transport enquiries from Karachi to Faisalabad, Lahore and Sialkot. Request a quote based on your shipment details.',
        'og_title': 'Cargo Transport Services | Rana Shahzaib Goods',
        'og_desc': 'Goods transport enquiries from Karachi to Faisalabad, Lahore and Sialkot.',
        'robots': '',
        'extra_head': '',
        'home': '',
        'about': '',
        'services': 'class="is-current" aria-current="page"',
        'routes': '',
        'how': '',
        'quote': '',
        'contact': '',
        'content': '''<main>
      <section class="page-hero">
        <div class="page-hero__inner">
          <div class="page-hero__content">
            <span class="page-hero__crumb">Services</span>
            <h1>Cargo services for goods moving from Karachi.</h1>
            <p>Send a goods transport enquiry from Karachi toward Faisalabad, Lahore or Sialkot. Availability and suitable transport arrangements are confirmed against the shipment details.</p>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container card-grid">
          <article class="service-card">
            <div class="service-card__icon">📦</div>
            <h3>General Goods Transportation</h3>
            <p>Movement for general goods, commercial orders, and standard cargo shipments prepared for transport from Karachi.</p>
            <a href="./quote.html" class="btn btn--outline">Request Quote</a>
          </article>
          <article class="service-card">
            <div class="service-card__icon">🚛</div>
            <h3>Larger Shipments</h3>
            <p>Tell us the size and any special handling needs so the suitable transport option and route availability can be discussed before booking.</p>
            <a href="./quote.html" class="btn btn--outline">Request Quote</a>
          </article>
          <article class="service-card">
            <div class="service-card__icon">📍</div>
            <h3>Karachi to Faisalabad Cargo</h3>
            <p>Movement of goods from Karachi to Faisalabad for regular cargo requests and practical delivery planning.</p>
            <a href="./routes.html" class="btn btn--outline">View Route</a>
          </article>
          <article class="service-card">
            <div class="service-card__icon">🛣️</div>
            <h3>Karachi to Lahore Cargo</h3>
            <p>Support for general cargo movement tailored to the Lahore route and shipment requirements.</p>
            <a href="./routes.html" class="btn btn--outline">View Route</a>
          </article>
          <article class="service-card">
            <div class="service-card__icon">🏙️</div>
            <h3>Karachi to Sialkot Cargo</h3>
            <p>Professional route planning for goods moving from Karachi to Sialkot with clear shipment information.</p>
            <a href="./routes.html" class="btn btn--outline">View Route</a>
          </article>
          <article class="service-card">
            <div class="service-card__icon">✉️</div>
            <h3>Cargo Quote &amp; Booking</h3>
            <p>Submit your goods details and route requirements for a straightforward quotation and next steps.</p>
            <a href="./quote.html" class="btn btn--primary">Get a Quote</a>
          </article>
        </div>
      </section>

      <section class="section section--compact">
        <div class="container quote-panel">
          <p class="eyebrow">Transport note</p>
          <h3>Quotation depends on the shipment details.</h3>
          <p>Rate and route planning can depend on goods type, approximate weight, package count, shipment size, pickup and delivery requirements, and current transport conditions. A formal quotation is prepared only from the actual business information provided.</p>
          <div class="route-cta-row">
            <a class="btn btn--primary" href="./quote.html">Submit Cargo Details</a>
            <a class="btn btn--outline" href="./contact.html">Contact Us</a>
          </div>
        </div>
      </section>
    </main>''',
    },
    'routes.html': {
        'title': 'Karachi Cargo Routes | Lahore, Faisalabad & Sialkot',
        'description': 'View cargo routes from Karachi to Faisalabad, Lahore and Sialkot. Contact Rana Shahzaib Goods to discuss your destination and shipment.',
        'og_title': 'Karachi Cargo Routes | Lahore, Faisalabad & Sialkot',
        'og_desc': 'Cargo transport routes from Karachi to Faisalabad, Lahore and Sialkot.',
        'robots': '',
        'extra_head': '',
        'home': '',
        'about': '',
        'services': '',
        'routes': 'class="is-current" aria-current="page"',
        'how': '',
        'quote': '',
        'contact': '',
        'content': '''<main>
      <section class="page-hero">
        <div class="page-hero__inner">
          <div class="page-hero__content">
            <span class="page-hero__crumb">Routes</span>
            <h1>Cargo routes from Karachi.</h1>
            <p>Review the destinations we handle enquiries for. Tell us your cargo details to discuss availability and request a route-specific quote.</p>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container route-grid">
          <article class="route-card">
            <span class="route-card__meta">Route 01</span>
            <h3>Karachi → Faisalabad</h3>
            <p>Goods transport from Karachi toward Faisalabad for general commercial or business cargo requirements.</p>
            <ul>
              <li>Origin: Karachi</li>
              <li>Destination: Faisalabad</li>
              <li>Shipment details: reviewed for availability</li>
            </ul>
            <div class="route-cta-row"><a href="./quote.html" class="btn btn--primary">Request Quote</a></div>
          </article>
          <article class="route-card">
            <span class="route-card__meta">Route 02</span>
            <h3>Karachi → Lahore</h3>
            <p>Professional cargo movement for goods travelling from Karachi to Lahore, based on actual route requirements.</p>
            <ul>
              <li>Origin: Karachi</li>
              <li>Destination: Lahore</li>
              <li>Load and delivery needs: discussed directly</li>
            </ul>
            <div class="route-cta-row"><a href="./quote.html" class="btn btn--primary">Request Quote</a></div>
          </article>
          <article class="route-card">
            <span class="route-card__meta">Route 03</span>
            <h3>Karachi → Sialkot</h3>
            <p>Route support for customers shipping goods from Karachi to Sialkot under a planned cargo arrangement.</p>
            <ul>
              <li>Origin: Karachi</li>
              <li>Destination: Sialkot</li>
              <li>Load and delivery needs: discussed directly</li>
            </ul>
            <div class="route-cta-row"><a href="./quote.html" class="btn btn--primary">Request Quote</a></div>
          </article>
        </div>
      </section>

      <section class="section section--compact">
        <div class="container quote-panel">
          <p class="eyebrow">Rate determination</p>
          <h3>How your cargo rate is determined</h3>
          <p>Quotation can depend on the goods type, approximate weight, number of packages, shipment size or dimensions, pickup requirements, delivery requirements, route and current transport conditions. Rates are not fixed without actual shipment information.</p>
          <div class="notice">No fixed transport price is displayed because the final cost depends on the real shipment details and business requirements.</div>
        </div>
      </section>
    </main>''',
    },
    'contact.html': {
        'title': 'Contact for Cargo Quotes | Rana Shahzaib Goods',
        'description': 'Contact Rana Shahzaib Goods by phone or WhatsApp to discuss cargo transport from Karachi to Faisalabad, Lahore and Sialkot.',
        'og_title': 'Contact for Cargo Quotes | Rana Shahzaib Goods',
        'og_desc': 'Discuss your shipment and request a cargo quote by contacting Rana Shahzaib Goods.',
        'robots': '',
        'extra_head': '',
        'home': '',
        'about': '',
        'services': '',
        'routes': '',
        'how': '',
        'quote': '',
        'contact': 'class="is-current" aria-current="page"',
        'content': '''<main>
      <section class="page-hero">
        <div class="page-hero__inner">
          <div class="page-hero__content">
            <span class="page-hero__crumb">Contact</span>
            <h1>Talk to Rana Shahzaib Goods</h1>
            <p>Request a quote, ask about route availability, or discuss your shipment requirements for Karachi-based cargo and goods transportation.</p>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container contact-grid">
          <div class="contact-panel">
            <p class="eyebrow">Company details</p>
            <h2>Rana Shahzaib Goods</h2>
            <p>Cargo &amp; Goods Transportation</p>
            <div class="contact-details">
              <div class="contact-detail">
                <span class="detail-icon">📍</span>
                <div><strong>Route</strong><br />Karachi → Faisalabad<br />Karachi → Lahore<br />Karachi → Sialkot</div>
              </div>
              <div class="contact-detail">
                <span class="detail-icon">☎</span>
                <div><strong>Phone</strong><br /><span data-phone>03267813992</span></div>
              </div>
              <div class="contact-detail">
                <span class="detail-icon">💬</span>
                <div><strong>WhatsApp</strong><br /><a href="https://wa.me/923267813992" data-whatsapp-link target="_blank" rel="noopener noreferrer"><span data-whatsapp>03267813992</span></a></div>
              </div>
              <div class="contact-detail">
                <span class="detail-icon">✉</span>
              </div>
            </div>
          </div>

          <div class="contact-panel">
            <p class="eyebrow">Need a quote?</p>
            <h3>Send a shipment enquiry</h3>
            <p>Share the important details and our team can review the cargo requirement.</p>
            <div class="route-cta-row">
              <a class="btn btn--primary" href="./quote.html">Request a Quote</a>
              <a class="btn btn--dark" href="https://wa.me/923267813992" data-whatsapp-link target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </main>''',
    },
    'quote.html': {
        'title': 'Request a Cargo Quote | Rana Shahzaib Goods',
        'description': 'Request a cargo transport quote from Karachi to Faisalabad, Lahore or Sialkot. Provide your route, goods type and shipment details.',
        'og_title': 'Request a Cargo Quote | Rana Shahzaib Goods',
        'og_desc': 'Share your shipment details to request a cargo transport quote from Karachi.',
        'robots': '',
        'extra_head': '<script defer src="./js/quote.js"></script>',
        'home': '',
        'about': '',
        'services': '',
        'routes': '',
        'how': '',
        'quote': 'class="is-current" aria-current="page"',
        'contact': '',
        'content': '''<main>
      <section class="page-hero">
        <div class="page-hero__inner">
          <div class="page-hero__content">
            <span class="page-hero__crumb">Get a quote</span>
            <h1>Request a Cargo Quote</h1>
            <p>Tell us about your shipment and our team can review the details for a quotation.</p>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container" style="max-width: 920px;">
          <form class="quote-panel" id="quote-form" novalidate>
            <div class="section-header" style="margin-bottom:0;">
              <p class="eyebrow">Shipment enquiry</p>
              <h2>Tell us about your shipment.</h2>
            </div>

            <div class="form-grid">
              <div class="form-group">
                <label for="fullName">Full Name</label>
                <input id="fullName" name="fullName" type="text" autocomplete="name" placeholder="Enter full name" required />
              </div>
              <div class="form-group">
                <label for="mobileNumber">Mobile Number</label>
                <input id="mobileNumber" name="mobileNumber" type="tel" autocomplete="tel" inputmode="tel" placeholder="03267813992" required />
              </div>
              <div class="form-group">
                <label for="whatsAppNumber">WhatsApp Number</label>
                <input id="whatsAppNumber" name="whatsAppNumber" type="tel" autocomplete="tel" inputmode="tel" placeholder="03267813992" />
              </div>
              <div class="form-group">
                <label for="companyName">Company / Business Name</label>
                <input id="companyName" name="companyName" type="text" placeholder="Optional" />
              </div>
              <div class="form-group">
                <label for="pickupCity">Pickup City</label>
                <input id="pickupCity" name="pickupCity" type="text" value="Karachi" required />
              </div>
              <div class="form-group">
                <label for="destinationCity">Destination City</label>
                <select id="destinationCity" name="destinationCity" required>
                  <option value="">Select city</option>
                  <option>Faisalabad</option>
                  <option>Lahore</option>
                  <option>Sialkot</option>
                </select>
              </div>
              <div class="form-group">
                <label for="goodsType">Goods Type</label>
                <input id="goodsType" name="goodsType" type="text" placeholder="General cargo" required />
              </div>
              <div class="form-group">
                <label for="weight">Approximate Weight</label>
                <input id="weight" name="weight" type="number" min="0.1" step="any" placeholder="e.g. 750" required />
              </div>
              <div class="form-group">
                <label for="weightUnit">Weight Unit</label>
                <select id="weightUnit" name="weightUnit">
                  <option>KG</option>
                  <option>TON</option>
                </select>
              </div>
              <div class="form-group">
                <label for="packages">Number of Packages</label>
                <input id="packages" name="packages" type="number" min="1" placeholder="1" required />
              </div>
              <div class="form-group" style="grid-column: 1 / -1;">
                <label for="pickupAddress">Pickup Address</label>
                <textarea id="pickupAddress" name="pickupAddress" autocomplete="street-address" placeholder="Full pickup address" required></textarea>
              </div>
              <div class="form-group" style="grid-column: 1 / -1;">
                <label for="deliveryAddress">Delivery Address</label>
                <textarea id="deliveryAddress" name="deliveryAddress" placeholder="Full delivery address" required></textarea>
              </div>
              <div class="form-group">
                <label for="pickupDate">Preferred Pickup Date</label>
                <input id="pickupDate" name="pickupDate" type="date" />
              </div>
              <div class="form-group">
                <label for="dimensions">Approximate Dimensions</label>
                <input id="dimensions" name="dimensions" type="text" placeholder="Optional" />
              </div>
              <div class="form-group" style="grid-column: 1 / -1;">
                <label for="additionalInformation">Additional Information</label>
                <textarea id="additionalInformation" name="additionalInformation" placeholder="Optional notes or shipment details"></textarea>
              </div>
            </div>

            <label class="inline-checkbox" for="confirmDetails">
              <input id="confirmDetails" type="checkbox" />
              <span>I confirm that the shipment information provided is accurate to the best of my knowledge.</span>
            </label>

            <p class="form-privacy-note">Selecting “Request a Quote” sends your details to WhatsApp to prepare a message draft. The enquiry reaches the business only if you press Send in WhatsApp. Read our <a href="./privacy-policy.html">Privacy Notice</a>.</p>
            <button class="btn btn--primary" type="submit">Request a Quote</button>
            <p id="form-message" class="form-message" role="status" aria-live="polite"></p>
          </form>
        </div>
      </section>
    </main>''',
    },
    'faqs.html': {
        'title': 'Cargo Transport FAQs | Rana Shahzaib Goods',
        'description': 'Answers to common questions about cargo transport enquiries from Karachi, routes, quotes, shipment details and bookings.',
        'og_title': 'Cargo Transport FAQs | Rana Shahzaib Goods',
        'og_desc': 'Find answers about Karachi cargo routes, requesting a quote, shipment details and confirming a transport booking.',
        'robots': '',
        'extra_head': '',
        'home': '',
        'about': '',
        'services': '',
        'routes': '',
        'how': '',
        'quote': '',
        'contact': '',
        'content': '''<main>
      <section class="page-hero">
        <div class="page-hero__inner">
          <div class="page-hero__content">
            <span class="page-hero__crumb">FAQs</span>
            <h1>Frequently asked questions about cargo transport.</h1>
            <p>Find practical answers about our Karachi routes, shipment enquiries, quote requests and booking confirmations.</p>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container two-col">
          <div>
            <p class="eyebrow">Cargo enquiry help</p>
            <h2>What to know before requesting a quote.</h2>
            <p>These answers explain the information that helps us review a shipment enquiry. Route availability, rates and arrangements are discussed and confirmed directly for each shipment.</p>
            <a class="btn btn--primary" href="./quote.html">Request a Quote</a>
          </div>
          <div class="faqlist" aria-label="Frequently asked questions">
            <article class="faq-item">
              <button class="faq-item__question" type="button">Which cities do you serve from Karachi?<span class="faq-item__icon" aria-hidden="true">+</span></button>
              <div class="faq-item__answer"><div class="faq-item__answer-inner">You can enquire about cargo transport from Karachi to Faisalabad, Lahore and Sialkot. Availability for your shipment should be confirmed directly.</div></div>
            </article>
            <article class="faq-item">
              <button class="faq-item__question" type="button">What information should I provide for a quote?<span class="faq-item__icon" aria-hidden="true">+</span></button>
              <div class="faq-item__answer"><div class="faq-item__answer-inner">Share your contact details, destination, goods type, approximate weight, package count, shipment dimensions if available, and pickup or delivery requirements.</div></div>
            </article>
            <article class="faq-item">
              <button class="faq-item__question" type="button">How do I request a transport quote?<span class="faq-item__icon" aria-hidden="true">+</span></button>
              <div class="faq-item__answer"><div class="faq-item__answer-inner">Complete the <a href="./quote.html">quote form</a>. It opens WhatsApp with a prepared message; review it and press Send in WhatsApp to send your enquiry.</div></div>
            </article>
            <article class="faq-item">
              <button class="faq-item__question" type="button">Does submitting a quote request confirm my booking?<span class="faq-item__icon" aria-hidden="true">+</span></button>
              <div class="faq-item__answer"><div class="faq-item__answer-inner">No. A quote request is an enquiry only. The route, availability, price, pickup and delivery arrangements must be discussed and confirmed directly before transport is booked.</div></div>
            </article>
            <article class="faq-item">
              <button class="faq-item__question" type="button">Are transport rates fixed?<span class="faq-item__icon" aria-hidden="true">+</span></button>
              <div class="faq-item__answer"><div class="faq-item__answer-inner">Rates are not listed as fixed prices. A quote can depend on the cargo type, weight, package count, dimensions, route, pickup and delivery needs, and current transport conditions.</div></div>
            </article>
            <article class="faq-item">
              <button class="faq-item__question" type="button">Can I enquire about different types of goods?<span class="faq-item__icon" aria-hidden="true">+</span></button>
              <div class="faq-item__answer"><div class="faq-item__answer-inner">Share an accurate description of your goods and any special handling requirements. The business will review the shipment details and confirm whether it can be arranged.</div></div>
            </article>
            <article class="faq-item">
              <button class="faq-item__question" type="button">Can you confirm pickup, delivery and timing in advance?<span class="faq-item__icon" aria-hidden="true">+</span></button>
              <div class="faq-item__answer"><div class="faq-item__answer-inner">Pickup, delivery, timing and availability depend on the shipment and must be discussed and confirmed directly with the business before booking.</div></div>
            </article>
            <article class="faq-item">
              <button class="faq-item__question" type="button">How can I contact Rana Shahzaib Goods?<span class="faq-item__icon" aria-hidden="true">+</span></button>
              <div class="faq-item__answer"><div class="faq-item__answer-inner">Contact us by <a href="./contact.html">phone, WhatsApp or email</a>, or send your shipment details using the quote enquiry form.</div></div>
            </article>
          </div>
        </div>
      </section>
    </main>''',
    },
    'privacy-policy.html': {
        'title': 'Privacy Notice | Rana Shahzaib Goods',
        'description': 'Learn how a quote enquiry is prepared for WhatsApp and what happens to the shipment details you provide.',
        'og_title': 'Privacy Notice | Rana Shahzaib Goods',
        'og_desc': 'How shipment enquiry details are handled when you request a quote.',
        'robots': '<meta name="robots" content="noindex, follow" />',
        'extra_head': '',
        'home': '',
        'about': '',
        'services': '',
        'routes': '',
        'how': '',
        'quote': '',
        'contact': '',
        'content': '''<main>
      <section class="page-hero">
        <div class="page-hero__inner">
          <div class="page-hero__content">
            <span class="page-hero__crumb">Legal</span>
            <h1>Privacy Policy</h1>
            <p>Read how a quote enquiry is prepared and how to contact us about your information.</p>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container quote-panel">
          <h2>Information you enter</h2>
          <p>The quote form asks for contact details and shipment information so the business can review your transport enquiry. Selecting “Request a Quote” opens a WhatsApp link containing those details so WhatsApp can prepare a message draft. This sends the details to WhatsApp; the enquiry reaches the business only if you press Send in WhatsApp. Do not include information you do not want to share with WhatsApp or the business.</p>
          <h2>WhatsApp and service providers</h2>
          <p>WhatsApp is a separate service operated by Meta. If you send your enquiry there, its use of your information is governed by WhatsApp's own terms and privacy information. The website is static and has no enquiry database or account system. The hosting provider may process technical request data under its own policies.</p>
          <h2>Contact us</h2>
          <p>For a question about an enquiry you sent, contact Rana Shahzaib Goods at <a href="mailto:ahmadali22561@gmail.com" data-email-link>ahmadali22561@gmail.com</a> or <a href="tel:+923267813992" data-phone-link><span data-phone>03267813992</span></a>.</p>
          <p>This notice describes the current website behaviour. The business owner should review it for applicable legal requirements and confirm the hosting provider's data practices before launch.</p>
        </div>
      </section>
    </main>''',
    },
    'terms-conditions.html': {
        'title': 'Service Terms | Rana Shahzaib Goods',
        'description': 'Understand how quote requests, availability checks and shipment confirmations work.',
        'og_title': 'Service Terms | Rana Shahzaib Goods',
        'og_desc': 'How quote requests, availability checks and shipment confirmations work.',
        'robots': '<meta name="robots" content="noindex, follow" />',
        'extra_head': '',
        'home': '',
        'about': '',
        'services': '',
        'routes': '',
        'how': '',
        'quote': '',
        'contact': '',
        'content': '''<main>
      <section class="page-hero">
        <div class="page-hero__inner">
          <div class="page-hero__content">
            <span class="page-hero__crumb">Legal</span>
            <h1>Terms &amp; Conditions</h1>
            <p>Important information about enquiries, quotes and transport arrangements.</p>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container quote-panel">
          <h2>Enquiries and quotations</h2>
          <p>Submitting a website form or sending a message asks the business to review your shipment details. It is not a confirmed booking. A quote is based on the information provided and must be discussed and accepted directly with the business.</p>
          <h2>Availability and confirmation</h2>
          <p>Route availability, schedule, charges, pickup and delivery arrangements, and any other shipment conditions must be confirmed directly before transport is arranged. Do not treat an enquiry or an unaccepted quote as confirmation of a vehicle or delivery date.</p>
          <h2>Shipment details</h2>
          <p>Please provide accurate information about the goods, weight, packages, dimensions, and addresses. Contact the business before booking if the cargo has handling, safety, or legal requirements.</p>
          <p>These website terms do not replace the final written agreement for an accepted shipment. The business owner should obtain local legal review and add applicable payment, cancellation, liability, claims, and dispute terms before launch.</p>
        </div>
      </section>
    </main>''',
    },
}

for name, data in pages.items():
    if name == 'index.html' or (root / name).exists():
        continue

    data['canonical_url'] = (
        'https://ranashazaibgoods.com/'
        if name == 'index.html'
        else f'https://ranashazaibgoods.com/{name}'
    )
    html = common.format(**data)
    html = html.replace('<main>', '<main id="main-content">')
    (root / name).write_text(html, encoding='utf-8')

public_pages = [
    page.name
    for page in sorted(root.glob('*.html'))
    if page.name not in ('404.html', 'privacy-policy.html', 'terms-conditions.html')
]
sitemap_urls = ''.join(
    f'  <url><loc>https://ranashazaibgoods.com/{"" if name == "index.html" else name}</loc></url>\n'
    for name in public_pages
)
(root / 'sitemap.xml').write_text(
    '<?xml version="1.0" encoding="UTF-8"?>\n'
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    f'{sitemap_urls}'
    '</urlset>\n',
    encoding='utf-8'
)
(root / 'robots.txt').write_text(
    'User-agent: *\nAllow: /\nSitemap: https://ranashazaibgoods.com/sitemap.xml\n',
    encoding='utf-8'
)

print('Generated any missing starter pages and refreshed sitemap.xml and robots.txt.')
