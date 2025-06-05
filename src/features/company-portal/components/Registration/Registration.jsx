import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../../store/slice/admin-signinSlice";
import { useNavigate } from "react-router-dom";

const AdminRegister = () => {
  const [formData, setFormData] = useState({
    role: "Agent",
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { role, fullName, email, password, confirmPassword } = formData;
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    dispatch(registerUser({ role, fullName, email, password }));
    alert("Registration successful!");
    navigate("/company_signin");
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
        <h2 className="text-2xl font-bold">Register</h2>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded-lg"
        >
          <option value="Agent">Agent</option>
          <option value="Admin">Admin</option>
        </select>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          className="w-full p-2 mb-2 border rounded-lg"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 mb-2 border rounded-lg"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-2 mb-2 border rounded-lg"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="w-full p-2 mb-2 border rounded-lg"
          onChange={handleChange}
          required
        />
        <button className="w-full bg-yellow-500 text-white py-2 mb-2 rounded">
          Register
        </button>
        <button
          type="button"
          onClick={() => navigate("/company_signin")}
          className="w-full bg-gray-200 py-2 rounded"
        >
          Back to Sign In
        </button>
      </form>
    </div>
  );
};

export default AdminRegister;
