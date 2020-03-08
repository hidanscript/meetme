import React from 'react';
import SignUpCard from '../components/register/signup_card';
import './css/register.css';

function Register() {
    return(
        <div className="register-main">
            <SignUpCard />
        </div>
    );
}

export default Register;