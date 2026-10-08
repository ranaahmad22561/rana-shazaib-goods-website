import type { MetadataRoute } from 'next';

const publicRoutes = [
  '/',
  '/about',
  '/services',
  '/routes',
  '/how-it-works',
  '/faqs',
  '/quote',
  '/contact',
  '/privacy-policy',
  '/terms-conditions',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({
    url: `https://ranashazaibgoods.com${route}`,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.7,
  }));
}
