import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from "../../../lib/services/productsService";


const Products = () => {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === 'init') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  let productsContent;

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

