import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ListingStyle from "../../../../lib/common/css/products/Listing.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Const } from "../../../../lib/constants/index";
import { addToCart } from "../../../../../src/store/slice/cartSlice";

const ListingComponent = () => {
  const { products } = useSelector((state) => state.products);
  const { items: cartItems } = useSelector((state) => state.cart);
  const location = useLocation();
  const path = location.pathname.slice(1);
  const [productsList, setProducts] = useState([]);
  const quantityOptions = Const?.QTY_OPTIONS || ["1", "2", "3", "4", "5"];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [selectedQuantities, setSelectedQuantities] = useState({});

  useEffect(() => {
    setProducts(products);
  }, [products]);

  const filteredProducts =
    path === "products/all-categories"
      ? productsList
      : productsList.filter(
          (p) => p.category.toLowerCase() === path.toLowerCase()
        );

  const getCartQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  const onQuantityChange = (productId, value) => {
    setSelectedQuantities((prev) => ({
      ...prev,
      [productId]: parseInt(value, 10),
    }));
  };

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
          const selectedQty = selectedQuantities[product.id] || 1;
          const qtyInCart = getCartQuantity(product.id);
          const disableAdd =
            qtyInCart >= selectedQty || product.stockCount === 0;

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
              <select
                className={ListingStyle.productQuantity}
                value={selectedQty}
                onChange={(e) => onQuantityChange(product.id, e.target.value)}
              >
                {quantityOptions.map((q) => (
                  <option key={q} value={q}>
                    {q}
                  </option>
                ))}
              </select>
              <div className={ListingStyle.priceSection}>
                <span className={ListingStyle.discountPrice}>
                  &#8364;{product.price}
                </span>
                <span className={ListingStyle.originalPrice}>
                  &#8364;{product.originalPrice}
                </span>
              </div>
              {product.stockCount > 0 ? (
                <button
                  className={ListingStyle.addToCart}
                  disabled={disableAdd}
                  onClick={() =>
                    dispatch(
                      addToCart({
                        ...product,
                        quantity: selectedQty,
                      })
                    )
                  }
                >
                  Add to cart
                </button>
              ) : (
                <button className={ListingStyle.outOfStock}>
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
