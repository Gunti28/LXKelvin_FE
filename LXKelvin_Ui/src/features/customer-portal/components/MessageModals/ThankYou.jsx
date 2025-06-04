import React from "react";
import Modal from "react-bootstrap/Modal";
import FooterImg from "../assets/footerimg.jpg";
import thankyou from "../assets/tankyou.png";
import Thankyoustyle from "../css/Thankyou.module.css";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

const Thankyou = () => {
  return (
    <Modal
      show={true}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="border-0 justify-content-center  ">
        <Modal.Title id="contained-modal-title-vcenter">
          <div
            className=" mt-5 circle d-flex justify-content-center"
            style={{}}
          >
            <IoCheckmarkDoneOutline className="mt-3 text-white" />
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="border-0 d-flex justify-content-center align-items-center flex-column ">
        <img
          src={thankyou}
          className={`${Thankyoustyle.img}image-fluid w-25 H-25 `}
          alt="pay1Img"
        />
        <br></br>
        <div className="text-center">
          <h3 className={Thankyoustyle.thankyou}> Thank you </h3>
        </div>
      </Modal.Body>
      <Modal.Footer className=" p-0 border-0 ps-1  ">
        <img
          src={FooterImg}
          className="image-fluid w-100 object-fit-cover "
          alt="FooterImg"
        />
      </Modal.Footer>
    </Modal>
  );
};

export default Thankyou;
