import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ListingStyle from "../../../../lib/common/css/products/Listing.module.css";
import { useSelector } from "react-redux";
import { Const } from "../../../../lib/constants/index";

const ListingComponent = () => {
  /**
   * call store object with using of selectors
   */
  const { products } = useSelector((state) => state.products);
  const location = useLocation();
  const path = location.pathname.slice(1);
  const [productsList, setProducts] = useState([]);
  const quantityOptions = Const?.QTY_OPTIONS;

  useEffect(() => {
    setProducts(products);
  }, [products]);

  const filteredProducts =
    path === "products/all-categories"
      ? productsList
      : productsList.filter(
          (p) => p.category.toLowerCase() === path.toLowerCase()
        );
  return (
    <div className={ListingStyle.listingContainer}>
      <h1 className={ListingStyle.pageTitle}>
        {path === "all-categories"
          ? "All Products"
          : `Get Fresh Fruits& Vegetables Delivered Online`}
      </h1>
      <div className={ListingStyle.productGrid}>
        {filteredProducts.map((product, index) => (
          <div key={index} className={ListingStyle.productCard}>
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
              />
            </div>
            <h2 className={ListingStyle.productName}>{product.name}</h2>
            <select className={ListingStyle.productQuantity}>
              {quantityOptions.map((q, i) => (
                <option key={i}>{q}</option>
              ))}
            </select>
            <div className={ListingStyle.priceSection}>
              <span className={ListingStyle.discountPrice}>
                ₹{product.price}
              </span>
              <span className={ListingStyle.originalPrice}>
                ₹{product.originalPrice}
              </span>
            </div>
            {product.stockCount > 0 ? (
              <button className={ListingStyle.addToCart}>Add to cart</button>
            ) : (
              <button className={ListingStyle.outOfStock}>Out of Stock</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingComponent;
