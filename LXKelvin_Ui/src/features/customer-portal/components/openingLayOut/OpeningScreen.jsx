import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Logo from "../../../../lib/common/assets/Images/Logo.svg";
import HeroStyles from "../../../../lib/common/css/registration/OpeningScreen.module.css";
import { useSelector } from "react-redux";

const OpeningLayOut = () => {
  const [showContent] = useState(true);
  const { isUserValid } = useSelector((state) => state.userAuth);
  const [openingScreenDisable, setOpeningScreenDisable] = useState("block");
  let contentWrapper;

  useEffect(() => {
    console.log("inside----useEffect", isUserValid);
    if (isUserValid) {
      setOpeningScreenDisable("none");
      contentWrapper = "";
    } else {
      setOpeningScreenDisable("block");
      contentWrapper = (
        <div className={HeroStyles.mainSection}>
          <div
            className={HeroStyles.heroOverlay}
            style={{ display: openingScreenDisable }}
          >
            <Container fluid className={HeroStyles.heroContentContainer}>
              <div className={HeroStyles.heroLogo}>
                <img src={Logo} width={150} alt="Logo" />
              </div>

              {showContent && (
                <div className={` ${HeroStyles.heroText} text-center`}>
                  <div className={HeroStyles.organicText}>ORGANIC</div>
                  <div className={HeroStyles.vegetableText}>
                    VEGETABLE & FRUITS
                  </div>
                  <div className={HeroStyles.subtitleText}>
                    "Experience the Taste of Real Organic"
                  </div>
                </div>
              )}
            </Container>
          </div>
        </div>
      );
    }
  }, [isUserValid]);

  return <>{contentWrapper}</>;
};

export default OpeningLayOut;
