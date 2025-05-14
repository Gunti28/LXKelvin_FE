

import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import FooterImg from "../assets/footerimg.jpg";
import "../css/Model.css";
import { Button } from "react-bootstrap";
import { IoCheckmarkDoneOutline } from "react-icons/io5";


function Success({ show, onClose, onCreateAccount }) {
  return (
    <Modal
      show={show}
      onHide={onClose}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="border-0 justify-content-center">
        <Modal.Title id="contained-modal-title-vcenter">
       <div  className=" mt-5 circle d-flex justify-content-center" style={{ backgroundColor:' #2DC937'}}>
       <IoCheckmarkDoneOutline className="mt-3 text-white" />
       </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="border-0 d-flex justify-content-center align-items-center flex-column ">
        <div className="text-center">
          <p className="fs-5 texting " style={{color:'#2DC937'}} >Succesfull Logged In!!</p>
        </div> 
      </Modal.Body>
      <Modal.Footer className=" p-0 border-0 ps-1  ">
        <img
          src={FooterImg}
          className="image-fluid w-100 "
          style={{ objectFit: "cover" }}
        />
      </Modal.Footer>
    </Modal>
  );
}

export default Success;
