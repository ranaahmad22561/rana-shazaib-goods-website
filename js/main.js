window.RSG_CONFIG = {
  businessName: 'Rana Shazaib Goods',
  phone: '03267813992',
  whatsapp: '923267813992',
  email: 'ahmadali22561@gmail.com',
  origin: 'Karachi',
  cities: ['Faisalabad', 'Lahore', 'Sialkot'],
  destinations: ['Faisalabad', 'Lahore', 'Sialkot']
};

const mobileToggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('.nav');

if (mobileToggle && nav) {
  mobileToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    mobileToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      mobileToggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      nav.classList.remove('is-open');
      mobileToggle.setAttribute('aria-expanded', 'false');
      mobileToggle.focus();
    }
  });
}

const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach((item) => {
  const trigger = item.querySelector('.faq-item__question');
  const answer = item.querySelector('.faq-item__answer');

  if (trigger && answer) {
    const isInitiallyOpen = item.classList.contains('is-open');
    trigger.setAttribute('aria-expanded', String(isInitiallyOpen));
    answer.id = answer.id || `faq-answer-${Array.from(faqItems).indexOf(item) + 1}`;
    trigger.setAttribute('aria-controls', answer.id);
    answer.setAttribute('aria-labelledby', trigger.id || (trigger.id = `${answer.id}-trigger`));
    answer.hidden = !isInitiallyOpen;
    answer.style.maxHeight = isInitiallyOpen ? `${answer.scrollHeight}px` : null;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      faqItems.forEach((faqItem) => {
        faqItem.classList.remove('is-open');
        const question = faqItem.querySelector('.faq-item__question');
        if (question) question.setAttribute('aria-expanded', 'false');
        const ans = faqItem.querySelector('.faq-item__answer');
        if (ans) {
          ans.style.maxHeight = null;
          ans.hidden = true;
        }
      });

      if (!isOpen) {
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
        answer.hidden = false;
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  }
});

const yearEl = document.querySelector('[data-current-year]');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const phoneEls = document.querySelectorAll('[data-phone]');
phoneEls.forEach((el) => {
  el.textContent = window.RSG_CONFIG.phone;
});

const localPhone = window.RSG_CONFIG.phone.replace(/[\s()-]/g, '');
const internationalPhone = localPhone.startsWith('0')
  ? `+92${localPhone.slice(1)}`
  : localPhone.startsWith('+') ? localPhone : `+${localPhone}`;
document.querySelectorAll('[data-phone-link]').forEach((link) => {
  link.href = `tel:${internationalPhone}`;
});

const whatsappEls = document.querySelectorAll('[data-whatsapp]');
whatsappEls.forEach((el) => {
  if (el.tagName === 'A') el.href = `https://wa.me/${window.RSG_CONFIG.whatsapp}`;
  el.textContent = window.RSG_CONFIG.phone;
});

document.querySelectorAll('[data-whatsapp-link]').forEach((link) => {
  link.href = `https://wa.me/${window.RSG_CONFIG.whatsapp}`;
});

document.querySelectorAll('[data-email-link]').forEach((link) => {
  link.href = `mailto:${window.RSG_CONFIG.email}`;
  link.textContent = window.RSG_CONFIG.email;
});

const routeList = document.querySelectorAll('[data-route-name]');
routeList.forEach((item, index) => {
  if (window.RSG_CONFIG.cities[index]) {
    item.textContent = `Karachi → ${window.RSG_CONFIG.cities[index]}`;
  }
});
