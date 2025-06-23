import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import Page1 from './Pages/page1';
import Page2 from './Pages/page2';
import Page3 from './Pages/page3';
import Layout from './Layout.jsx';
import { createContext } from 'react';
import Login from './Pages/login';
import Signup from './Pages/signup';
import Profile from './Pages/profile';

export const ThemeContext = createContext('light');
export const UserLoginStatusContext = createContext();


function App() {
  const [theme, setTheme] = useState('light');

  const [userLoginStatus, setUserLoginStatus] = useState(false);

  return (
    // <ThemeContext value={theme}>
    <ThemeContext value={{ theme, setTheme }}>
      <UserLoginStatusContext value={{userLoginStatus, setUserLoginStatus}}>
        <Router>
          {/* Make all other pages Layout child */}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
            <Route element={<Layout />}>
              <Route path="/profile" element={<Profile />} />
              {/* <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} /> */}
              {/* / is default route */}
              {/* path , element, render componenet */}
              {/* http://localhost:5173/ */}
              {/* http://localhost:5173/#/ */}
              <Route path="/" element={<Home />} />
              {/* http://localhost:5173/#/Page1 */}
              <Route path="/page1" element={<Page1 />} />
              <Route path="/page2" element={<Page2 />} />
              <Route path="/page3" element={<Page3 />} />
            </Route>
          </Routes>
        </Router>
      </UserLoginStatusContext>
    </ThemeContext>
  )
}

export default App
