import React from 'react';
import { Container } from 'react-bootstrap';
import Logo from '../assets/navlogo.svg';
import HeroStyles from '../css/Hero.module.css';

const Hero = () => {
    return (
        <div className={HeroStyles.mainSection}>
            <div className={HeroStyles.heroOverlay}>
                <Container fluid className={HeroStyles.heroContentContainer}>
                    <div className={HeroStyles.heroLogo}>
                        <img src={Logo} width={150} />
                    </div>
                    <div className={` ${HeroStyles.heroText} text-center`}>
                        <div className={HeroStyles.organicText}>ORGANIC</div>
                        <div className={HeroStyles.vegetableText}>VEGETABLE & FRUITS</div>
                        <div className={HeroStyles.subtitleText}>
                            "Experience the Taste of Real Organic"
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Hero;