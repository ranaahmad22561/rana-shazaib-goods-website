/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/about.html', destination: '/about', permanent: true },
      { source: '/services.html', destination: '/services', permanent: true },
      { source: '/routes.html', destination: '/routes', permanent: true },
      { source: '/how-it-works.html', destination: '/how-it-works', permanent: true },
      { source: '/faqs.html', destination: '/faqs', permanent: true },
      { source: '/quote.html', destination: '/quote', permanent: true },
      { source: '/contact.html', destination: '/contact', permanent: true },
      { source: '/privacy-policy.html', destination: '/privacy-policy', permanent: true },
      { source: '/terms-conditions.html', destination: '/terms-conditions', permanent: true },
    ];
  },
};

export default nextConfig;
