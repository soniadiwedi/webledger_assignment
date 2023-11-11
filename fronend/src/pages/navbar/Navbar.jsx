import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './navbar.css';
import { FaHeart } from 'react-icons/fa';
const Navbar = () => {
  return (
    <div>
      <header className="navbar">
        <Link to="/" style={{textDecoration:"none",color:"white"}} className="navbar__title navbar__item">
          Spoonacular
        </Link>
        <Link to="/login" style={{textDecoration:"none",color:"white"}} className="navbar__item">
          Login
        </Link>
        <Link to="/favorite" style={{ textDecoration: "none", color: "white" }} className="navbar__item">
          <FaHeart style={{ marginRight: '5px' }} />
          Favourite
        </Link>
      </header>
    </div>
  );
};

export default Navbar;
