import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ListingStyle from "../../../../lib/common/css/products/Listing.module.css";
import {
  addToCart,
  setProductWeightPreview,
} from "../../../../../src/store/slice/cartSlice";
import OverLayLoader from "../overLayLoader/OverLayLoader";
import { useState, useEffect } from "react";
const ProductList = () => {
  const { products } = useSelector((state) => state.products);
  const { items: cartItems, selectedOptions } = useSelector(
    (state) => state.cart
  );
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getCategory = () => {
    const path = location.pathname;

    if (path.includes("all-categories")) {
      return { category: null };
    } else if (path.includes("seasonalVegetables")) {
      return { category: "vegetables", seasonal: true };
    } else if (path.includes("vegetables")) {
      return { category: "vegetables" };
    } else if (path.includes("seasonalFruits")) {
      return { category: "fruits", seasonal: true };
    } else if (path.includes("fruits")) {
      return { category: "fruits" };
    } else if (path.includes("milkProducts")) {
      return { category: "milkProducts" };
    } else {
      return {};
    }
  };

  const { category, seasonal } = getCategory();

  /**
   * we need to add changes on loaderCategories once service is placed
   */
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    /**
     * this TimeOut function we need to re-wramp once service is in place
     */
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  }, [products, location.pathname]);

  const filteredProducts = products.filter((product) => {
    if (!category) return true;
    if (seasonal) {
      return (
        product.category.toLowerCase() === category.toLowerCase() &&
        product.isSeasonal === true
      );
    } else {
      return product.category.toLowerCase() === category.toLowerCase();
    }
  });

  const getCartQuantity = (id, weight) => {
    const item = cartItems.find(
      (item) => item.id === id && item.selectedWeight === weight
    );
    return item ? item.quantity : 0;
  };

  const handleWeightChange = (productId, weight) => {
    dispatch(setProductWeightPreview({ id: productId, weight }));
  };

  const handleProductClick = (id) => {
    navigate(`/productDetails/${id}`);
  };

  return (
    <div className={ListingStyle.listingContainer}>
      <OverLayLoader isLoader={loader} />
      <h1 className={ListingStyle.pageTitle}>
        {category === null
          ? "All Products"
          : `Get Fresh ${
              category.charAt(0).toUpperCase() + category.slice(1)
            } Delivered Online`}
      </h1>

      <div className={ListingStyle.productGrid}>
        {filteredProducts.map((product) => {
          const weights = Object.keys(product.priceByWeight || {});
          const selectedWeight =
            selectedOptions[product.id] || weights[0] || null;
          const priceByWeight =
            selectedWeight && product.priceByWeight?.[selectedWeight]
              ? product.priceByWeight[selectedWeight]
              : product.price;
          const originalPrice =
            selectedWeight && product.originalPrice
              ? product.originalPrice
              : priceByWeight;
          const qtyInCart = getCartQuantity(product.id, selectedWeight);

          return (
            <div key={product.id} className={ListingStyle.productCard}>
              <div
                className={ListingStyle.imgCon}
                style={{
                  backgroundColor: product.Colour,
                  filter: product.stockCount === 0 ? "grayscale(100%)" : "none",
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className={ListingStyle.productImage}
                  onClick={() => handleProductClick(product.id)}
                />
              </div>

              <h2 className={ListingStyle.productName}>{product.name}</h2>

              {weights.length > 0 && (
                <select
                  className={ListingStyle.productQuantity}
                  value={selectedWeight}
                  onChange={(e) =>
                    handleWeightChange(product.id, e.target.value)
                  }
                >
                  {weights.map((weight) => (
                    <option key={weight} value={weight}>
                      {weight}
                    </option>
                  ))}
                </select>
              )}

              <div className={ListingStyle.priceSection}>
                <span className={ListingStyle.discountPrice}>
                  €{priceByWeight}
                </span>
                <span className={ListingStyle.originalPrice}>
                  €{originalPrice}
                </span>
              </div>

              {product.stockCount > 0 ? (
                qtyInCart > 0 ? (
                  <div className={ListingStyle.quantityControls}>
                    <button
                      className={ListingStyle.qtyButton}
                      onClick={() =>
                        dispatch(
                          addToCart({
                            ...product,
                            selectedWeight,
                            priceByWeight: product.priceByWeight,
                            quantityChange: -1,
                          })
                        )
                      }
                    >
                      -
                    </button>
                    <span className={ListingStyle.qtyValue}>{qtyInCart}</span>
                    <button
                      className={ListingStyle.qtyButton}
                      onClick={() =>
                        dispatch(
                          addToCart({
                            ...product,
                            selectedWeight,
                            priceByWeight: product.priceByWeight,
                            quantityChange: 1,
                          })
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    className={ListingStyle.addToCart}
                    onClick={() =>
                      dispatch(
                        addToCart({
                          ...product,
                          selectedWeight,
                          quantity: 1,
                          price: priceByWeight,
                          priceByWeight: product.priceByWeight,
                        })
                      )
                    }
                  >
                    Add to cart
                  </button>
                )
              ) : (
                <button className={ListingStyle.outOfStock} disabled>
                  Out of Stock
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
