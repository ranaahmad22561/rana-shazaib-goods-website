import Link from 'next/link';
import { siteConfig } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <Link className="brand" href="/" prefetch={false} aria-label="Rana Shahzaib Goods home">
            <img className="brand__logo" src="/images/logo.svg" alt="Rana Shahzaib Goods logo" />
            <span className="brand__text">
              Rana Shahzaib <strong>Goods</strong>
            </span>
          </Link>
          <p style={{ marginTop: '18px' }}>Cargo and goods transportation services from Karachi toward Faisalabad, Lahore and Sialkot.</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/" prefetch={false}>Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/routes">Routes</Link></li>
            <li><Link href="/faqs">FAQs</Link></li>
            <li><Link href="/quote">Get a Quote</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4>Our Routes</h4>
          <ul>
            <li><Link href="/routes">Karachi → Faisalabad</Link></li>
            <li><Link href="/routes">Karachi → Lahore</Link></li>
            <li><Link href="/routes">Karachi → Sialkot</Link></li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul>
            <li>
              Phone: <a href={`tel:+92${siteConfig.phone.replace(/^0/, '')}`}>{siteConfig.phone}</a>
            </li>
            <li>
              WhatsApp: <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noreferrer">{siteConfig.phone}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <span>
            © <span>{new Date().getFullYear()}</span> Rana Shahzaib Goods. All Rights Reserved.
          </span>
          <div className="footer__bottom-links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-conditions">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
