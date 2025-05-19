import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import ProductDetPage from '../css/ProductDetailsPage.module.css'; 
import t1 from '../assets/productdetails_Images/t1.png';
import t2 from '../assets/productdetails_Images/t2.png';
import t3 from '../assets/productdetails_Images/t3.png';
import t4 from '../assets/productdetails_Images/t4.png';
import t5 from '../assets/productdetails_Images/t5.png';
import it1 from '../assets/productdetails_Images/it1.jpg';
import it2 from '../assets/productdetails_Images/it2.jpg';
import it3 from '../assets/productdetails_Images/it3.jpg';

const ProductDetailsPage= () => {

    const [productName, setProductName] = useState('Organic Tomato');
    const [productFinalPrice, setProductFinalPrice] = useState('46');
    const [productOldPrice, setProductOldPrice] = useState('63');
    const [productDiscount, setProductDiscount] = useState('26');
    const [productHealthBenefits , setProductHealthBenefits] = useState('High Vitamin C content strengthens the immune system.');
    const [productPackaging, setProductPackaging] = useState('Sold loose, in net bags, or in sealed packs for freshness');
    const [productAbout, setProductAbout] = useState('Tomatoes are versatile and widely used fruits (often treated as vegetables) in various cuisines worldwide. Known for their vibrant red color, juicy texture, and sweet-tangy flavor, tomatoes are a kitchen staple');
    const [productImage, setProductImage] = useState(t1);
    const [curImages, setcurImages] = useState([t1, t2, t3, t4, t5]);
    const [liked, setLiked] = useState(false);

    const [feedBack, setFeedBack] = useState([{
        name: 'Kristan watson',
        date: 'March 21, 2024',
        rating: 4,
        content: 'Great product smooth purchase',
        avatar: 't1.png'
        },
        {
            name: 'Bessie Kooper',
            date: 'March 21, 2024',
            rating: 4,
            content: 'Great product smooth purchase',
            avatar: 't2.png'
        },
        {
            name: 'John Smith',
            date: 'March 20, 2024',
            rating: 5,
            content: 'Excellent quality tomatoes, very fresh!',
            avatar: 't3.png'
        },
        {
            name: 'Emma Wilson',
            date: 'March 19, 2024',
            rating: 4,
            content: 'Quick delivery and good packaging',
            avatar: 't4.png'
        },
        {
            name: 'Michael Brown',
            date: 'March 18, 2024',
            rating: 5,
            content: 'Best organic tomatoes I\'ve had in a while',
            avatar: 't5.png'
        }]);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const totalImages = 5;

    const images = [t1, t2, t3, t4, t5];
    

    const handlePrevImage = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
    };

    const handleThumbnailClick = (index) => {
        setCurrentImageIndex(index);
    };

    const toggleIcon = () => {
        setLiked(prev => !prev);
    };
    

    return (
        <Container className={`${ProductDetPage.productPage} mt-4`}>
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
                            style={{left:10}}
                        >
                            &#8249;
                        </button>
                        <button
                            className={ProductDetPage.carouselControl}
                            onClick={handleNextImage}
                            aria-label="Next image"
                            style={{right:10}}
                        >
                            &#8250;
                        </button>
                    </div>

                    {/* Row 2: Thumbnails */}
                    <div className={ProductDetPage.thumbnailsRow}>
                        {curImages.map((src, i) => (
                            <img
                                key={i}
                                src={src}
                                alt={`Thumb ${i + 1}`}
                                className={`${ProductDetPage.thumbnail} ${i === currentImageIndex ? 'active' : ''}`}
                                onClick={() => handleThumbnailClick(i)}
                            />
                        ))}
                    </div>

                    {/* Row 3: Product Details Section */}
                    <div className={`${ProductDetPage.productInfoSection} mt-4`}>
                        <h4 className={ProductDetPage.detailsHeading}><p>Product Details</p></h4>
                        <div className={ProductDetPage.infoItem}>
                            <p><strong>Product Name:</strong></p>
                            <p>{productName}</p>
                        </div>

                        <div className={ProductDetPage.infoItem}>
                            <p><strong>Health Benefits</strong></p>
                            <p>{productHealthBenefits}</p>
                        </div>

                        <div className={ProductDetPage.infoItem}>
                            <p><strong>Packaging:</strong></p>
                            <p>{productPackaging}</p>
                        </div>

                        <div className={ProductDetPage.infoItem}>
                            <p><strong>About:</strong></p>
                            <p>{productAbout}</p>
                        </div>
                    </div>
                </Col>

                {/* Right Column */}
                <Col md={6} className={ProductDetPage.rightColumn}>
                    <div className={ProductDetPage.productDetailsSection}>
                        <div className={ProductDetPage.navigationPath}>
                            <span>Home</span>
                            <span>/</span>
                            <span>Fresh Vegetables</span>
                            <span>/</span>
                            <span>{productName}</span>
                        </div>

                        <h2>{productName}</h2>

                        <div className={ProductDetPage.quantityPriceSection}>
                            <div className={ProductDetPage.quantityAddContainer}>
                                <Form.Group className={ProductDetPage.quantitySelector}>
                                    <Form.Label>Quantity: </Form.Label>
                                    <Form.Select className={ProductDetPage.quantityDropdown}>
                                        <option>500 g</option>
                                    </Form.Select>
                                </Form.Group>
                                <Button variant="warning" className={ProductDetPage.addButton}>
                                    Add
                                </Button>
                            </div>

                            <div className={ProductDetPage.priceDisplay}>
                                <span className={ProductDetPage.currentPrice}>€{productFinalPrice}</span>
                                <span className={ProductDetPage.pmdPrice}>PMD €{productOldPrice}</span>
                                <span className={ProductDetPage.discount}>{productDiscount}% OFF</span>
                                {/* <div className="heart-icon">
                                <Icon icon="solar:heart-linear" width="34" height="34" />
                                </div> */}
                                <div className={ProductDetPage.heartIcon} onClick={toggleIcon} style={{ cursor: "pointer" }}>
                                    {liked ? (
                                        <Icon icon="solar:heart-bold" width="34" height="34" color="red" />
                                    ) : (
                                        <Icon icon="solar:heart-linear" width="34" height="34" />
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className={ProductDetPage.subscriptionOffer}>
                            <div className={ProductDetPage.offerBanner}>
                                <p>Get extra <span className={ProductDetPage.offText}>(15% OFF)</span> with <span className="vip-tag">VIP</span> Subscription</p>
                            </div>
                        </div>

                        <div className={ProductDetPage.subscriptionPlanSection}>
                            <h3>Select Your Subscription Plan</h3>
                            <Button variant="outline-warning" className={ProductDetPage.viewPlansBtn}>
                                View Plans
                            </Button>
                        </div>

                        {/* Row 2: Why Everyone Choose Section */}
                        <div className={ProductDetPage.whyChooseSection}>
                            <h4>Why Everyone Choose This App</h4>
                            <div className={ProductDetPage.benefitsContainer}>
                                <div className={ProductDetPage.benefitItem}>
                                    <div className={ProductDetPage.benefitIcon} style={{ width: '100px', height: '80px' }}>
                                        <img src={it1}
                                            alt="Time Saving" />
                                    </div>
                                    <div className={ProductDetPage.benefitContent}>
                                        <h5>Time-Saving</h5>
                                        <p>Easily find items with search tools or reorder from your previous purchases</p>
                                    </div>
                                </div>

                                <div className={ProductDetPage.benefitItem} >
                                    <div className={ProductDetPage.benefitIcon} style={{ width: '100px', height: '80px' }}>
                                        <img src={it2}
                                            alt="Promotions" />
                                    </div>
                                     <div className={ProductDetPage.benefitContent}>
                                        <h5>Promotions and Discounts</h5>
                                        <p>Many apps offer app-only discounts, coupons, and promotions</p>
                                    </div>
                                </div>

                                <div className={ProductDetPage.benefitItem} >
                                    <div className={ProductDetPage.benefitIcon} style={{ width: '100px', height: '80px' }}>
                                        <img src={it3}
                                            alt="Price Alerts" />
                                    </div>
                                   <div className={ProductDetPage.benefitContent}>
                                        <h5>Price Alerts</h5>
                                        <p>Set notifications for price drops on your favorite items</p>
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
                    {feedBack.map((feedback, index) => (
                        <div key={index} className={ProductDetPage.feedbackItem}>
                            <div className={ProductDetPage.feedbackHeader}>
                                <div className={ProductDetPage.feedbackAvatar}>
                                    <img src={`../assets/${feedback.avatar}`} alt={feedback.name} />
                                </div>
                                <div className={ProductDetPage.feedbackUser}>
                                    <h4>{feedback.name}</h4>
                                    <div className={ProductDetPage.feedbackDate}>{feedback.date}</div>
                                </div>
                                <div className={ProductDetPage.feedbackRating}>
                                    {'★'.repeat(feedback.rating)}{'☆'.repeat(5 - feedback.rating)}
                                </div>
                            </div>
                            <div className={ProductDetPage.feedbackContent}>
                                {feedback.content}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default ProductDetailsPage;
