
<<<<<<< HEAD
import './App.css';
import Hero from './components/Hero';
import NavbarComponent from './components/Navbar';
import OtpModel from './components/OtpModel';
import Register from './components/Register';
import SignInModel from './components/SignInModel';
import Success from './components/Success';
import Cart from './pages/Cart';
import DeliveryAddress from './pages/DeliveryAddress';
import Sign from './pages/Demo';
import Navbarpage from './pages/Demo';

function App() {
  return (
    <div className="App">
      {/* <NavbarComponent/> */}
      {/* <Hero/> */}
      {/* <Navbarpage/> */}
{/* <DeliveryAddress/> */}
      {/* <Cart/> */}
      {/* <SignInModel/> */}
      {/* <Sign/> */}
      {/* <Success/> */}
      {/* <SignInModel/> */}
    {/* <Register/> */}
    {/* <OtpModel/> */}
    </div>
=======
import HomePage from "./pages/Categories";
import ListingLayout from "./pages/ListingLayout";
import Hero from "./components/Hero";
import NavbarComponent from "./components/Navbar";
import OrderSummery from "./pages/OrderSummery";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductDetailsPage from "./pages/ProductDetailsPage";
import PricingCards from "./pages/Card";
import DeliveryAddress from "./pages/DeliveryAddress";
import Cart from "./pages/Cart";
import Paymentpage from "./pages/Paymentpage";
import Setupcard from "./pages/Setupcard";
import SignupUpi from "./pages/SignupUpi";
import OrderTracking from "./pages/OrderTracking";
import TrackingDetails from "./pages/TrackingDetails";
import ChatBotContainer from "./pages/ChatBotContainer";
import Vippaymentsucess from "./pages/Vippaymentsucess";
import Paymentfaild from "./pages/PaymentFailed";
import Thankyou from "./pages/Thankyou";
import Pay1 from "./pages/payment";

function App() {
  return (
    //     <Router>
    //   <Routes>
    //     <Route path='/dashboard' element={<HomePage />}/>
    //     <Route path='/products' element={<ListingLayout />}/>
    //     <Route path='/productpage' element={<ProductDetailsPage />}/>
    //     <Route path='/cart' element={<Cart />}/>
    //     <Route path='/subscriptionplans' element={<PricingCards />}/>
    //     <Route path='/deliverydetails' element={<DeliveryAddress />}/>
    //     <Route path='/ordersummary' element={<OrderSummery />}/>
    //     <Route path='/products' element={<ListingLayout />}/>
    //     <Route path='/choosepayment' element={<Paymentpage />}/>
    //     <Route path='/cardpayment' element={<Setupcard />}/>
    //     <Route path='/netbankingpayment' element={<SignupUpi />}/>
    //     <Route path='/ordertracking' element={<OrderTracking />}/>
    //     <Route path='/trackingdetails' element={<TrackingDetails />}/>
    //     <Route path='/ordereddelivered' element={<ChatBotContainer />}/>
    //     <Route path='/vippass' element={<Vippaymentsucess />}/>
    //     <Route path='/failedpayment' element={<Paymentfaild />}/>
    //     <Route path='/successfulpayment' element={<Pay1 />}/>
    //     <Route path='/thankyou' element={<Thankyou />}/>
    //     <Route path='/viewprofile/' element={<ProfileLayout />}>
    //     <Route index element={<MyProfile />} />
    //       <Route path='myaddress' element={<MyAddress />} />
    //       <Route path='myorders' element={<MyOrders />} />
    //       <Route path='saveforlater' element={<SaveForLater />} />
    //       <Route path='customersupport' element={<CustomerSupport />} />
    //     </Route>
    //   </Routes>
    // </Router>
    <OrderSummery />
>>>>>>> 91e272ad91f1f4ecd2ca32d2dfe573136a2106cd
  );
}

export default App;
