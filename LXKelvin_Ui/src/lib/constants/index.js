import { GREECE, SPANISH, FRENCH, ITALIAN } from "./Image_Constants/index.js";

/**
 * declarations
 */
const QTY_OPTIONS = ["500g", "1kg", "2kg"];

const LANGUAGES = [
  { name: "Italian", icon: ITALIAN },
  { name: "Greece", icon: GREECE },
  { name: "Spanish", icon: SPANISH },
  { name: "French", icon: FRENCH },
];
/**
 * exports to get the const value
 */
export const Const = {
  QTY_OPTIONS: QTY_OPTIONS,
  LANGUAGES: LANGUAGES,
};

export const ORDER_STATUS_COLORS = {
  Cancelled: "#ff0000",
  Delivered: "darkgreen",
  Default: "#5B5F62",
};