import React from 'react';
import './css/navbar.css';
import { Link } from 'react-router-dom';

function navbar() {
  return(
      <div className="navbar-main">
        <h1>Meetme</h1>
        <ul>
          <li><Link className="link" to="/signup"><p>SIGN UP</p></Link></li>
          <li><Link className="link" to="/login"><p>LOG IN</p></Link></li>
        </ul>
      </div>
  );
}

export default navbar;
