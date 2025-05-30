import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Row, Col, Button, Form } from "react-bootstrap";
import ProductDetPage from "../../../../lib/common/css/products/ProductDetails.module.css";
import feedbackData from "../../../../../public/mocks/feedback.json";

import {
  TIME_SAVING,
  PROMOTIONS,
  PRICE_ALERTS,
} from "../../../../lib/constants/Image_Constants/index";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetails } from "../../../../lib/services/productDetailsAsyncThunk";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, status, error } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, [dispatch, id]);
  const [liked, setLiked] = useState(false);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const totalImages = 5;

  const [feedback, setFeedback] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setFeedback(feedbackData.feedback);
  }, []);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleHomeClick = () => {
    navigate("/products/all-categories");
  };
  const handleCategoryClick = (cat_id) => {
    if (cat_id === 1) {
      navigate("/products/vegetables");
    } else if (cat_id === 2) {
      navigate("/products/fruits");
    } else if (cat_id === 3) {
      navigate("/products/seasonalVegetables");
    } else if (cat_id === 4) {
      navigate("/products/seasonalFruits");
    } else {
      navigate("/products/milkProducts");
    }
  };

  const toggleIcon = () => {
    setLiked((prev) => !prev);
  };

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;
  if (!product) return <p>No product found</p>;

  const {
    productName,
    offerPrice,
    originalPrice,
    discount,
    healthBenefits,
    packing,
    about,
    images,
    cat_id,
  } = product;

  return (
    <div className={ProductDetPage.productPage}>
      <Row>
        <Col md={6} className={ProductDetPage.leftColumn}>
          <div className={ProductDetPage.mainImageContainer}>
            <img
              src={images[currentImageIndex]}
              alt={productName}
              className={ProductDetPage.mainPreviewImage}
            />
            <button
              className={ProductDetPage.carouselControl}
              onClick={handlePrevImage}
              aria-label="Previous image"
              style={{ left: 10 }}
            >
              &#8249;
            </button>
            <button
              className={ProductDetPage.carouselControl}
              onClick={handleNextImage}
              aria-label="Next image"
              style={{ right: 10 }}
            >
              &#8250;
            </button>
          </div>

          {/* Row 2: Thumbnails */}
          <div className={ProductDetPage.thumbnailsRow}>
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Thumb ${i + 1}`}
                className={`${ProductDetPage.thumbnail} ${
                  i === currentImageIndex ? "active" : ""
                }`}
                onClick={() => handleThumbnailClick(i)}
              />
            ))}
          </div>

          {/* Row 3: Product Details Section */}
          <div className={`${ProductDetPage.productInfoSection} mt-4`}>
            <h4 className={ProductDetPage.detailsHeading}>
              <p>Product Details</p>
            </h4>
            <div className={ProductDetPage.infoItem}>
              <p>
                <strong>Product Name:</strong>
              </p>
              <p>{productName}</p>
            </div>

            <div className={ProductDetPage.infoItem}>
              <p>
                <strong>Health Benefits</strong>
              </p>
              <p>{healthBenefits}</p>
            </div>

            <div className={ProductDetPage.infoItem}>
              <p>
                <strong>Packaging:</strong>
              </p>
              <p>{packing}</p>
            </div>

            <div className={ProductDetPage.infoItem}>
              <p>
                <strong>About:</strong>
              </p>
              <p>{about}</p>
            </div>
          </div>
        </Col>

        {/* Right Column */}
        <Col md={6} className={ProductDetPage.rightColumn}>
          <div className={ProductDetPage.productDetailsSection}>
            <div className={ProductDetPage.breadCrumb}>
              <span
                className={ProductDetPage.HomeText}
                onClick={handleHomeClick}
              >
                Home
              </span>
              <span>/</span>
              <span
                className={ProductDetPage.CategoryText}
                onClick={() => handleCategoryClick(cat_id)}
              >
                {cat_id === 1
                  ? " Vegetables"
                  : cat_id === 2
                  ? " Fruits"
                  : cat_id === 3
                  ? " Seasonal Vegetables"
                  : cat_id === 4
                  ? " Seasonal Fruits"
                  : "Milk Products"}
              </span>
              <span>/</span>
              <span className={ProductDetPage.ProductText}>
                &nbsp;{productName}
              </span>
            </div>

            <p className={ProductDetPage.ProductTitle}>{productName}</p>

            <div className={ProductDetPage.quantityPriceSection}>
              <div className={ProductDetPage.quantityAddContainer}>
                <Form.Group className={ProductDetPage.quantitySelector}>
                  <Form.Label>Quantity: </Form.Label>
                  <Form.Select className={ProductDetPage.quantityDropdown}>
                    <option>500 g</option>
                    <option>1 kg</option>
                    <option>2 kg</option>
                  </Form.Select>
                </Form.Group>
                <Button className={ProductDetPage.addButton}>Add</Button>
              </div>

              <div className={ProductDetPage.priceDisplay}>
                <span className={ProductDetPage.currentPrice}>
                  €{offerPrice}
                </span>
                <span className={ProductDetPage.pmdPrice}>
                  PMD €{originalPrice}
                </span>
                <span className={ProductDetPage.discount}>{discount}% OFF</span>
                {/* <div className="heart-icon">
                                <Icon icon="solar:heart-linear" width="34" height="34" />
                                </div> */}
                <div
                  className={ProductDetPage.heartIcon}
                  onClick={toggleIcon}
                  style={{ cursor: "pointer" }}
                >
                  {liked ? (
                    <Icon
                      icon="solar:heart-bold"
                      width="34"
                      height="34"
                      color="red"
                    />
                  ) : (
                    <Icon icon="solar:heart-linear" width="34" height="34" />
                  )}
                </div>
              </div>
            </div>

            <div className={ProductDetPage.subscriptionOffer}>
              <div className={ProductDetPage.offerBanner}>
                <p>
                  Get extra{" "}
                  <span className={ProductDetPage.offText}>(15% OFF)</span> with{" "}
                  <span className="vip-tag">VIP</span> Subscription
                </p>
              </div>
            </div>

            <div className={ProductDetPage.subscriptionPlanSection}>
              <h3>Select Your Subscription Plan</h3>
              <Button
                variant="outline-warning"
                className={ProductDetPage.viewPlansBtn}
              >
                View Plans
              </Button>
            </div>

            {/* Row 2: Why Everyone Choose Section */}
            <div className={ProductDetPage.whyChooseSection}>
              <h4>Why Everyone Choose This App</h4>
              <div className={ProductDetPage.benefitsContainer}>
                <div className={ProductDetPage.benefitItem}>
                  <div className={ProductDetPage.benefitIcon}>
                    <img src={TIME_SAVING} alt="Time Saving" />
                  </div>
                  <div className={ProductDetPage.benefitContent}>
                    <h5>Time-Saving</h5>
                    <p>
                      Easily find items with search tools or reorder from your
                      previous purchases
                    </p>
                  </div>
                </div>

                <div className={ProductDetPage.benefitItem}>
                  <div className={ProductDetPage.benefitIcon}>
                    <img src={PROMOTIONS} alt="Promotions" />
                  </div>
                  <div className={ProductDetPage.benefitContent}>
                    <h5>Promotions and Discounts</h5>
                    <p>
                      Many apps offer app-only discounts, coupons, and
                      promotions
                    </p>
                  </div>
                </div>

                <div className={ProductDetPage.benefitItem}>
                  <div className={ProductDetPage.benefitIcon}>
                    <img src={PRICE_ALERTS} alt="Price Alerts" />
                  </div>
                  <div className={ProductDetPage.benefitContent}>
                    <h5>Price Alerts</h5>
                    <p>
                      Set notifications for price drops on your favorite items
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      {/* Customer Feedback Section */}
      <div className={ProductDetPage.customerFeedback}>
        <h3>Customer Feedback</h3>
        <div className={ProductDetPage.feedbackContainer}>
          {feedback.map((feedback, index) => (
            <div key={index} className={ProductDetPage.feedbackItem}>
              <div className={ProductDetPage.feedbackHeader}>
                <div className={ProductDetPage.feedbackAvatar}>
                  <img
                    src={`../assets/${feedback.avatar}`}
                    alt={feedback.name}
                  />
                </div>
                <div className={ProductDetPage.feedbackUser}>
                  <h4>{feedback.name}</h4>
                  <div className={ProductDetPage.feedbackDate}>
                    {feedback.date}
                  </div>
                </div>
                <div className={ProductDetPage.feedbackRating}>
                  {"★".repeat(feedback.rating)}
                  {"☆".repeat(5 - feedback.rating)}
                </div>
              </div>
              <div className={ProductDetPage.feedbackContent}>
                {feedback.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
