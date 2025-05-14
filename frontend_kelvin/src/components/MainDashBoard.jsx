import React from 'react'
import '../css/MainDashBoard.css';
import { Container } from 'react-bootstrap';
import HomeImg  from '../assets/homeimg.svg';


const MainDashBoard = () => {
  return (
    <Container fluid className='MainDash d-flex justify-content-center align-items-center '>
      {/* <div className='HeroMain d-flex justify-content-center align-items-center flex-column '>
        <div className='HeroTit'>
        <img src={HomeImg} alt='HomeImg' width={150} />
        </div>
        <h1 >ORGANIC</h1>
        <h2>VEGETABLE & FRUITS</h2>
        <h4>"Experience the Taste of Real Organic"</h4>
      </div> */}
      
    </Container>
  )
}

export default MainDashBoard