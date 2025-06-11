import { useEffect } from "react";
import { setUserLogout } from "../../../../store/slice/otpAuthSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const LogOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    console.log("here logout");
    dispatch(setUserLogout());
    navigate("/");
  }, []);
};

export default LogOut;
