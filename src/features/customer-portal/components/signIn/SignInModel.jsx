import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import ModelPage from "../../../../lib/common/css/registration/ModelPage.module.css";
import { Form, Button, Container } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOtp } from "../../../../lib/services/signInAsyncThunk";
import OtpModel from "./OtpModel";
import { FOOTER_IMG, LOGO } from "../../../../lib/constants/Image_Constants";

const SignInModel = () => {
  const [email, setEmail] = useState("");
  const [showOtpScreen, setOtpScreen] = useState(false);
  const [isLogInSuccess, setSigIn] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { otp } = useSelector((state) => state.signIn);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    dispatch(getOtp());
  };
  const handleRegister = () => {
    navigate("/signUp");
  };
  useEffect(() => {
    setSigIn(true);
  }, []);

  useEffect(() => {
    console.log("here$$$$$$", otp);
    if (otp?.otp === "1111") {
      console.log("here$$$$$$", otp?.otp);
      setSigIn(false);
      setOtpScreen(true);
    }
  }, [otp]);

  return (
    <>
      <Modal
        show={isLogInSuccess}
        size="medium"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="border-0 justify-content-center">
          <Modal.Title id="contained-modal-title-vcenter">
            <img src={LOGO} width={150} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          className={`border-0 d-flex justify-content-center align-items-center flex-column ${ModelPage.body}`}
        >
          <div className="text-center">
            <p className="fs-5 texting ">
              Experience the Taste of Real Organic
            </p>
            <p className={ModelPage.textingsmall}>Login or SignUp</p>
          </div>
          <Container fluid>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter phone number or email... "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={ModelPage.formCont}
                />
              </Form.Group>
              <Button
                variant="warning"
                type="submit"
                className="w-100 mt-3 mb-2"
              >
                Continue
              </Button>
              <p
                className={`${ModelPage.NewUserText} justify-content-center align-items-center d-flex `}
              >
                New User ?
                <span onClick={handleRegister} className={ModelPage.RegText}>
                  &nbsp;Register now
                </span>
              </p>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer className=" p-0 border-0 ps-1  ">
          <img
            src={FOOTER_IMG}
            className={`image-fluid w-100 ${ModelPage.footerImg}`}
          />
        </Modal.Footer>
      </Modal>
      <div>
        <OtpModel showOtpScreen={showOtpScreen} />
      </div>
    </>
  );
};

export default SignInModel;
