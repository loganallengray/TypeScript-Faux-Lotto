import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <div id="navbar">
            <Link to="/home" className="navbar-item">Home</Link>
            <Link to="/about" className="navbar-item">About</Link>
            <Link to="/register" className="navbar-item">Sign Up</Link>
            <Link to="/login" className="navbar-item">Log In</Link>
        </div>
    )
}

export default Navbar;