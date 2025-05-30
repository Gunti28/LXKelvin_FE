import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slice/productSlice";
import categoriesReducer from "./slice/categoriesSlice";
import signInReducer from "./slice/sigInSlice";
import otpAuthReducer from "./slice/otpAuthSlice";

import addressReducer from "./slice/addressSlice";

import orderReducer from "./slice/orderSlice";
import saveForLaterReducer from "./slice/saveForLaterSlice";

import languageReducer from "./slice/languageSlice";
import productDetailsReducer from "./slice/productDetailsSlice"

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    signIn: signInReducer,
    userAuth: otpAuthReducer,
    addresses: addressReducer,
    orders: orderReducer,
    saveForLater: saveForLaterReducer,

    language: languageReducer,
    productDetails: productDetailsReducer,

  },
});
export default store;