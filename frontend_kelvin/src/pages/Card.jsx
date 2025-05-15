
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardStyle from '../css/Card.module.css'
import { MdOutlineEuroSymbol } from "react-icons/md";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const plans = [
  {
    title: 'Monthly',
    price: '7',
    Name: 'user',
    features: ['Get extra (10% OFF)', 'Free delivery', 'Timely delivery'],
    buttonColor: '#E1712B40 ',
    buttonTextColor: '#E1712B',
  },
  {
    title: '3 Months',
    price: '9',
    Name: 'user',
    features: ['Get extra (15% OFF)', 'Free delivery', 'Timely delivery', 'Chat Support'],
    buttonColor: '#00EB0040', 
    buttonTextColor:'#2DC937',
  },
  {
    title: '6 Months',
    price: '10',
    Name: 'user',
    features: ['Get extra (20% OFF)', 'Free delivery', 'Timely delivery', 'Chat Support', 'Earn cashback'],
    buttonColor: 'linear-gradient(90deg, #979797 0%, #313131 50%, #727272 100%)',
    buttonTextColor: 'white',
    
  },
  {
    title: 'Annual',
    price: '22',
    Name: 'user',
    features: ['Get extra (25% OFF)', 'Free delivery', 'Timely delivery', 'Chat Support', 'Earn cashback', 'Get coupon codes'],
    buttonColor:'linear-gradient(90deg, #E8B919 0%, #82680E 100%)',
    buttonTextColor:'white',
  },
];
function PricingCards() {
  return (
    <div className="container fluid  my-5 ">
      <h4 className="text-center mb-4 fw-bold">Choose the plan thats right for you</h4>
      <div className="row pt-4 gap-0.5">
        {plans.map((plan, index) => (
          <div className={`${CardStyle.card} col-lg-3 col-md-6 mb-4`} key={index}>
            <Card className="me-1 mb-1 h-100 text-center border-2 shadow-lg rounded-3 d-flex flex-column pt-4">
       <div className="d-flex justify-content-center mb-3">
  <Button className="bg-white text-dark fw-bold border-dark px-4">
    {plan.title}
  </Button>
</div>
  <Card.Body className="flex-grow-1 d-flex flex-column">
    <Card.Title className='fw-bold fs-1'>
      <MdOutlineEuroSymbol className='pb-2' />{plan.price}
    </Card.Title>
    <Card.Text className="text-muted">{plan.Name}</Card.Text>
    <Card.Text className="flex-grow-1">
      <ul className={`${CardStyle.listed} text-start content`}>
        {plan.features.map((feature, i) => (
          <li key={i} className={`${CardStyle.fonttt} d-flex align-items-center mb-2 me-3`}>
            <IoCheckmarkCircleOutline color='green' className='me-4' />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </Card.Text>
  
      <Button
        className={`${CardStyle.custombutton} w-100`}
        style={{
          background: plan.buttonColor,
          color: plan.buttonTextColor || '#000',
          border: 'none'
        }}
      >
        Select Plan
      </Button>    

  </Card.Body>
</Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingCards;
