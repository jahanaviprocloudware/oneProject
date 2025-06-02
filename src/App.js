import './App.css';
import { LoginPage } from './Loginpage/LoginPage';
import { About } from './About/About';
import { Home } from './Home/Home';
import { Navbar } from './Navbar/Navbar';
import React from 'react';
import { Contact } from './Contact/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserTable } from './Table/Table.tsx';
import { ProtectRouter } from './Hooks/ProtectRouter.jsx';

function App() {

  return (
    <div >
       <Router>
        <Navbar/>

      <Routes>
        <Route exact path="/" element={<LoginPage/>} />
        <Route element={<ProtectRouter />}>
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route exact path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/userInfo" element={<UserTable/>} />
        </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
