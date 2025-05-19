
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import FooterImg from "../assets/footerimg.jpg";
import paymentfaild from "../assets/paymentfaildandsucess/paymentfaild.png";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
 
 const Paymentfaild = ({ show, onClose }) => {
  return (
    <Modal
      show={show}
      size="md"
      onHide={onClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="border-0 justify-content-center  " >
        <Modal.Title id="contained-modal-title-vcenter">
       <div  className=" mt-5 circle d-flex justify-content-center" style={{}}>
       <IoCheckmarkDoneOutline className="mt-3 text-white" />
       </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="border-0 d-flex justify-content-center align-items-center flex-column ">
      <img
          src={paymentfaild}
          className="image-fluid w-25 H-25 "
          alt="FooterImg"
          style={{ width: "100px", height: "100px",objectFit: "cover" }}
        />
        <div className="text-center">
        <h3 className="text-danger" style={{color:"red"}}> PaymentFailed </h3>
        </div>
          {/* <Button variant="warning" onClick={onCreateAccount} width={100} >
          Create Account
        </Button> */}
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
 
 