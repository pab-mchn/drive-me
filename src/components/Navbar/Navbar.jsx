import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='nav-container'>
      <nav className='navbar'>
        <h1 className='navbar-logo'>DRIVE ME.</h1>
        <div className={`menu-toggle ${isMenuOpen ? "is-active" : ""}`} id='mobile-menu' onClick={toggleMenu}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <li>
            <a href='#a' className='nav-links'>
              FOR DRIVERS
            </a>
          </li>
          <li>
            <a href='#aa' rel='noopener noreferrer' className='nav-links'>
              FOR PASSENGERS
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
