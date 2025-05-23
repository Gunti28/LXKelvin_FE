import NavbarComponent from "../components/layOut/Navbar";
import { fetchProducts } from "../../../lib/services/productsAsyncThunk";
import { fetchCategories } from "../../../lib/services/categoriesAsyncThunk";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
export default function LayoutContainerPage() {
  const dispatch = useDispatch();
  const { status, products } = useSelector((state) => state.products);
  const { categoriesStatus, categories } = useSelector(
    (state) => state.categories
  );
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

  return (
    <div>
      <NavbarComponent />
    </div>
  );
}
