
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Vipstyle from'../css/Vipstyle.module.css'
import FooterImg from "../assets/paymentfaildandsucess/footerimg.jpg";
import headerimg from "../assets/paymentfaildandsucess/vipimage.png";

import { IoCheckmarkDoneOutline } from "react-icons/io5";
 
 const Vippaymentsucess = () => {

  return (
    <Modal
      show={true}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="border-0 justify-content-center  " >
        <Modal.Title id="contained-modal-title-vcenter">
       <div  className=" mt-5 circle d-flex justify-content-center">
       <IoCheckmarkDoneOutline className="mt-3 text-white" />
       </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="border-0 d-flex justify-content-center align-items-center flex-column ">
      <img
          src={headerimg}
          className={`${Vipstyle.img}image-fluid w-25 H-25 `}
          alt="FooterImg"
          
        />
        <div className="text-center">
        <h3 className="text-success">Payment Successfull !!</h3>
        <p>Thank You</p>
        </div>
      </Modal.Body>
      <Modal.Footer className=" p-0 border-0 ps-1  ">
        <img
          src={FooterImg}
          className={`${Vipstyle.footer}image-fluid w-100`}
          alt="FooterImg"
        />
      </Modal.Footer>
    </Modal>
  );
}
 
export default Vippaymentsucess ;