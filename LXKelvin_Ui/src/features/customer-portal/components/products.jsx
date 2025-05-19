import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from "../../../lib/services/productsAsyncThunk";


/**
 *  to view the all products
 * @returns 
 */
const Products = () => {
  /**
   * declarations
   */
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.products);
  let productsContent;
  
  /**
   * to get the initial page render 
   */
  useEffect(() => {
    if (status === 'init') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);


  if (status === 'loading') {
    productsContent = <div>Loading...</div>;
  } else if (status === 'succeeded') {
    productsContent = (
      <ul>
        {products.map((product) => (
          <li key={product?.id}>{product?.title}</li>
        ))}
      </ul>
    );
  } else if (status === 'failed') {
    productsContent = <div>{error}</div>;
  }

  return <div>{productsContent}</div>;

}

export default Products;

