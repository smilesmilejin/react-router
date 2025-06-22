// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Header.css'; // optional: for styling
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        TradeSphere
        <img src={logo} alt="My Logo" style={{ height: '100px', width: 'auto' }}/>
        {/* <span>MyApp</span> */}
      </div>
    
    </header>
  );
}

export default Header;