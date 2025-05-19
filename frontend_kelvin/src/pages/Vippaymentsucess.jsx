
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import FooterImg from "../assets/footerimg.jpg";
import headerimg from "../assets/vipimage.png";
import "../css/Vippaymentsucess.css";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
 
 const Vippaymentsucess = ({ show, onClose }) => {

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
          src={headerimg}
          className="image-fluid w-25 H-25 "
          alt="FooterImg"
          style={{ width: "100px", height: "100px",objectFit: "cover" }}
        />
        <div className="text-center">
        <h3 className="text-success">Payment Successfull !!</h3>
        <p>Thank You</p>
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
 
export default Vippaymentsucess ;