import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

const AuthGuard = ({ children }) => {
  const { isUserValid, userAuth } = useSelector((state) => state.userAuth);
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  /**
   * useEffect to render the page when effect triggers
   */
  useEffect(() => {
    if (!userAuth.length && userAuth?.role !== "admin") {
      if (path.startsWith("/my_account")) {
        return navigate("/");
      } else {
        return navigate("/company_admin");
      }
    }

    if (!userAuth.length && userAuth?.role !== "user") {
      return navigate("/");
    }
  }, [userAuth]);

  return children;
};

export default AuthGuard;
