import React, { useState, useRef, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import ModelPage from "../../../../lib/common/css/registration/ModelPage.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getOtpAuth } from "../../../../lib/services/otpAuthAsyncThunk";

import { IMAGES } from "../../../../lib/constants/Image_Constants";
const OtpModel = ({ showOtpScreen }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState();
  const [resendDisabled, setResendDisabled] = useState(true);
  const [isOptModalOpen, setOtpModal] = useState(false);
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setResendDisabled(false);
    }
  }, [timer]);

  useEffect(() => {
    setOtpModal(showOtpScreen);
  }, [showOtpScreen]);

  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputRefs.current[index + 1].focus();
    }

    if (index === 3 && value) {
      const enteredOtp = newOtp.join("");
      if (enteredOtp === "1234") {
        toast.success("OTP Verified!");
        setTimeout(() => {
          setOtpModal(false);
          dispatch(getOtpAuth());
          navigate("/");
        }, 1000);
      } else {
        toast.error("Invalid OTP!!");
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleResend = () => {
    setOtp(["", "", "", ""]);
    setTimer(59);
    setResendDisabled(true);
    toast.info("OTP Resent!");
  };

  return (
    <Modal
      show={isOptModalOpen}
      size="medium"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className=" justify-content-center">
        <Modal.Title id="contained-modal-title-vcenter">
          OTP Verification
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="border-0 d-flex justify-content-center align-items-center flex-column ">
        <div className="text-center">
          <p className="fs-6 mb-4 ">We have sent a Verification code to</p>

          <div className=" d-flex justify-content-center align-item-center  gap-3 mb-4">
            {otp.map((digit, i) => (
              <input
                key={i}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                ref={(el) => (inputRefs.current[i] = el)}
                className={ModelPage.otpInput}
              />
            ))}
          </div>
          <ToastContainer />

          <div className="timer-text d-flex flex-row justify-content-center align-item-center gap-2">
            <p
              disabled={resendDisabled}
              onClick={handleResend}
              className={`resend-link ${resendDisabled ? "disabled" : ""}`}
            >
              Resend Again
            </p>
            <span className="timer-count">
              {timer > 0 ? `00:${timer < 10 ? `0${timer}` : timer}` : ""}
            </span>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className=" p-0 border-0 ps-1  ">
        <img

          src={IMAGES.footer_Img}
          alt="FooterImg"
          className="image-fluid w-100 "
          style={{ objectFit: "cover" }}
        />
      </Modal.Footer>
    </Modal>
  );
};

export default OtpModel;
