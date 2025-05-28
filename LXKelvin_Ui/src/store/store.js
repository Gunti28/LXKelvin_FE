import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slice/productSlice";
import categoriesReducer from "./slice/categoriesSlice";
import signInReducer from "./slice/sigInSlice";
import otpAuthReducer from "./slice/otpAuthSlice";
import languageReducer from "./slice/languageSlice";
export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    signIn: signInReducer,
    userAuth: otpAuthReducer,
    language: languageReducer,
  },
});
export default store;
