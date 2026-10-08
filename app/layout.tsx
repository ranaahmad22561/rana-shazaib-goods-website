import './globals.css';
import type { Metadata } from 'next';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export const metadata: Metadata = {
  title: {
    default: 'Rana Shazaib Goods | Cargo Transport from Karachi',
    template: '%s | Rana Shazaib Goods',
  },
  description:
    'Cargo and goods transport from Karachi to Faisalabad, Lahore and Sialkot. Share your shipment details to request a clear quote.',
  metadataBase: new URL('https://ranashazaibgoods.com'),
  applicationName: 'Rana Shazaib Goods',
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    siteName: 'Rana Shazaib Goods',
    title: 'Rana Shazaib Goods | Cargo Transport from Karachi',
    description:
      'Cargo and goods transport from Karachi to Faisalabad, Lahore and Sialkot. Share your shipment details to request a clear quote.',
    url: 'https://ranashazaibgoods.com/',
    images: [
      {
        url: '/images/social-share.jpg',
        width: 1200,
        height: 630,
        alt: 'Rana Shazaib Goods cargo transport from Karachi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rana Shazaib Goods | Cargo Transport from Karachi',
    description:
      'Cargo and goods transport from Karachi to Faisalabad, Lahore and Sialkot. Request a quote for your shipment.',
    images: ['/images/social-share.jpg'],
  },
  icons: {
    icon: '/images/logo.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
