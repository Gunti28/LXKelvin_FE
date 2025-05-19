
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import FooterImg from "../assets/footerimg.jpg";
import paymentfaild from "../assets/paymentfaildandsucess/paymentfaild.png";

import { IoCheckmarkDoneOutline } from "react-icons/io5";
 
 const Paymentfaild = () => {
  return (
    <Modal
      show={true}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="border-0 d-flex justify-content-center align-items-center flex-column gap-3 mt-5 ">
      <img
          src={paymentfaild}
          className="image-fluid w-25 H-25 "
          alt="FooterImg"
        />
        <div className="text-center">
        <h3 className="text-danger" style={{color:"red"}}> PaymentFailed </h3>
        </div>
      </Modal.Body>
      <Modal.Footer className=" p-0 border-0 ps-1  ">
        <img
          src={FooterImg}
          className="image-fluid w-100 "
          alt="FooterImg"
          style={{ objectFit: "cover" }}
        />
      </Modal.Footer>
    </Modal>
  );
}
 
export default Paymentfaild ;
 
 