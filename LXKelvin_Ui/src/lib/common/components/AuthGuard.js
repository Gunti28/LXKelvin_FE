import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AuthGuard = ({ children }) => {
  const { isUserValid, userAuth } = useSelector((state) => state.userAuth);
  const navigate = useNavigate();

  /**
   * useEffect to render the page when effect triggers
   */
  useEffect(() => {
    if (!userAuth.length && userAuth?.role !== "admin") {
      return navigate("/company_admin");
    }

    if (!userAuth.length && userAuth?.role !== "user") {
      return navigate("/");
    }
  }, [userAuth]);

  return children;
};

export default AuthGuard;
