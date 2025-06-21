// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import Page1 from './Pages/page1';
import Page2 from './Pages/page2';
import Page3 from './Pages/page3';

function App() {

  return (
    <Router>
      <Routes>
        {/* / is default route */}
        {/* path , element, render componenet */}
        {/* http://localhost:5173/ */}
        {/* http://localhost:5173/#/ */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Home />}>
        </Route> */}
        {/* http://localhost:5173/#/Page1 */}
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </Router>
  )
}

export default App
