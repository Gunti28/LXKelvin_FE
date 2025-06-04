import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import FooterImg from "../../../../lib/common/assets/Images/footerimg.jpg";
import ModelPage from "../../../../lib/common/css/registration/ModelPage.module.css";
import { Button } from "react-bootstrap";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/signin");
    }, 2000);
  }, []);

  return (
    <Modal
      show={true}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ background: "transparent" }}
    >
      <Modal.Header className="border-0 justify-content-center">
        <Modal.Title id="contained-modal-title-vcenter">
          <div
            className={`${ModelPage.circle} mt-5 d-flex justify-content-center`}
            style={{ backgroundColor: " #2DC937" }}
          >
            <IoCheckmarkDoneOutline className="mt-3 text-white" />
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="border-0 d-flex justify-content-center align-items-center flex-column ">
        <div className="text-center">
          <p
            className={`fs-5 ${ModelPage.texting}`}
            style={{ color: "#2DC937" }}
          >
            New Registration Successful!!
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer className=" p-0 border-0 ps-1  ">
        <img src={FooterImg} className={ModelPage.footerImg} />
      </Modal.Footer>
    </Modal>
  );
};

export default Success;
