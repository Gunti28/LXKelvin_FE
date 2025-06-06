import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../../../../lib/common/css/products/Listing.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Const } from "../../../../lib/constants/index";
import { addToCart } from "../../../../../src/store/slice/cartSlice";

const ProductList = () => {
  const [productsList, setProducts] = useState([]);
  const [selectedQuantities, setSelectedQuantities] = useState({});

  const { products } = useSelector((state) => state.products);
  // const { items: cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname.slice(10);
  const quantityOptions = Const?.QTY_OPTIONS || ["1", "2", "3", "4", "5"];
  const navigate = useNavigate();

  const getCategory = () => {
    if (location.pathname.includes("seasonalVegetables")) {
      return { category: "vegetables", seasonal: true };
    } else if (location.pathname.includes("vegetables")) {
      return { category: "vegetables" };
    } else if (location.pathname.includes("seasonalFruits")) {
      return { category: "fruits", seasonal: true };
    } else if (location.pathname.includes("fruits")) {
      return { category: "fruits" };
    } else if (location.pathname.includes("milkProducts")) {
      return { category: "milkProducts" };
    } else {
      return {};
    }
  };

  useEffect(() => {
    setProducts(products);
    fetchData(products);
  }, [products, location.pathname]);

  const fetchData = (callByRef) => {
    const filter = getCategory();
    let filteredProducts = callByRef;

    if (filter.category) {
      filteredProducts = filteredProducts.filter(
        (p) => p.category === filter.category
      );
    }
    if (filter.seasonal !== undefined) {
      filteredProducts = filteredProducts.filter(
        (p) => p.isSeasonal === filter.seasonal
      );
    }
    setProducts(filteredProducts);
  };

  const onQuantityChange = (productId, value) => {
    setSelectedQuantities((prev) => ({
      ...prev,
      [productId]: parseInt(value, 10),
    }));
  };

  const handleAddToCart = (id) => {
    const quantity = selectedQuantities[id] || 1;
    const product = productsList.find((p) => p.id === id);
    if (!product) return;

    dispatch(addToCart({ ...product, quantity }))
      .unwrap()
      .then(() => {
        console.log("Item added to cart");
      })
      .catch((err) => {
        console.warn("Add to cart failed:", err);
      });
  };

  const handleProductClick = (id) => {
    navigate(`/productDetails/${id}`);
  };

  return (
    <div className={styles.listingContainer}>
      <h1 className={styles.pageTitle}>
        {path === "all-categories"
          ? "All Products"
          : `Get Fresh ${path} Delivered Online`}
      </h1>
      <div className={styles.productGrid}>
        {productsList.map((product, index) => {
          const selectedQty = selectedQuantities[product.id] || 1;
          const disableAdd = product.stockCount === 0;

          return (
            <div key={index} className={styles.productCard}>
              <div
                className={styles.imgCon}
                style={{
                  backgroundColor: product.Colour,
                  filter: disableAdd ? "grayscale(100%)" : "none",
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.productImage}
                  onClick={() => handleProductClick(product.id)}
                />
              </div>
              <h2 className={styles.productName}>{product.name}</h2>
              <select
                className={styles.productQuantity}
                value={selectedQty}
                onChange={(e) => onQuantityChange(product.id, e.target.value)}
              >
                {quantityOptions.map((q, i) => (
                  <option key={i} value={q}>
                    {q}
                  </option>
                ))}
              </select>
              <div className={styles.priceSection}>
                <span className={styles.discountPrice}>
                  &#8364;{product.price}
                </span>
                <span className={styles.originalPrice}>
                  &#8364;{product.originalPrice}
                </span>
              </div>
              {disableAdd ? (
                <button className={styles.outOfStock} disabled>
                  Out of Stock
                </button>
              ) : (
                <button
                  className={styles.addToCart}
                  onClick={() => handleAddToCart(product.id)}
                >
                  Add to Cart
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
