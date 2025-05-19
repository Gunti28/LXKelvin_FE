import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Logo from '../assets/navlogo.svg';
import '../css/Hero.css';

const Hero = () => {
    const [showContent,setShowCotent] = useState(true);
    return (
        <div className="main-section">
            <div className="hero-overlay">
                <Container fluid className="hero-content-container">
                    <div className="hero-logo ">
                        <img src={Logo} width={150} />
                    </div>
                    {showContent&&
                    <div className="hero-text text-center">
                        <div className="organic-text">ORGANIC</div>
                        <div className="vegetable-text">VEGETABLE & FRUITS</div>
                        <div className="subtitle-text">
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