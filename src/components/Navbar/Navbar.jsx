import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h3 className='navbar-left'>Drive Me!</h3>
      <div className='navbar-right'>
        <button className='navbar-button'>Login</button>
        <button className='navbar-button'>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
