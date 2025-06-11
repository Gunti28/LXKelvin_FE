/**
 * importing VITE_IMAGE_BASE_URL from .env
 */

const BASE = import.meta.env.VITE_IMAGE_BASE_URL;

export const imageBgColors = {
  tomato: "#F7B18C",
  banana: "#EDD251",
  kiwi: "#929C69",
};

export const IMAGES = {
  allProduct: `${BASE}/Images/all-categories-sidebar.svg`,
  vegetables: `${BASE}/Images/vegetables-sidebar.svg`,
  fruits: `${BASE}/Images/fruits-sidebar.svg`,
  seasonalVegetables: `${BASE}/Images/seasonal-vegetables-sidebar.svg`,
  seasonalFruits: `${BASE}/Images/seasonal-fruits-sidebar.svg`,
  milkProducts: `${BASE}/Images/milk-products-sidebar.svg`,
  logo: `${BASE}/Images/Logo.svg`,
  italian: `${BASE}/Images/italian.svg`,
  french: `${BASE}/Images/French.svg`,
  Spanish: `${BASE}/Images/Spanish.svg`,
  greece: `${BASE}/Images/Greece.svg`,
  kiwi: `${BASE}/Images/kiwi.svg`,
  tomato: `${BASE}/Images/tomato.svg`,
  banana: `${BASE}/Images/banana.svg`,
  timeSaving: `${BASE}/Images/time-saving.svg`,
  promotions: `${BASE}/Images/promotions.svg`,
  priceAlerts: `${BASE}/Images/price-alerts.svg`,
  footer_Img: `${BASE}/Images/footerimg.jpg`,
  visa: `${BASE}/Images/Visa.svg`,
  amex: `${BASE}/Images/Amex.svg`,
  applePay: `${BASE}/Images/Applepay.svg`,
  paypal: `${BASE}/Images/Paypal.svg`,
  securedPayment: `${BASE}/Images/Secured.svg`,
  masterCard: `${BASE}/Images/MasterCard.svg`,
  dashboard_carousel: `${BASE}/Images/dashboard_corosel.svg`,
  thankYou: `${BASE}/Images/ThanksVector.svg`,
  vip_payment: `${BASE}/Images/Vip_Payment.svg`,
  paymentSuccess: `${BASE}/Images/Payment_success_vector.svg`,
  worldMap: `${BASE}/Images/worldIcon.svg`,
};

export const imageMap = {
  tomato: IMAGES.tomato,
  banana: IMAGES.banana,
  kiwi: IMAGES.kiwi,
};
