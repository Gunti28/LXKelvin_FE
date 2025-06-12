import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Row, Col, Button, Form } from "react-bootstrap";
import ProductDetPage from "../../../../lib/common/css/products/ProductDetails.module.css";
import feedbackData from "../../../../../public/mocks/feedback.json";

import { IMAGES } from "../../../../lib/constants/Image_Constants/index";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetails } from "../../../../lib/services/productDetailsAsyncThunk";
import {
  getCategoryName,
  handleCategoryClick,
  handleHomeClick,
  handleViewPlansClick,
} from "../../../../lib/helpers";

import OverLayLoader from "../overLayLoader/OverLayLoader";
import {
  addSavedItem,
  removeSavedItem,
} from "../../../../store/slice/saveLaterSlice";

const ProductDetailsPage = () => {
  let currentOfferPrice = 0;
  let currentOriginalPrice = 0;
  let wrapContent;
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, status, error } = useSelector(
    (state) => state.productDetails
  );

  //save for later
  const savedItems = useSelector((state) => state.savedItems);
  const isSaved = product
    ? savedItems.some((item) => item.id === product.id)
    : false;

  /**
   * we need to add changes on loaderCategories once service is placed
   */
  const [loader, setLoader] = useState(true);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const totalImages = 4;

  const [feedback, setFeedback] = useState([]);
  const [selectedWeight, setSelectedWeight] = useState("500g");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProductDetails(id));
    /**
     * this TimeOut function we need to re-wrap once service is in place
     */
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  }, [dispatch, id]);

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

  const handleOfferBanner = () => {
    navigate("/subscriptions", {
      state: { highlightIndex: 3 },
    });
  };
  const toggleIcon = () => {
    if (isSaved) {
      dispatch(removeSavedItem(product.id));
    } else {
      dispatch(addSavedItem(product));
    }
  };

  if (product) {
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
      offerPriceByWeight,
      originalPriceByWeight,
    } = product;

    currentOfferPrice = offerPriceByWeight?.[selectedWeight] || offerPrice;
    currentOriginalPrice =
      originalPriceByWeight?.[selectedWeight] || originalPrice;

    /**
     * wrapping  content as visible when product details are fetched
     */
    wrapContent = (
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
                onClick={() => handleHomeClick(navigate)}
              >
                Home
              </span>
              <span>/</span>
              <span
                className={ProductDetPage.CategoryText}
                onClick={() => handleCategoryClick(navigate, cat_id)}
              >
                {getCategoryName(cat_id)}
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
                  <Form.Select
                    className={ProductDetPage.quantityDropdown}
                    value={selectedWeight}
                    onChange={(e) => setSelectedWeight(e.target.value)}
                  >
                    <option value="500g">500 g</option>
                    <option value="1kg">1 kg</option>
                    <option value="2kg">2 kg</option>
                  </Form.Select>
                </Form.Group>
                <Button className={ProductDetPage.addButton}>Add</Button>
              </div>

              <div className={ProductDetPage.priceDisplay}>
                <span className={ProductDetPage.currentPrice}>
                  €{currentOfferPrice}
                </span>
                <span className={ProductDetPage.pmdPrice}>
                  PMD €{currentOriginalPrice}
                </span>
                <span className={ProductDetPage.discount}>{discount}% OFF</span>
                <div
                  className={ProductDetPage.heartIcon}
                  onClick={toggleIcon}
                  style={{ cursor: "pointer" }}
                >
                  {isSaved ? (
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
              <div
                className={ProductDetPage.offerBanner}
                onClick={handleOfferBanner}
              >
                <p>
                  Get extra{" "}
                  <span className={ProductDetPage.offText}>(25% OFF)</span> with{" "}
                  <span className={ProductDetPage.vipTag}>VIP</span>{" "}
                  Subscription
                </p>
              </div>
            </div>

            <div className={ProductDetPage.subscriptionPlanSection}>
              <h3>Select Your Subscription Plan</h3>
              <Button
                variant="outline-warning"
                className={ProductDetPage.viewPlansBtn}
                onClick={() => handleViewPlansClick(navigate)}
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
                    <img src={IMAGES.timeSaving} alt="Time Saving" />
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
                    <img src={IMAGES.promotions} alt="Promotions" />
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
                    <img src={IMAGES.priceAlerts} alt="Price Alerts" />
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
    );
  }

  return (
    <div className={ProductDetPage.productPage}>
      <OverLayLoader isLoader={loader} />
      {product && wrapContent}
      {/* Customer Feedback Section */}
      <div className={ProductDetPage.customerFeedback}>
        <h3>Customer Feedback</h3>
        <div className={ProductDetPage.feedbackContainer}>
          {feedback.map((feedback, index) => (
            <div key={index} className={ProductDetPage.feedbackItem}>
              <div className={ProductDetPage.feedbackHeader}>
                <div className={ProductDetPage.feedbackAvatar}>
                  <img src={`${feedback.avatar}`} alt={feedback.name} />
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
