import { Link } from 'react-router-dom';
import './Navbar.css'
import {useLocation} from 'react-router-dom'

export const Navbar = () => {
  const location = useLocation();
    const hideNavbarOnPaths = ['/'];
  
    const shouldShowNavbar = !hideNavbarOnPaths.includes(location.pathname);
  return (
    <>
    {shouldShowNavbar && (<nav className="navbar">
      <Link to="/home" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About</Link>
      <Link to="/contact" className="nav-link">Contact</Link>
    </nav>)}
    </>
  );
};