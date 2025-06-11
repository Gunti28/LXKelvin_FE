import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slice/productSlice";
import categoriesReducer from "./slice/categoriesSlice";
import signInReducer from "./slice/sigInSlice";
import otpAuthReducer from "./slice/otpAuthSlice";

import addressReducer from "./slice/addressSlice";

import orderReducer from "./slice/orderSlice";
import saveForLaterReducer from "./slice/saveForLaterSlice";

import languageReducer from "./slice/languageSlice";
import productDetailsReducer from "./slice/productDetailsSlice";

import plansReducer from "./slice/SubscriptionCardSlice";
import subscriptionReducer from "./slice/subscriptionPaySlice";

<<<<<<< HEAD
import authReducer from "./slice/admin-signinSlice";
=======
import cartReducer from "./slice/cartSlice";
import deliveryAddressReducer from "./slice/deliveryAddressSlice";
import orderSummaryReducer from "./slice/orderSummarySlice";
>>>>>>> 73649b1749dfbbc742c38acc4241cc0c4e3e5705

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
    plans: plansReducer,
    subscription: subscriptionReducer,
<<<<<<< HEAD
    auth: authReducer
=======
    cart: cartReducer,
    deliveryAddress: deliveryAddressReducer,
    orderSummary: orderSummaryReducer,
>>>>>>> 73649b1749dfbbc742c38acc4241cc0c4e3e5705
  },
});
export default store;
