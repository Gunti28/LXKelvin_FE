import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Vipstyle from "../../../../lib/common/css/MessageModals/VipSuccess.module.css";

import { IoCheckmarkDoneOutline } from "react-icons/io5";
import {
  FOOTER_IMG,
  VIP_PAYMENT,
} from "../../../../lib/constants/Image_Constants";
import { useNavigate } from "react-router-dom";

const VipSuccess = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/my_account");
    }, 10000);
  }, []);
  return (
    <Modal
      show={true}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={Vipstyle.ModalMain}
    >
      <Modal.Body className="border-0 d-flex justify-content-center align-items-center flex-column ">
        <img
          src={VIP_PAYMENT}
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
          src={FOOTER_IMG}
          className={`${Vipstyle.footer}image-fluid w-100`}
          alt="FooterImg"
        />
      </Modal.Footer>
    </Modal>
  );
};

export default VipSuccess;
