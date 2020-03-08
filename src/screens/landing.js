import React from 'react';
import Template from '../testing/test_assets';
import IButton from '../components/inputs/IButton';
import Navbar from '../components/navigation/navbar';
import './css/landing.css';

function Landing() {

    const test = () => {
        alert("clicked!");
    };

    return(
        <div className="landing-page">            
            <Navbar />
            <header>
                <img src={Template.img.landingAvatar} alt="landing"/>
                <div className="landing-maintext">
                    <h2>Meet real 2D girls!</h2>
                    <h3>Over 20.000 japanese kawaii girls are ready to meet you!</h3>
                    <IButton value="Get Started" onclick={test} />
                </div>
            </header>
        </div>
    );
}

export default Landing;