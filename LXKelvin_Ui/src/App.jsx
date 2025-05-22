import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from './features/customer-portal/components/registration/Navbar';
import SignInModel from './features/customer-portal/components/registration/SignInModel';
import OtpModel from './features/customer-portal/components/registration/OtpModel';
import Register from './features/customer-portal/components/registration/Register';
import Success from './features/customer-portal/components/registration/Success';
import HomePage from './features/customer-portal/components/registration/Dashboard';
import ListingLayout from './features/customer-portal/components/products/ListingLayout';
import Listing from './features/customer-portal/components/products/Listing';
import ProductList from './features/customer-portal/components/products/ProductList';
import Hero from './features/customer-portal/components/registration/OpeningScreen';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path='/' element={<NavbarComponent isLoggedIn={isLoggedIn}/>}>
           {/* <Route index element={<Hero />}/> */}
           <Route index element={<HomePage />} />
           <Route path="signin" element={<SignInModel />} />
           <Route path="enterotp" element={<OtpModel setIsLoggedIn={setIsLoggedIn}/>} />
           <Route path="registeruser" element={<Register />} />
           <Route path="success" element={<Success />} />
           
           <Route path="products" element={<ListingLayout />}>
              <Route index element={<Listing />} />
              <Route path="all-categories" element={<Listing />} />
              <Route path="vegetables" element={<ProductList />} />
              <Route path="fruits" element={<ProductList />} />
              <Route path="seasonalvegetables" element={<ProductList />} />
              <Route path="seasonalfruits" element={<ProductList />} />
              <Route path="milk-products" element={<ProductList />} />
            </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;



