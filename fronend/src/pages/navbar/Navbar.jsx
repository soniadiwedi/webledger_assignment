// Navbar.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
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
              <p>
                Welcome, {user.name} 
               
                <Link to="/favorite" className="navbar__item">
                  Favourites
                </Link>
                <Link
                  to="/logout"
                  onClick={handleLogout}
                  className="navbar__item"
                >
                  Logout
                </Link>{" "}
              </p>
            </div>
          ) : (
            <Link to="/login" className="navbar__item">
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
