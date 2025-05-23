import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slice/productSlice";
import categoriesReducer from "./slice/categoriesSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
  },
});
export default store;
