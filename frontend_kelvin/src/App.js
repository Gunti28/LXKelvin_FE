
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
import ProfileLayout from "./pages/ProfileLayout";
import MyProfile from "./pages/MyProfile";
import AddressList from "./pages/MyAddress";
import MyOrders from "./pages/MyOrders";
import SaveForLater from "./pages/SaveForLater";
import CustomerSupport from "./pages/CustomerSupport";
import SignInModel from "./components/SignInModel";
import OtpModel from "./components/OtpModel";
import Register from "./components/Register";
import Success from "./components/Success";
import Listing from "./pages/Listing";
import ProductList from "./pages/ProductList";

function App() {
  return (
        <Router>
      <Routes>
        <Route path='/*' element={<NavbarComponent />} />
        {/* <Route path='signin' element={<SignInModel />}/>
        <Route path='enterotp' element={<OtpModel />}/>
        <Route path='registeruser' element={<Register />}/>
        <Route path='success' element={<Success />}/> */}
        {/* <Route path='/dashboard' element={<HomePage />}/> */}
        <Route path='/products' element={<ListingLayout />}/>
        <Route path='/productpage' element={<ProductDetailsPage />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/subscriptionplans' element={<PricingCards />}/>
        <Route path='/deliverydetails' element={<DeliveryAddress />}/>
        <Route path='/ordersummary' element={<OrderSummery />}/>
        <Route path='/products/' element={<ListingLayout />}>
        <Route path='all-categories' index element={<Listing />}/>
        <Route path="vegetables" element={<ProductList />} />
      <Route path="fruits" element={<ProductList />} />
      <Route path="seasonalvegetables" element={<ProductList />} />
      <Route path="seasonalfruits" element={<ProductList />} />
      <Route path="milk-products" element={<ProductList />} />
      <Route path="TrackingDetails" element={<TrackingDetails/>}/>
      
        </Route>
        <Route path='/choosepayment' element={<Paymentpage />}/>
        <Route path='/cardpayment' element={<Setupcard />}/>
        <Route path='/netbankingpayment' element={<SignupUpi />}/>
        <Route path='/ordertracking' element={<OrderTracking />}/>
        <Route path='/trackingdetails' element={<TrackingDetails />}/>
        <Route path='/ordereddelivered' element={<ChatBotContainer />}/>
        <Route path='/vippass' element={<Vippaymentsucess />}/>
        <Route path='/failedpayment' element={<Paymentfaild />}/>
        <Route path='/successfulpayment' element={<Pay1 />}/>
        <Route path='/thankyou' element={<Thankyou />}/>
        <Route path='/viewprofile/' element={<ProfileLayout />}>
        <Route index element={<MyProfile />} />
          <Route path='myaddress' element={<AddressList />} />
          <Route path='myorders' element={<MyOrders />} />
          <Route path='saveforlater' element={<SaveForLater />} />
          <Route path='customersupport' element={<CustomerSupport />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
