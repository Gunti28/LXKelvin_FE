
import {
  GREECE,
  SPANISH,
  FRENCH,
  ITALIAN,
  AMEX,
  APPLE_PAY,
  MASTER_CARD,
  PAYPAL,
  VISA,
} from "./Image_Constants";
import { IMAGES } from "./Image_Constants/index.js";

/**
 * Language dropdown options
 */
const LANGUAGES = [
  { name: "Italian", icon: IMAGES.italian },
  { name: "Greece", icon: IMAGES.greece },
  { name: "Spanish", icon: IMAGES.Spanish },
  { name: "French", icon: IMAGES.french },
];

/**
 * Quantity options
 */
const QTY_OPTIONS = ["500g", "1kg", "2kg"];

/**
 * Payment method options
 */
const PAYMENT_OPTIONS = [
  {
    label: "Credit or debit card",
    value: "card",
    icons: [VISA, AMEX, MASTER_CARD],
  },
  {
    label: "Net Banking",
    value: "net",
    icons: [PAYPAL, APPLE_PAY],
  },
  {
    label: "Cash on delivery",
    value: "cash",
    icons: [],
  },
];

export const Const = {
  QTY_OPTIONS,
  LANGUAGES,
  PAYMENT_OPTIONS,
};

export const ORDER_STATUS_COLORS = {
  Cancelled: "#ff0000",
  Delivered: "darkgreen",
  Default: "#5B5F62",
};

export const planNames = {
  1: "Basic",
  2: "Standard",
  3: "Premium",
  4: "Gold",
};

export const ORDER_CONSTANTS = {
  VAT_RATE: 18,
  DELIVERY_CHARGES: 2.5,
  getPromotionDiscount: (itemsPrice) => (itemsPrice > 0 ? 5.0 : 0.0),
};
