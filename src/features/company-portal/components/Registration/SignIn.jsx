
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../../store/slice/admin-signinSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminSignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
 const { userAuth } = useSelector((state) => state.auth);
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  React.useEffect(() => {
    if (userAuth) {
      navigate("/company_admin");
    }
  }, [userAuth, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("registeredUser"));
    if (savedUser && savedUser.email === formData.email && savedUser.password === formData.password) {
      dispatch(loginUser(savedUser));
    } else {
      alert("Invalid email or password");
    }
  };

  return (
       <div
      className="min-h-screen flex items-center justify-center bg-gray-100 bg-cover bg-center bg-no-repeat relative "
      style={{
        backgroundImage: "url('/public/assets/images/LandingPage.svg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50 "></div>
      <form
        onSubmit={handleSubmit}
        className="relative z-10 bg-white backdrop-blur-lg p-4 rounded-2xl shadow w-full max-w-md space-y-4 "
      >
        <h2 className="text-2xl font-bold">Sign In</h2>
        <input type="email" name="email" placeholder="Email" className="w-full p-2 mb-2 border rounded-lg" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" className="w-full p-2 mb-2 border rounded-lg" onChange={handleChange} required />
        <button className="w-full bg-yellow-500 text-white py-2 mb-2 rounded" type="submit">Sign In</button>
        <button type="button" onClick={() => navigate("/company_register")} className="w-full bg-gray-200 py-2 rounded">Go to Register</button>
      </form>
    </div>
  );
};

export default AdminSignIn;
