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
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserLoginStatusContext } from '../App';
import UserLogo from '../assets/UserLogo.png';
import { useNavigate } from 'react-router-dom';

function Header() {

  const { userLoginStatus, setUserLoginStatus } = useContext(UserLoginStatusContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUserLoginStatus(false);
    // Optional: clear user data from localStorage or cookies if used
    navigate('/'); 
  };

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
      {/* <div className="auth-buttons">
        <button>Log In/Sign Up</button>
      </div> */}
      {/* <div className="auth-buttons">
        <Link to="/login">
            <button className="login">Log In</button>
        </Link>
        <Link to="/signup">
            <button className="signup">Sign Up</button>
        </Link>
      </div> */}

    {/* Auth Buttons */}
      <div className="auth-buttons">
        {userLoginStatus ? (
        //   <div>
          <div className="user-logged-in">
            {/* Add a link to UserLogo */}
            <Link to="/profile" className="user-logo-wrapper">
              <img src={UserLogo} alt="UserLogo" />
              <span className="tooltip-text">Click to view profile</span>
            </Link>
            {/* <img src={UserLogo} alt="UserLogo" /> */}
            {/* Show user info or logout button when logged in */}
            <button className="logout" onClick={handleLogout}>Log Out</button>
            {/* <button className="logout">Log Out</button> */}
          </div>
        ) : (
          <>
            <Link to="/login">
              <button className="login">Log In</button>
            </Link>
            <Link to="/signup">
              <button className="signup">Sign Up</button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;


