import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/page1">
        <button>Page 1</button>
      </Link>
      <Link to="/page2">
        <button>Page 2</button>
      </Link>
      <Link to="/page3">
        <button>Page 3</button>
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