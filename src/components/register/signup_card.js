import React from 'react';
import './css/signup_card.css';

function SignUpCard() {
    return(
        <div className="signup-card">
            <form>
                <div className="avatar-icon">
                    <input type="file" />
                </div>
                <label>Username</label>
                <input type="text" />
                <label>Name</label>
                <input type="text" />
                <label>Lastname</label>
                <input type="text" />
                <label>Email</label>
                <input type="email" />
                <label>Password</label>
                <input type="password" />
                <input type="submit" value="CONTINUE" />
            </form>
        </div>
    );
}

export default SignUpCard;