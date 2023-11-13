// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import './navbar.css';

const Navbar = () => {
  // Initialize user state
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  useEffect(() => {
    // Update user state when component mounts
    setUser(JSON.parse(localStorage.getItem('user')));
  }, []);

  const handleLogout = () => {
    // Clear user state on logout
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  return (
    <header className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__title">
          Spoonacular
        </Link>

        <div className="navbar__right">
          {user ? (
            <div className="navbar__user">
              <p>Welcome, {user.name}</p>
              <Link to="/logout" onClick={handleLogout} className="navbar__item">
                Logout
              </Link>
            </div>
          ) : (
            <Link to="/login" className="navbar__item">
              Login
            </Link>
          )}

          <Link to="/favorite" className="navbar__item">
            <FaHeart className="navbar__heart-icon" />
            Favourite
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
