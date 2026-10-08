'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import { siteConfig } from '@/lib/site';

type QuoteFields = {
  fullName: string;
  mobileNumber: string;
  whatsAppNumber: string;
  companyName: string;
  pickupCity: string;
  destinationCity: string;
  goodsType: string;
  goodsDescription: string;
  weight: string;
  weightUnit: string;
  packages: string;
  packageType: string;
  dimensions: string;
  pickupAddress: string;
  deliveryAddress: string;
  pickupDate: string;
  additionalInformation: string;
};

const initialFields: QuoteFields = {
  fullName: '',
  mobileNumber: '',
  whatsAppNumber: '',
  companyName: '',
  pickupCity: siteConfig.origin,
  destinationCity: '',
  goodsType: '',
  goodsDescription: '',
  weight: '',
  weightUnit: 'KG',
  packages: '',
  packageType: '',
  dimensions: '',
  pickupAddress: '',
  deliveryAddress: '',
  pickupDate: '',
  additionalInformation: '',
};

const requiredFields: Array<keyof QuoteFields> = [
  'fullName',
  'mobileNumber',
  'pickupCity',
  'destinationCity',
  'goodsType',
  'weight',
  'packages',
  'pickupAddress',
  'deliveryAddress',
];

const phonePattern = String.raw`[0-9+\(\)\s\-]{7,20}`;

function buildWhatsAppUrl(fields: QuoteFields) {
  const lines = [
    siteConfig.businessName.toUpperCase(),
    'CARGO QUOTE REQUEST',
    '',
    `Customer name: ${fields.fullName}`,
    `Mobile number: ${fields.mobileNumber}`,
    `WhatsApp number: ${fields.whatsAppNumber || fields.mobileNumber}`,
    `Company: ${fields.companyName || 'Not provided'}`,
    `Pickup city: ${fields.pickupCity}`,
    `Destination city: ${fields.destinationCity}`,
    `Goods type: ${fields.goodsType}`,
    `Goods description: ${fields.goodsDescription || 'Not provided'}`,
    `Approximate weight: ${fields.weight} ${fields.weightUnit}`,
    `Number of packages: ${fields.packages}`,
    `Package type: ${fields.packageType || 'Not provided'}`,
    `Approximate dimensions: ${fields.dimensions || 'Not provided'}`,
    `Pickup address: ${fields.pickupAddress}`,
    `Delivery address: ${fields.deliveryAddress}`,
    `Preferred pickup date: ${fields.pickupDate || 'Not specified'}`,
    `Additional information: ${fields.additionalInformation || 'None provided'}`,
  ];

  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`;
}

export function QuoteForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [whatsAppUrl, setWhatsAppUrl] = useState('');
  const [formError, setFormError] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const destination = params.get('destinationCity');
    const weight = params.get('weight');
    const packages = params.get('packages');
    const goodsType = params.get('goodsType');

    const form = formRef.current;
    if (!form) return;

    const safeDestination = siteConfig.destinations.includes(destination ?? '') ? destination ?? '' : '';
    const prefilledValues: Partial<QuoteFields> = {
      destinationCity: safeDestination,
      weight: weight ?? '',
      packages: packages ?? '',
      goodsType: goodsType ?? '',
    };
    Object.entries(prefilledValues).forEach(([name, value]) => {
      const field = form.elements.namedItem(name);
      if ((field instanceof HTMLInputElement || field instanceof HTMLSelectElement) && value !== undefined) {
        field.value = value;
      }
    });
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const submittedFields = { ...initialFields };
    (Object.keys(submittedFields) as Array<keyof QuoteFields>).forEach((key) => {
      const value = formData.get(key);
      if (typeof value === 'string') submittedFields[key] = value.trim();
    });

    const missingField = requiredFields.find((key) => !submittedFields[key]);
    if (missingField) {
      document.getElementById(missingField)?.focus();
      return;
    }

    if (!siteConfig.whatsapp) {
      setFormError('WhatsApp enquiries are temporarily unavailable. Please use the phone or email on the Contact page.');
      setWhatsAppUrl('');
      return;
    }

    setFormError('');
    setWhatsAppUrl(buildWhatsAppUrl(submittedFields));
  }

  return (
    <form
      ref={formRef}
      className="quote-panel quote-request-form"
      onSubmit={handleSubmit}
      onChange={() => {
        setWhatsAppUrl('');
        setFormError('');
      }}
    >
      <div className="section-header quote-request-form__header">
        <p className="eyebrow">Shipment enquiry</p>
        <h2>Tell us about your shipment.</h2>
        <p>Fields marked required must be completed. Your enquiry is prepared in WhatsApp for you to review and send.</p>
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="fullName">Full name <span aria-hidden="true">*</span></label>
          <input id="fullName" name="fullName" type="text" autoComplete="name" maxLength={100} required />
        </div>
        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile number <span aria-hidden="true">*</span></label>
          <input id="mobileNumber" name="mobileNumber" type="tel" autoComplete="tel" inputMode="tel" pattern={phonePattern} title="Enter a valid phone number using 7 to 20 digits or phone characters." required />
        </div>
        <div className="form-group">
          <label htmlFor="whatsAppNumber">WhatsApp number</label>
          <input id="whatsAppNumber" name="whatsAppNumber" type="tel" autoComplete="tel" inputMode="tel" pattern={phonePattern} title="Enter a valid phone number using 7 to 20 digits or phone characters." />
        </div>
        <div className="form-group">
          <label htmlFor="companyName">Company / business name</label>
          <input id="companyName" name="companyName" type="text" autoComplete="organization" maxLength={120} />
        </div>
        <div className="form-group">
          <label htmlFor="pickupCity">Pickup city <span aria-hidden="true">*</span></label>
          <input id="pickupCity" name="pickupCity" type="text" autoComplete="address-level2" defaultValue={siteConfig.origin} maxLength={100} required />
        </div>
        <div className="form-group">
          <label htmlFor="destinationCity">Destination city <span aria-hidden="true">*</span></label>
          <select id="destinationCity" name="destinationCity" required>
            <option value="">Select city</option>
            {siteConfig.destinations.map((city) => <option key={city} value={city}>{city}</option>)}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="goodsType">Goods type <span aria-hidden="true">*</span></label>
          <input id="goodsType" name="goodsType" type="text" maxLength={120} required />
        </div>
        <div className="form-group">
          <label htmlFor="goodsDescription">Goods description</label>
          <input id="goodsDescription" name="goodsDescription" type="text" maxLength={300} />
        </div>
        <div className="form-group">
          <label htmlFor="weight">Approximate weight <span aria-hidden="true">*</span></label>
          <input id="weight" name="weight" type="number" min="0.1" step="any" inputMode="decimal" required />
        </div>
        <div className="form-group">
          <label htmlFor="weightUnit">Weight unit</label>
          <select id="weightUnit" name="weightUnit" defaultValue="KG">
            <option value="KG">KG</option>
            <option value="TON">TON</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="packages">Number of packages <span aria-hidden="true">*</span></label>
          <input id="packages" name="packages" type="number" min="1" step="1" inputMode="numeric" required />
        </div>
        <div className="form-group">
          <label htmlFor="packageType">Package type</label>
          <input id="packageType" name="packageType" type="text" maxLength={100} placeholder="Carton / crate / pallet" />
        </div>
        <div className="form-group">
          <label htmlFor="dimensions">Approximate dimensions</label>
          <input id="dimensions" name="dimensions" type="text" maxLength={120} />
        </div>
        <div className="form-group">
          <label htmlFor="pickupDate">Preferred pickup date</label>
          <input id="pickupDate" name="pickupDate" type="date" />
        </div>
        <div className="form-group form-group--full">
          <label htmlFor="pickupAddress">Pickup address <span aria-hidden="true">*</span></label>
          <textarea id="pickupAddress" name="pickupAddress" autoComplete="street-address" maxLength={500} required />
        </div>
        <div className="form-group form-group--full">
          <label htmlFor="deliveryAddress">Delivery address <span aria-hidden="true">*</span></label>
          <textarea id="deliveryAddress" name="deliveryAddress" maxLength={500} required />
        </div>
        <div className="form-group form-group--full">
          <label htmlFor="additionalInformation">Additional information</label>
          <textarea id="additionalInformation" name="additionalInformation" maxLength={1000} />
        </div>
      </div>

      <label className="inline-checkbox" htmlFor="confirmDetails">
        <input id="confirmDetails" name="confirmDetails" type="checkbox" required />
        <span>I confirm that the shipment information provided is accurate to the best of my knowledge.</span>
      </label>
      <p className="form-privacy-note">
        Your details are not submitted to this website. They are placed in a WhatsApp message that you can review before choosing to send.
        Read the <a href="/privacy-policy">Privacy Notice</a>.
      </p>
      <button className="btn btn--primary" type="submit">Prepare WhatsApp enquiry</button>
      {formError && <p className="form-message is-error" role="alert">{formError}</p>}
      {whatsAppUrl && (
        <p className="form-message is-success" role="status" aria-live="polite">
          Your message is ready. Review it in WhatsApp, then press Send to submit your enquiry.{' '}
          <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer">Open WhatsApp</a>
        </p>
      )}
    </form>
  );
}
