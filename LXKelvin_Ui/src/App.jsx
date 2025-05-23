import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInModel from "./features/customer-portal/components/registration/SignInModel";
import OtpModel from "./features/customer-portal/components/registration/OtpModel";
import Register from "./features/customer-portal/components/registration/Register";
import Success from "./features/customer-portal/components/registration/Success";
import ListingComponent from "./features/customer-portal/components/products/ListingComponent";
import ProductList from "./features/customer-portal/components/products/ProductList";
import { useState } from "react";
import LayoutContainerPage from "./features/customer-portal/pages/LayoutContainerPage";
import ListingLayoutContainer from "./features/customer-portal/components/products/ListingLayoutContainer";
import DashBoard from "./features/customer-portal/components/layOut/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutContainerPage />}>
          <Route index element={<DashBoard />} />
          <Route path="signin" element={<SignInModel />} />
          <Route
            path="enterotp"
            element={<OtpModel setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="registeruser" element={<Register />} />
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
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
