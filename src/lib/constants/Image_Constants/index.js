/**
 * importing VITE_IMAGE_BASE_URL from .env
 */

// import Logo from "/assets/Images/Logo.svg";
// import Italian from "/assets/Images/italian.svg";
// import French from "/assets/Images/French.svg";
// import Spanish from "/assets/Images/Spanish.svg";
// import Greece from "/assets/Images/Greece.svg";
// import kiwi from "/assets/Images/kiwi.svg";
// import tomato from "/assets/Images/tomato.svg";
// import banana from "/assets/Images/banana.svg";
// import beans from "/assets/Images/beans.svg";
// import amla from "/assets/Images/amla.svg";
// import apple from "/assets/Images/apple.svg";
// import artichoke from "/assets/Images/Artichoke.svg";
// import asparagus from "/assets/Images/asparagus.svg";
// import cauliflower from "/assets/Images/cauliflower.svg";
// import capsicum from "/assets/Images/capsicum.svg";
// import cheese from "/assets/Images/cheese.svg";
// import cucumber from "/assets/Images/cucumber.svg";
// import garlic from "/assets/Images/garlic.svg";
// import watermelon from "/assets/Images/watermelon.svg";
// import arugula from "/assets/Images/Arugula.svg";
// import onion from "/assets/Images/onion.svg";
// import frenchBeans from "/assets/Images/french-beans.svg";
// import strawberry from "/assets/Images/strawberry.svg";
// import chives from "/assets/Images/chives.svg";
// import milk from "/assets/Images/milk.svg";
// import eggplant from "/assets/Images/eggplant.svg";
// import TimeSaving from "/assets/Images/time-saving.svg";
// import Promotions from "/assets/Images/promotions.svg";
// import PriceAlerts from "/assets/Images/price-alerts.svg";
// import Footer_Img from "/assets/Images/footerimg.jpg";
// import Dashboard_carousel1 from "/assets/Images/dashboard_corosel.svg";

// import Visa from "/assets/Images/Visa.svg";
// import Amex from "/assets/Images/Amex.svg";
// import ApplePay from "/assets/Images/Applepay.svg";
// import Paypal from "/assets/Images/Paypal.svg";
// import SecuredPayment from "/assets/Images/Secured.svg";
// import MasterCard from "/assets/Images/MasterCard.svg";
// import OrderSuccessModal from "/assets/Images/OrderSuccess.svg";

// export const imageMap = {
//   tomato,
//   banana,
//   kiwi,
//   amla,
//   artichoke,
//   arugula,
//   cauliflower,
//   beans,
//   apple,
//   garlic,
//   watermelon,
//   capsicum,
//   onion,
//   strawberry,
//   milk,
//   cheese,
//   asparagus,
//   frenchBeans,
//   cucumber,
//   chives,
//   eggplant,
// };

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
  orderPlaced: `${BASE}/Images/OrderPlaced.svg`,
  bike: `${BASE}/Images/bike.svg`,
  worldMap: `${BASE}/Images/worldIcon.svg`,

  orderPlaced: `${BASE}/Images/OrderPlaced.svg`

};

// export const VISA = Visa;
// export const AMEX = Amex;
// export const APPLE_PAY = ApplePay;
// export const PAYPAL = Paypal;
// export const MASTER_CARD = MasterCard;
// export const SECURED_PAYMENT = SecuredPayment;

// export const ORDER_PLACED = OrderSuccessModal;
export const imageMap = {
  tomato: IMAGES.tomato,
  banana: IMAGES.banana,
  kiwi: IMAGES.kiwi,
};
