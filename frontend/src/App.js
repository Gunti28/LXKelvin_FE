
import React from 'react';
import './App.css';
// import Navbaromponent from './components/Navbar';
// import Vippaymentsucess from './pages/Vippaymentsucess';
import HomePage from './pages/Categories';
import Paymentfaild from './pages/PaymentFailed';


function App() {
  return (
    <div className="App">
{/* <Navbaromponent/> */}
{/* <SignInModel/> */}
{/* <Vippaymentsucess /> */}
<HomePage/>
<Paymentfaild />

    </div>
  );

}

export default App;
