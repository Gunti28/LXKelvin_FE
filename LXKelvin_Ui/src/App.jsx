import './App.css'
// import Products from './features/customer-portal/components/products';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from './features/customer-portal/components/registration/Navbar';
import SignInModel from './features/customer-portal/components/registration/SignInModel';
import OtpModel from './features/customer-portal/components/registration/OtpModel';
import Register from './features/customer-portal/components/registration/Register';
import Success from './features/customer-portal/components/registration/Success';
import HomePage from './features/customer-portal/components/registration/Dashboard';
import ProductDetailsPage from './features/customer-portal/components/products/ProductDetails';
import ListingLayout from './features/customer-portal/components/products/ListingLayout';
import Listing from './features/customer-portal/components/products/Listing';
import ProductList from './features/customer-portal/components/products/ProductList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/*' element={<NavbarComponent />} />
        <Route path='/productpage' element={<ProductDetailsPage />}/>

        <Route path='/products/' element={<ListingLayout />}>
              <Route path='all-categories' index element={<Listing />}/>
              <Route path="vegetables" element={<ProductList />} />
              <Route path="fruits" element={<ProductList />} />
              <Route path="seasonalvegetables" element={<ProductList />} />
              <Route path="seasonalfruits" element={<ProductList />} />
              <Route path="milk-products" element={<ProductList />} />
        </Route>

      </Routes>
    </Router>
    // <>
    // <Products></Products>
    // </>
  )
}

export default App


