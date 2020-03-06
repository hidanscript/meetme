import React from 'react';
import Template from '../testing/test_assets';
import IButton from '../components/inputs/IButton';

function Landing() {

    const test = () => {
        alert("clicked!");
    };

    return(
        <div className="lading-page">            
            <h1>Hola</h1>
            <img src={Template.img.landingAvatar} alt="landing"/>
            <IButton value="Get Started" onclick={test} />
        </div>
    );
}

export default Landing;