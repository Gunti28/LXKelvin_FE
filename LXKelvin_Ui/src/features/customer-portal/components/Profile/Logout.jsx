
// SignOut.js
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user session, auth state, etc.
    dispatch({ type: "LOGOUT_USER" }); // Replace with your actual logout action
    // Redirect to dashboard after logout
    navigate("/dashboard");
  }, [dispatch, navigate]);

  return null; // or a loading spinner if you want
};

export default SignOut;
