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
import CompanyLayOut from "./features/company-portal/pages/CompanyLayOut";
import CompanyDashBoard from "./features/company-portal/components/layOut/CompanyDashBoard";
import AuthGuard from "./lib/common/components/AuthGuard";
import ProductDetailsPage from "./features/customer-portal/components/products/ProductDetails";
import SubscriptionCards from "./features/customer-portal/components/subscriptions/SubscriptionCard";
import ChoosePayment from "./features/customer-portal/components/subscriptions/ChoosePayment";
import SelectUpi from "./features/customer-portal/components/subscriptions/SelectUpi";
import ConfirmUpi from "./features/customer-portal/components/subscriptions/ConfirmUpi";
import CardPayment from "./features/customer-portal/components/subscriptions/CardPayment";
import PaymentFailed from "./features/customer-portal/components/MessageModals/PaymentFailed";
import Pay1 from "./features/customer-portal/components/MessageModals/PaymentSuccess";
import Thankyou from "./features/customer-portal/components/MessageModals/ThankYou";
import VipSuccess from "./features/customer-portal/components/MessageModals/VipSuccess";
import LocationTracker from "./features/customer-portal/components/layOut/Location";

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
          <Route path="confirmUpi" element={<ConfirmUpi />} />
          <Route path="cardPayment" element={<CardPayment />} />
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
        <Route path="company_admin">
          <Route index element={<CompanyLayOut />} />
          <Route
            path="dash_board"
            element={
              <AuthGuard>
                <CompanyDashBoard />
              </AuthGuard>
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
