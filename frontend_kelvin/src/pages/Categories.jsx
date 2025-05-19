import React, { useState } from 'react';
import '../css/Categoris.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import slid1 from '../assets/slid-1.png';
import slid2 from '../assets/slid-1.png';
import slid3 from '../assets/slid-1.png';
import slid4 from '../assets/slid-1.png';

import fc from '../assets/fruits-categorie.png';
import sfc from '../assets/seasonal fruits-categorie.png';
import vc from '../assets/Vegetables-categorie.png';
import svc from '../assets/seasonal Vegetables-categorie.png';
import milk from '../assets/milk.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

const categories = [
  { title: 'Vegetables', image: vc, to:'/products/vegetables' },
  { title: 'Fruits', image: fc , to:'/products/fruits' },
  { title: 'Seasonal Vegetables', image: svc ,to:'/products/seasonalvegetables' },
  { title: 'Seasonal Fruits', image: sfc ,to:'/products/seasonalfruits'},
  { title: 'milk', image: milk ,to:'/products/milkproducts'},

];

const HomePage = () => {
  const [modelType, setModelType] = useState(null);
  const closeModel = () => setModelType(null);
  const navigate= useNavigate();

  const handleAllCategories = () => {
    navigate('/products/all-categories')

  }
   
  const handleCardClick = (to) => {
    navigate(to);
  };

  return (
    <div className="container-fluid MainDashboard">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper mt-5"
      >
        <SwiperSlide>
          <div className="carousel d-flex flex-column align-items-center">
            
            <img 
              src={slid1}
              alt="Fruits and Vegetables"
              style={{
                width: '90%',
                maxHeight: '300px',
                objectFit: 'cover',
                borderRadius: '10px',
              }}/>
          
            <div className="text-center p-4 text" style={{ background: 'transparent' }}>
              <h3 className='foont'>
                Let's celebrate the goodness of <span style={{ color: 'green' }}>greens</span>
              </h3>
              <Button  variant="outline-dark" className="mt-2 btn1"  onClick={handleAllCategories}>
                Up To <strong style={{ color: 'orange' }}>20%</strong> OFF
              </Button>
            </div>
          </div>
        </SwiperSlide> 

        {[slid2, slid3, slid4].map((num, index) => (
  <SwiperSlide key={index}>
    <img
      src={num}
      alt={`Slide ${index + 2}`}
      style={{
                width: '90%',
                maxHeight: '300px',
                objectFit: 'cover',
                borderRadius: '10px',
                marginLeft:'4rem'
              }}
    />
  </SwiperSlide>
))}      
      </Swiper>
      <Container  fluid className="mt-4 ">
        <h4 className="text-center  mb-4 CatText">CATEGORIES</h4>
        <div  className='text-end'>
       <button onClick={handleAllCategories} className='CatBtn'>All Categories</button>
        </div>
        <hr />
        <div className="category-scroll d-flex overflow-auto gap-3">
          {categories.map((cat, idx) => (
            <Col md={3} sm={6} xs={12}  className="mb-4">
              
          <div  key={idx} className='t1 mb-5  cardtotal'>
              <Card className='cardimage' 
              onClick={() => handleCardClick(cat.to)}
              >
                <Card.Img variant="top" src={cat.image} style={{ height: '150px', width: '100%', objectFit: 'cover' }} />
                <Card.Body className='cardBody'>
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
