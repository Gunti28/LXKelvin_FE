import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignInModel from "./features/customer-portal/components/signIn/SignInModel";
import OtpModel from "./features/customer-portal/components/signIn/OtpModel";
import Register from "./features/customer-portal/components/signUp/Register";
import Success from "./features/customer-portal/components/signIn/Success";

import ListingComponent from "./features/customer-portal/components/products/ListingComponent";
import ProductList from "./features/customer-portal/components/products/ProductList";
import LayoutContainerPage from "./features/customer-portal/pages/LayoutContainerPage";
import ListingLayoutContainer from "./features/customer-portal/components/products/ListingLayoutContainer";

import SignInPage from "./features/customer-portal/pages/SignInPage";

import DashBoard from "./features/customer-portal/components/layOut/Dashboard";
import OpeningLayOut from "./features/customer-portal/components/openingLayOut/OpeningScreen";

import MyAddress from "./features/customer-portal/components/Profile/MyAddress";
import MyProfile from "./features/customer-portal/components/Profile/MyProfile";
import MyOrders from "./features/customer-portal/components/Profile/MyOrders";
import SaveForLater from "./features/customer-portal/components/Profile/SaveForLater";
import CustomerSupport from "./features/customer-portal/components/Profile/CustomerSupport";
import ProfileLayout from "./features/customer-portal/components/Profile/ProfileLayout";
import CompanyLayOut from "./features/company-portal/pages/companyLayOut";
import CompanyDashBoard from "./features/company-portal/components/layOut/CompanyDashBoard";
import AuthGuard from "./lib/common/components/AuthGuard";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutContainerPage />}>
          <Route path="dashBoard" element={<DashBoard />} />
          {/* <Route index element={<OpeningLayOut />} /> */}
          <Route path="signIn" element={<SignInPage />} />
          <Route path="signUp" element={<Register />} />
          <Route path="success" element={<Success />} />

          <Route path="products" element={<ListingLayoutContainer />}>
            <Route index element={<ListingComponent />} />
            <Route path="all-categories" element={<ListingComponent />} />
            <Route path="vegetables" element={<ProductList />} />
            <Route path="fruits" element={<ProductList />} />
            <Route path="seasonalVegetables" element={<ProductList />} />
            <Route path="seasonalFruits" element={<ProductList />} />
            <Route path="milkProducts" element={<ProductList />} />
          </Route>

          <Route path="myaccount" element={<ProfileLayout />}>
            <Route
              index
              element={
                <AuthGuard>
                  <MyProfile />
                </AuthGuard>
              }
            />
            <Route
              path="myaddress"
              element={
                <AuthGuard>
                  <MyAddress />
                </AuthGuard>
              }
            />
            <Route
              path="myorders"
              element={
                <AuthGuard>
                  <MyOrders />
                </AuthGuard>
              }
            />
            <Route
              path="saveforlater"
              element={
                <AuthGuard>
                  <SaveForLater />
                </AuthGuard>
              }
            />
            <Route
              path="customersupport"
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
      </Routes>
    </Router>
  );
}

export default App;
