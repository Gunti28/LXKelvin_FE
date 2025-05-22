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

import React from 'react'

const FlashScreens = () => {
  return (
    <div>
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

    </div>
  )
}

export default FlashScreens