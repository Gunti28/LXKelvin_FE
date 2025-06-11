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
<<<<<<< HEAD
import authReducer from "./slice/admin-signinSlice";
=======
=======
import authReducer from "./slice/admin-signinSlice";
>>>>>>> 1aaa11657b10901bae6f23777070dbe03c84a405
import cartReducer from "./slice/cartSlice";
import deliveryAddressReducer from "./slice/deliveryAddressSlice";
import orderSummaryReducer from "./slice/orderSummarySlice";
>>>>>>> 73649b1749dfbbc742c38acc4241cc0c4e3e5705

//admin-portal 

import adminDashboardOrdersReducer from "./slice/admin-portal/admin-dashboardOrderSlice";
import adminDashboardAlertsReducer from "./slice/admin-portal/admin-alertsSlice";
import adminDashboardActiveUsersReducer from "./slice/admin-portal/admin-activeUsersSlice";
import adminDashboardNewSignupsReducer from "./slice/admin-portal/admin-newSignUpSlice";
import adminRevenueReducer from "./slice/admin-portal/admin-revenueSlice";
import adminOrderReducer from "./slice/admin-portal/admin-ordersSlice";
import adminProductsReducer from "./slice/admin-portal/admin-productSlice";
import adminProductBasicInfoReducer from "./slice/admin-portal/admin-productBasicInfoSlice";
import adminProductPricingReducer from "./slice/admin-portal/admin-productPricingSlice";
import adminProductInventoryReducer from "./slice/admin-portal/admin-productInventorySlice";
import adminProductImagesReducer from "./slice/admin-portal/admin-productImagesSlice";
import adminSalesReportReducer from "./slice/admin-portal/admin-reportsSlice";
import adminInventoryStockReducer from "./slice/admin-portal/admin-inventoryStockSlice";
import adminInventoryAdjustStockReducer from "./slice/admin-portal/admin-inventoryAdjustStockModelSlice";


export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    signIn: signInReducer,
    userAuth: otpAuthReducer,
    addresses: addressReducer,
    orders: orderReducer,
<<<<<<< HEAD
    saveForLater: saveForLaterReducer,
=======
    saveForLater: saveForLaterReducer, 
>>>>>>> 1aaa11657b10901bae6f23777070dbe03c84a405
    language: languageReducer,
    productDetails: productDetailsReducer,
    plans: plansReducer,
    subscription: subscriptionReducer,
<<<<<<< HEAD
<<<<<<< HEAD
    auth: authReducer
=======
    cart: cartReducer,
    deliveryAddress: deliveryAddressReducer,
    orderSummary: orderSummaryReducer,
>>>>>>> 73649b1749dfbbc742c38acc4241cc0c4e3e5705
=======
    auth: authReducer,
        cart: cartReducer,
    deliveryAddress: deliveryAddressReducer,
    orderSummary: orderSummaryReducer,

    //admin-portal
    
    adminDashboardOrders: adminDashboardOrdersReducer,
    adminDashboardAlerts: adminDashboardAlertsReducer,
    adminDashboardActiveUsers: adminDashboardActiveUsersReducer,
    adminDashboardNewSignups: adminDashboardNewSignupsReducer,
    adminDashboardRevenue: adminRevenueReducer,
    adminOrders: adminOrderReducer,
    adminProducts: adminProductsReducer,
    adminProductBasicInfo: adminProductBasicInfoReducer,
    adminProductPricing: adminProductPricingReducer,
    adminProductInventory : adminProductInventoryReducer,
    adminProductImages : adminProductImagesReducer,
    adminSalesReport: adminSalesReportReducer,
    adminInventoryStock: adminInventoryStockReducer,
    adminInventoryAdjustStock: adminInventoryAdjustStockReducer,



>>>>>>> 1aaa11657b10901bae6f23777070dbe03c84a405
  },
});
export default store;
