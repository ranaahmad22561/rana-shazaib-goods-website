const quoteForm = document.getElementById('quote-form');
const formMessage = document.getElementById('form-message');

if (quoteForm) {
  const quoteParams = new URLSearchParams(window.location.search);
  ['destinationCity', 'weight', 'goodsType', 'packages'].forEach((fieldName) => {
    const value = quoteParams.get(fieldName);
    const field = document.getElementById(fieldName);
    if (value && field) field.value = value;
  });
}

const requiredFields = [
  'fullName',
  'mobileNumber',
  'pickupCity',
  'destinationCity',
  'goodsType',
  'weight',
  'packages',
  'pickupAddress',
  'deliveryAddress'
];

function setFormMessage(message, type = 'info') {
  if (!formMessage) return;
  formMessage.textContent = message;
  formMessage.className = 'form-message';
  if (type === 'error') formMessage.classList.add('is-error');
  if (type === 'success') formMessage.classList.add('is-success');
}

function validateForm() {
  for (const fieldName of requiredFields) {
    const field = document.getElementById(fieldName);
    if (!field || !field.value || !field.value.trim()) {
      setFormMessage(`Please complete the ${fieldName.replace(/([A-Z])/g, ' $1').toLowerCase()} field.`, 'error');
      field && field.focus();
      return false;
    }
  }

  const checkbox = document.getElementById('confirmDetails');
  if (checkbox && !checkbox.checked) {
    setFormMessage('Please confirm that the shipment details are accurate to the best of your knowledge.', 'error');
    checkbox.focus();
    return false;
  }

  return true;
}

function buildWhatsAppMessage(formData, businessName) {
  const lines = [
    businessName.toUpperCase(),
    'CARGO QUOTE REQUEST',
    '',
    `Customer Name: ${formData.fullName}`,
    `Mobile Number: ${formData.mobileNumber}`,
    `WhatsApp Number: ${formData.whatsAppNumber || formData.mobileNumber}`,
    `Company: ${formData.companyName || 'Not provided'}`,
    `Pickup City: ${formData.pickupCity}`,
    `Destination City: ${formData.destinationCity}`,
    `Goods Type: ${formData.goodsType}`,
    `Goods Description: ${formData.goodsDescription || 'Not provided'}`,
    `Approx. Weight: ${formData.weight} ${formData.weightUnit || 'KG'}`,
    `Packages: ${formData.packages}`,
    `Package Type: ${formData.packageType || 'Not provided'}`,
    `Approx. Dimensions: ${formData.dimensions || 'Not provided'}`,
    `Pickup Address: ${formData.pickupAddress}`,
    `Delivery Address: ${formData.deliveryAddress}`,
    `Preferred Pickup Date: ${formData.pickupDate || 'Not specified'}`,
    `Additional Details: ${formData.additionalInformation || 'None provided'}`
  ];

  return encodeURIComponent(lines.join('\n'));
}

if (quoteForm) {
  quoteForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    const formData = {
      fullName: document.getElementById('fullName').value.trim(),
      mobileNumber: document.getElementById('mobileNumber').value.trim(),
      whatsAppNumber: document.getElementById('whatsAppNumber').value.trim(),
      companyName: document.getElementById('companyName').value.trim(),
      pickupCity: document.getElementById('pickupCity').value.trim(),
      destinationCity: document.getElementById('destinationCity').value.trim(),
      goodsType: document.getElementById('goodsType').value.trim(),
      goodsDescription: document.getElementById('goodsDescription').value.trim(),
      weight: document.getElementById('weight').value.trim(),
      weightUnit: document.getElementById('weightUnit').value.trim(),
      packages: document.getElementById('packages').value.trim(),
      packageType: document.getElementById('packageType').value.trim(),
      dimensions: document.getElementById('dimensions').value.trim(),
      pickupAddress: document.getElementById('pickupAddress').value.trim(),
      deliveryAddress: document.getElementById('deliveryAddress').value.trim(),
      pickupDate: document.getElementById('pickupDate').value,
      additionalInformation: document.getElementById('additionalInformation').value.trim()
    };

    const whatsappNumber = window.RSG_CONFIG && window.RSG_CONFIG.whatsapp;
    const businessName = window.RSG_CONFIG && window.RSG_CONFIG.businessName;
    if (!whatsappNumber || !businessName) {
      setFormMessage('WhatsApp enquiries are temporarily unavailable. Please use the phone or email details on the Contact page.', 'error');
      return;
    }

    const message = buildWhatsAppMessage(formData, businessName);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    setFormMessage('WhatsApp will open with your enquiry as a draft. Review it and press Send to submit.', 'info');
    const whatsappWindow = window.open(whatsappUrl, '_blank');
    if (whatsappWindow) {
      whatsappWindow.opener = null;
    } else {
      window.location.assign(whatsappUrl);
    }
  });
}
