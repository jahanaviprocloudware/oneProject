import './App.css';
import { LoginPage } from './Loginpage/LoginPage';
import { About } from './About/About';
import { Home } from './Home/Home';
import { Navbar } from './Navbar/Navbar';
import React from 'react';
import { Contact } from './Contact/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  // const location = useLocation();
  // const hideNavbarOnPaths = ['/'];

  // const shouldShowNavbar = !hideNavbarOnPaths.includes(location.pathname);

  return (
    <div >
       <Router>
        <Navbar/>

      <Routes>
        <Route exact path="/" element={<LoginPage/>} />
        <Route exact path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
