# Rana Shazaib Goods

Next.js website for cargo and goods transport enquiries from Karachi to Faisalabad, Lahore and Sialkot.

## Requirements

- Node.js 20.9 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Validate and build

```bash
npm run check
npm audit
npm run build
npm run start
```

The build creates a self-contained Node deployment in `.next/standalone` and copies the public and generated
static assets there. `npm run start` runs that standalone server.

## Website routes

- `/` — home
- `/about` — about the business
- `/services` — cargo services and enquiry options
- `/routes` — listed destinations
- `/how-it-works` — enquiry and booking steps
- `/faqs` — common questions
- `/quote` — shipment enquiry form
- `/contact` — phone, email and WhatsApp details
- `/privacy-policy` — website privacy notice
- `/terms-conditions` — preliminary service information
- `/robots.txt` and `/sitemap.xml` — crawler metadata

Legacy `.html` URLs redirect to the matching Next.js routes.

## Business details

Update and verify the contact details and destinations in `lib/site.ts` before publishing. The quote form creates
a WhatsApp message for the visitor to review and send; it does not store or automatically submit enquiries.

## Before public launch

- Confirm the business name, phone, WhatsApp account, email and listed routes are correct and monitored.
- Confirm final service, payment, cancellation and cargo-handling terms with the business.
- Have the privacy notice and terms checked against actual business/hosting practices and local legal requirements.
- Deploy the standalone build on a supported Node.js host, configure `ranashazaibgoods.com` and HTTPS, then test
  all pages, the WhatsApp draft flow and mobile navigation on the live domain.

The website build does not configure a hosting account or publish the site to the public internet.

The homepage truck photograph is from [Pexels](https://www.pexels.com/search/container%20truck%20road/) and used
under the [Pexels License](https://www.pexels.com/license/).
