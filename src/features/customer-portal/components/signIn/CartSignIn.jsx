import Modal from "react-bootstrap/Modal";
import ModelPage from "../../../../lib/common/css/registration/ModelPage.module.css";
import { Form, Button, Container } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import OtpModel from "./OtpModel";
import { IMAGES } from "../../../../lib/constants/Image_Constants";

const CartSignIn = ({ show, onHide }) => {
  const navigate = useNavigate();

  const handleLogInClick = () => {
    navigate("/signIn");
  };
  const handleRegister = () => {
    navigate("/signUp");
  };

  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="border-0 justify-content-center">
          <Modal.Title id="contained-modal-title-vcenter">
            <img src={IMAGES.logo} width={150} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          className={`border-0 d-flex justify-content-center align-items-center flex-column ${ModelPage.body}`}
        >
          <div className="text-center">
            <p className="fs-6 texting ">
              Please log in to continue adding products to your cart.
            </p>
          </div>
          <Container fluid
          className="text-center"
          >
            <Button
              variant="warning"
              type="submit"
              className="w-50 mt-3 mb-2"
              onClick={handleLogInClick}
            >
              Login
            </Button>
            <p
              className={`${ModelPage.NewUserText} justify-content-center align-items-center d-flex `}
            >
              New User ?
              <span onClick={handleRegister} className={ModelPage.RegText}>
                &nbsp;Register now
              </span>
            </p>
          </Container>
        </Modal.Body>
        <Modal.Footer className=" p-0 border-0 ps-1  ">
          <img
            src={IMAGES.footer_Img}
            className={`image-fluid w-100 ${ModelPage.footerImg}`}
          />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CartSignIn;
