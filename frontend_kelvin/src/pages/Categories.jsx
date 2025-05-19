import React, { useState } from 'react';
import Category from '../css/Categoris.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import slid1 from '../assets/banerslides/slid-1.png';
import slid2 from '../assets/banerslides/slid-1.png';
import slid3 from '../assets/banerslides/slid-1.png';
import fc from '../assets/allcategories/fruits-categorie.png';
import sfc from '../assets/allcategories/seasonal fruits-categorie.png';
import vc from '../assets/allcategories/Vegetables-categorie.png';
import svc from '../assets/allcategories/seasonal Vegetables-categorie.png';
import milk from '../assets/allcategories/milk.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';

const categories = [
  { title: "Vegetables", image: vc },
  { title: "Fruits", image: fc },
  { title: "Seasonal Vegetables", image: svc },
  { title: "Seasonal Fruits", image: sfc },
  { title: "milk", image: milk },
];

const HomePage = () => {
  const [modelType, setModelType] = useState(null);
  const closeModel = () => setModelType(null);

  return (
    <div className="container-fluid ">
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
        <h4 className="text-center  mb-4">CATEGORIES</h4>
        <div className="text-end">
          <Button
            variant="primary"
            size="sm"
          >
            All Categories
          </Button>
        </div>
        <hr />
        <div className=" d-flex overflow-auto gap-3">
          {categories.map((cat, idx) => (
            <Col md={3} sm={6} xs={12}  className="mb-4">
              
          <div  key={idx} className='t1 mb-5  cardtotal'>
              <Card className={Category.cardimage} >
                <Card.Img variant="top" src={cat.image} className={Category.cd}/>
                <Card.Body className={Category.cardBody}>
                  <Card.Title className="text-center cardfont">{cat.title}</Card.Title>
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
