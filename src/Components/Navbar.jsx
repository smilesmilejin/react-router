// import { Link } from 'react-router-dom';
// import { Link } from "react-router";
// you can use React Router’s useLocation hook to get the current path and apply a style or class conditionally.
// import { useLocation } from 'react-router';

import { Link, useLocation } from 'react-router-dom';
import './navbar.css';


function Navbar() {
  const location = useLocation(); // gives you current pathname
  // helper to check if path is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav>
      <Link to="/">
        <button className={isActive('/') ? 'active-link' : ''}>Home</button>
      </Link>
      <Link to="/page1">
        <button className={isActive('/page1') ? 'active-link' : ''}>Page 1</button>
      </Link>
      <Link to="/page2">
        <button className={isActive('/page2') ? 'active-link' : ''}>Page 2</button>
      </Link>
      <Link to="/page3">
        <button className={isActive('/page3') ? 'active-link' : ''}>Page 3</button>
      </Link>
    </nav>
  );
}

export default Navbar; 

// Also Works
// import { NavLink } from 'react-router-dom';
// // import './Navbar.css'; // optional

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <NavLink to="/" className="nav-button">
//         {({ isActive }) => <button className={isActive ? 'active' : ''}>Home</button>}
//       </NavLink>
//       <NavLink to="/page1" className="nav-button">
//         {({ isActive }) => <button className={isActive ? 'active' : ''}>Page 1</button>}
//       </NavLink>
//       <NavLink to="/page2" className="nav-button">
//         {({ isActive }) => <button className={isActive ? 'active' : ''}>Page 2</button>}
//       </NavLink>
//       <NavLink to="/page3" className="nav-button">
//         {({ isActive }) => <button className={isActive ? 'active' : ''}>Page 3</button>}
//       </NavLink>
//     </nav>
//   );
// }

// export default Navbar;