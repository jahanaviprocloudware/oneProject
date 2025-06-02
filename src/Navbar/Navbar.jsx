import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
import {useLocation} from 'react-router-dom'
import { Button } from '@mui/material';

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
    const hideNavbarOnPaths = ['/'];
  
    const shouldShowNavbar = !hideNavbarOnPaths.includes(location.pathname);
  return (
    <>
    {shouldShowNavbar && (<nav className="navbar">
      <Link to="/home" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About</Link>
      <Link to="/contact" className="nav-link">Contact</Link>
      <Link to="/userInfo" className="nav-link">User Info</Link>
       <Button variant="contained" className='backgorundbtnColor' onClick={() =>{ sessionStorage.removeItem("authToken"); navigate("/")}}>
        Sign Out
      </Button>


    </nav>)}
    </>
  );
};