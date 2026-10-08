'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { siteConfig } from '@/lib/site';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/routes', label: 'Routes' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/faqs', label: 'FAQs' },
  { href: '/quote', label: 'Get a Quote' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/about', label: 'About Us' },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isOpen]);

  return (
    <>
      <div className="site-topbar">
        <div className="site-topbar__inner container">
          <div className="site-topbar__links">
            <span>Cargo &amp; Goods Transportation</span>
            <span>Karachi → Faisalabad | Lahore | Sialkot</span>
          </div>
          <div className="site-topbar__meta">
            <a href={`tel:+92${siteConfig.phone.replace(/^0/, '')}`}>
              Call: <strong>{siteConfig.phone}</strong>
            </a>
            <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="site-header__inner container">
          <Link className="brand" href="/" prefetch={false} aria-label="Rana Shazaib Goods home">
            <img className="brand__logo" src="/images/logo.svg" alt="Rana Shazaib Goods logo" />
            <span className="brand__text">
              Rana Shazaib <strong>Goods</strong>
            </span>
          </Link>

          <nav className={`nav ${isOpen ? 'is-open' : ''}`} id="main-navigation" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isCurrent = pathname === link.href;
              return (
                <Link key={link.href} href={link.href} prefetch={link.href !== '/'} className={isCurrent ? 'is-current' : ''} aria-current={isCurrent ? 'page' : undefined} onClick={() => setIsOpen(false)}>
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <Link className="header-cta" href="/quote">Get a Quote</Link>
          <button
            ref={menuButtonRef}
            className="mobile-toggle"
            type="button"
            aria-label="Toggle menu"
            aria-controls="main-navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            ☰
          </button>
        </div>
      </header>
    </>
  );
}
