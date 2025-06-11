import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Register from "./features/customer-portal/components/signUp/Register";
import Success from "./features/customer-portal/components/signIn/Success";
import ListingComponent from "./features/customer-portal/components/products/ListingComponent";
import ProductList from "./features/customer-portal/components/products/ProductList";
import LayoutContainerPage from "./features/customer-portal/pages/LayoutContainerPage";
import ListingLayoutContainer from "./features/customer-portal/components/products/ListingLayoutContainer";
import SignInPage from "./features/customer-portal/pages/SignInPage";
import DashBoard from "./features/customer-portal/components/layOut/Dashboard";
import MyAddress from "./features/customer-portal/components/Profile/MyAddress";
import MyProfile from "./features/customer-portal/components/Profile/MyProfile";
import MyOrders from "./features/customer-portal/components/Profile/MyOrders";
import SaveForLater from "./features/customer-portal/components/Profile/SaveForLater";
import CustomerSupport from "./features/customer-portal/components/Profile/CustomerSupport";
import ProfileLayout from "./features/customer-portal/components/Profile/ProfileLayout";
import AuthGuard from "./lib/common/components/AuthGuard";
import ProductDetailsPage from "./features/customer-portal/components/products/ProductDetails";
import SubscriptionCards from "./features/customer-portal/components/subscriptions/SubscriptionCard";
import ChoosePayment from "./features/customer-portal/components/subscriptions/ChoosePayment";
import SelectUpi from "./features/customer-portal/components/subscriptions/SelectUpi";
import CartPage from "./features/customer-portal/components/cart/cartPage";
import DeliveryAddress from "./features/customer-portal/components/deliveryaddress/DeliveryAddress";
import OrderSummery from "./features/customer-portal/components/cart/orderSummary";
import OrderPlacedModal from "./features/customer-portal/components/products/OrderPlacedModal";
import ConfirmUpi from "./features/customer-portal/components/subscriptions/ConfirmUpi";
import CardPayment from "./features/customer-portal/components/subscriptions/CardPayment";
import OrderConfirmUpi from "./features/customer-portal/components/subscriptions/OrderConfirmUpi";
import OrderCardPayment from "./features/customer-portal/components/subscriptions/OrderCardPayment";
import OrderSelectUpi from "./features/customer-portal/components/subscriptions/OrderSelectUpi";

import PaymentFailed from "./features/customer-portal/components/MessageModals/PaymentFailed";
import Pay1 from "./features/customer-portal/components/MessageModals/PaymentSuccess";
import Thankyou from "./features/customer-portal/components/MessageModals/ThankYou";
import VipSuccess from "./features/customer-portal/components/MessageModals/VipSuccess";


// Admin-portal Navigation

import CompanyLayout from "./features/company-portal/pages/CompanyLayOut";
import MainDashboard from "./features/company-portal/components/Dashboard/Dashboard";
import OrderPage from "./features/company-portal/components/Orders/Orders";
import ProductPage from "./features/company-portal/components/Products/Products";
import InventoryPage from "./features/company-portal/components/Inventory/Inventory";
import CustomerPage from "./features/company-portal/components/Customers/Customer";
import PromotionPage from "./features/company-portal/components/Promotions/Promotions";
import ReportPage from "./features/company-portal/components/Reports/Reports";
import ContentPage from "./features/company-portal/components/Content/Content";
import SettingPage from "./features/company-portal/components/Settings/Settings";
import NotificationPage from "./features/company-portal/components/Notifications/Notification";
import AdminRegister from "./features/company-portal/components/Registration/Registration";
import AdminSignIn from "./features/company-portal/components/Registration/SignIn";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutContainerPage />}>
          <Route path="dashBoard" element={<DashBoard />} />
          <Route path="signIn" element={<SignInPage />} />
          <Route path="signUp" element={<Register />} />
          <Route path="success" element={<Success />} />
          <Route path="products" element={<ListingLayoutContainer />}>
            <Route index element={<ListingComponent />} />
            <Route path="all-categories" element={<ProductList />} />
            <Route path="vegetables" element={<ProductList />} />
            <Route path="fruits" element={<ProductList />} />
            <Route path="seasonalVegetables" element={<ProductList />} />
            <Route path="seasonalFruits" element={<ProductList />} />
            <Route path="milkProducts" element={<ProductList />} />
          </Route>
          <Route path="productDetails/:id" element={<ProductDetailsPage />} />
          <Route path="subscriptions" element={<SubscriptionCards />} />
          <Route path="choosePayment" element={<ChoosePayment />} />
          <Route path="upiPayment" element={<SelectUpi />} />
          <Route path="orderConfirmUpi" element={<OrderConfirmUpi />} />
          <Route path="orderCardPayment" element={<OrderCardPayment />} />
          <Route path="confirmUpi" element={<ConfirmUpi />} />
          <Route path="cardPayment" element={<CardPayment />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="deliveryAddress" element={<DeliveryAddress />} />
          <Route path="orderSummary" element={<OrderSummery />} />
          <Route path="orderPlaced" element={<OrderPlacedModal />} />
          <Route path="orderUpiPayment" element={<OrderSelectUpi />} />

          <Route path="vipSuccess" element={<VipSuccess />} />
          <Route path="paymentFailed" element={<PaymentFailed />} />
          <Route path="paymentSuccess" element={<Pay1 />} />
          <Route path="thankYou" element={<Thankyou />} />

          <Route path="my_account" element={<ProfileLayout />}>
            <Route
              index
              element={
                <AuthGuard>
                  <MyProfile />
                </AuthGuard>
              }
            />
            <Route
              path="my_address"
              element={
                <AuthGuard>
                  <MyAddress />
                </AuthGuard>
              }
            />
            <Route
              path="my_orders"
              element={
                <AuthGuard>
                  <MyOrders />
                </AuthGuard>
              }
            />
            <Route
              path="save_for_later"
              element={
                <AuthGuard>
                  <SaveForLater />
                </AuthGuard>
              }
            />
            <Route
              path="customer_support"
              element={
                <AuthGuard>
                  <CustomerSupport />
                </AuthGuard>
              }
            />
          </Route>
        </Route>

        <Route path="/company_signin" element={<AdminSignIn />} />
        <Route path="/company_register" element={<AdminRegister />} />

        <Route
          path="company_admin"
          element={
            <AuthGuard>
              <CompanyLayout />
            </AuthGuard>
          }
        >
          <Route index element={<Navigate to="company_dashboard" />} />
          <Route path="company_dashboard" element={<MainDashboard />} />
          <Route path="company_orders" element={<OrderPage />} />
          <Route path="company_products" element={<ProductPage />} />
          <Route path="company_inventory" element={<InventoryPage />} />
          <Route path="company_customers" element={<CustomerPage />} />
          <Route path="company_promotions" element={<PromotionPage />} />
          <Route path="company_reports" element={<ReportPage />} />
          <Route path="company_content" element={<ContentPage />} />
          <Route path="company_settings" element={<SettingPage />} />
          <Route path="company_notifications" element={<NotificationPage />} />
        </Route>
        
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>

  );
}

export default App;
