// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import './Header.css'; // optional: for styling
// import logo from '../assets/logo.png';

// function Header() {
//   return (
//     <header className="header">
//       <div className="logo">
//         TradeSphere
//         <img src={logo} alt="My Logo" style={{ height: '100px', width: 'auto' }}/>
//         {/* <span>MyApp</span> */}
//       </div>
    
//     </header>
//   );
// }

// export default Header;

// import React from 'react';
// import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../assets/Logo.png';
import SearchIcon from '../assets/SearchIcon.png';

function Header() {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <img src={Logo} alt="My Logo" />
        <h1>TradeSphere</h1>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search Items" />
        <button className="search-button" aria-label="Search">
          <img src={SearchIcon} alt="Search" />
        </button>
      </div>

      {/* Auth Buttons */}
      <div className="auth-buttons">
        <button>Log In/Sign Up</button>
      </div>
    </header>
  );
}

export default Header;
