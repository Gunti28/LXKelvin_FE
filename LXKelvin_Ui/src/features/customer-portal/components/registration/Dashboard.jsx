// import React, { useState } from 'react';
import Category from '../../../../lib/common/css/registration/Dashboard.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import slid1 from '../../../../lib/common/assets/Images/dashboard_corosel.svg';
import slid2 from '../../../../lib/common/assets/Images/dashboard_corosel.svg';
import slid3 from '../../../../lib/common/assets/Images/dashboard_corosel.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import categoryData from "../../../../lib/common/mocks/Categories.json";
import { useEffect, useState } from 'react';


const HomePage = () => {
  // const [modelType, setModelType] = useState(null);
  // const closeModel = () => setModelType(null);
  const [categories,setCategories] = useState([]);
  const navigate= useNavigate();
  const handleAllCategories = () => {
    navigate('/products/all-categories')
  }
   
  const handleCardClick = (to) => {
    navigate(to);
  };

  useEffect(() => {
    setCategories(categoryData.categories);
  }, []);
  return (
    <div className={`container-fluid ${Category.MainDashboard}`}>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        className={`${Category.mySwiper} mt-5`}
      >
     <SwiperSlide>
  <div className={`${Category.carousel} d-flex align-items-center justify-content-center`}>
    <img 
      src={slid1}
      alt="Fruits and Vegetables"
      className={Category.banner}
    />
    <div className={`${Category.text} text-center p-4`}>
      <h3 className={Category.foont}>
        Let's celebrate the goodness of <span style={{ color: 'green' }}>greens</span>
      </h3>
      <Button
        variant="outline-dark"
        className={Category.btn1}
             >
        Up To <strong style={{ color: 'orange' }}>20%</strong> OFF
      </Button>
    </div>
  </div>
</SwiperSlide>


<SwiperSlide>
  <div className={`${Category.carousel} d-flex align-items-center justify-content-center`}>
    <img 
      src={slid2}
      alt="Banner Slide 2"
      className={Category.banner}
    />
    <div className={`${Category.text} text-center p-4`}>
      <h3 className={Category.foont}>
        Freshness at your <span style={{ color: 'green' }}>doorstep</span>
      </h3>
      <Button
        variant="outline-success"
        className={Category.btn1}
      >
        Shop Now
      </Button>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className={`${Category.carousel} d-flex align-items-center justify-content-center`}>
    <img 
      src={slid3}
      alt="Banner Slide 3"
      className={Category.banner}
    />
    <div className={`${Category.text} text-center p-4`}>
      <h3 className={Category.foont}>
        Daily Deals on <span style={{ color: 'orange' }}>Essentials</span>
      </h3>
      <Button
        variant="outline-warning"
        className={Category.btn1}
      >
        Check Offers
      </Button>
    </div>
  </div>
</SwiperSlide>
      </Swiper>

      {/* Category Section */}
      <Container fluid className="mt-4 ">
        <h4 className={`text-center mb-4 ${Category.CatText}`}>CATEGORIES</h4>
        <div className="text-end">
          <button 
          className={Category.AllCatBtn}
            onClick={handleAllCategories}
          >
            All Categories
          </button>
        </div>
        <hr />
        <div className=" d-flex overflow-auto gap-3 ">
          {categories.map((cat, idx) => (
            <Col md={3} sm={6} xs={12}  className="mb-4">
              
              <div  key={idx} className={`t1 mb-5 ${Category.cardtotal}`}>
              <Card className={Category.cardimage} 
              onClick={()=>{handleCardClick(cat.to)}}
              >
                <Card.Img variant="top" src={cat.image} className={Category.cd}/>
                <Card.Body className={Category.cardBody}>
                  <Card.Title className={`text-center ${Category.cardfont}`}>{cat.title}</Card.Title>
                </Card.Body>
              </Card>
              </div>
            </Col>
          ))}
        </div>
      </Container>
      
    </div>
  );
};

export default HomePage;
