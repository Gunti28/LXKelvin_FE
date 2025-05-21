import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Logo from '../../../../lib/common/assets/Images/Logo.svg';
import HeroStyles from '../../../../lib/common/css/registration/OpeningScreen.module.css';

const Hero = () => {
    const [showContent] = useState(true);
    return (
        <div className={HeroStyles.mainSection}>
            <div className={HeroStyles.heroOverlay}>
                <Container fluid className={HeroStyles.heroContentContainer}>
                    <div className={HeroStyles.heroLogo}>
                        <img src={Logo} width={150} alt='Logo' />
                    </div>

                    {showContent&&

                    <div className={` ${HeroStyles.heroText} text-center`}>
                        <div className={HeroStyles.organicText}>ORGANIC</div>
                        <div className={HeroStyles.vegetableText}>VEGETABLE & FRUITS</div>
                        <div className={HeroStyles.subtitleText}>
                            "Experience the Taste of Real Organic"
                        </div>
                    </div>
                    }
                </Container>
            </div>
        </div>
    );
};

export default Hero;