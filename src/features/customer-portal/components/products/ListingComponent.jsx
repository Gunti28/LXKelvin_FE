import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ListingStyle from "../../../../lib/common/css/products/Listing.module.css";
import {
  addToCart,
  setProductWeightPreview,
} from "../../../../../src/store/slice/cartSlice";

const ListingComponent = () => {
  const { products } = useSelector((state) => state.products);
  const { items: cartItems, selectedOptions } = useSelector(
    (state) => state.cart
  );
  const location = useLocation();
  const path = location.pathname.slice(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Filter products by category or show all
  const filteredProducts =
    path === "products/all-categories"
      ? products
      : products.filter((p) => p.category.toLowerCase() === path.toLowerCase());

  // Get quantity in cart for product + weight
  const getCartQuantity = (id, weight) => {
    const item = cartItems.find(
      (item) => item.id === id && item.selectedWeight === weight
    );
    return item ? item.quantity : 0;
  };

  // Handle weight select change - dispatch to redux to update selected weight
  const onWeightChange = (productId, value) => {
    dispatch(setProductWeightPreview({ id: productId, weight: value }));
  };

  // Navigate to product detail page
  const handleProductClick = (id) => {
    navigate(`/productDetails/${id}`);
  };

  return (
    <div className={ListingStyle.listingContainer}>
      <h1 className={ListingStyle.pageTitle}>
        {path === "all-categories"
          ? "All Products"
          : "Get Fresh Fruits & Vegetables Delivered Online"}
      </h1>

      <div className={ListingStyle.productGrid}>
        {filteredProducts.map((product) => {
          const selectedWeight =
            selectedOptions[product.id] ||
            Object.keys(product.priceByWeight || {})[0] ||
            null;

          const priceByWeight = selectedWeight
            ? product.priceByWeight?.[selectedWeight] || product.price
            : product.price;

          const qtyInCart = getCartQuantity(product.id, selectedWeight);

          return (
            <div key={product.id} className={ListingStyle.productCard}>
              <div
                className={ListingStyle.imgCon}
                style={{
                  backgroundColor: product.Colour,
                  filter: product.stockCount === 0 ? "grayscale(100%)" : "none",
                }}
                onClick={() => handleProductClick(product.id)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className={ListingStyle.productImage}
                />
              </div>

              <h2 className={ListingStyle.productName}>{product.name}</h2>

              {product.priceByWeight &&
                Object.keys(product.priceByWeight).length > 0 && (
                  <select
                    className={ListingStyle.productQuantity}
                    value={selectedWeight || ""}
                    onChange={(e) => onWeightChange(product.id, e.target.value)}
                  >
                    {Object.keys(product.priceByWeight).map((weight) => (
                      <option key={weight} value={weight}>
                        {weight}
                      </option>
                    ))}
                  </select>
                )}

              <div className={ListingStyle.priceSection}>
                <span className={ListingStyle.discountPrice}>
                  €{(priceByWeight * (qtyInCart || 1)).toFixed(2)}
                </span>
                <span className={ListingStyle.originalPrice}>
                  €{(product.originalPrice * (qtyInCart || 1)).toFixed(2)}
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

export default ListingComponent;
