import NavbarComponent from "../components/layOut/Navbar";
import { fetchProducts } from "../../../lib/services/productsAsyncThunk";
import { fetchCategories } from "../../../lib/services/categoriesAsyncThunk";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setActiveUser, setUserValid } from "../../../store/slice/otpAuthSlice";
export default function LayoutContainerPage() {
  const { userAuth, isUserValid } = useSelector((state) => state.userAuth);
  const dispatch = useDispatch();
  const { status, products } = useSelector((state) => state.products);
  const { categoriesStatus, categories } = useSelector(
    (state) => state.categories
  );
  const [, setValidateAuthUser] = useState(false);
  /**
   * to get the initial page render
   */
  useEffect(() => {
    if (status === "init") {
      dispatch(fetchProducts());
    }
  }, [products, status]);

  useEffect(() => {
    if (categoriesStatus === "init") {
      dispatch(fetchCategories());
    }
  }, [categories, categoriesStatus]);

  useEffect(() => {
    if (userAuth?.length) {
      dispatch(setUserValid(true));
      dispatch(setActiveUser(userAuth));
    } else {
      dispatch(setUserValid(false));
      console.log("inside--else");
      // dispatch(setActiveUser(JSON.parse(sessionStorage.getItem("userAuth"))));
    }
  }, [userAuth]);

  useEffect(() => {
    setValidateAuthUser(isUserValid);
  }, [isUserValid]);

  return (
    <div>
      <NavbarComponent />
    </div>
  );
}
