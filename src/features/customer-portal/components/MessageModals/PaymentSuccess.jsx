import React from "react";
import Modal from "react-bootstrap/Modal";
import "../../../../lib/common/css/MessageModals/VipSuccess.module.css";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { IMAGES } from "../../../../lib/constants/Image_Constants";

const Pay1 = () => {
  return (
    <Modal
      show={true}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="border-0 d-flex justify-content-center align-items-center flex-column mt-5 gap-3 ">
        <img
          src={IMAGES.pay}
          className="image-fluid w-25 H-25  "
          alt="pay1Img"
          style={{ width: "100px", height: "100px", objectFit: "cover" }}
        />
        <div className="text-center">
          <h3 style={{ color: "darkgreen" }}> Payment Successful </h3>
          <p>Thank You</p>
        </div>
      </Modal.Body>
      <Modal.Footer className=" p-0 border-0 ps-1  ">
        <img
          src={IMAGES.footer_Img}
          className="image-fluid w-100 "
          alt="FooterImg"
          style={{ objectFit: "cover" }}
        />
      </Modal.Footer>
    </Modal>
  );
};

export default Pay1;
