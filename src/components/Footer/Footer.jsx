import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className='footer' style={{ background: "#24a068" }}>
      <h2 className='title'>Be part of our Comunity</h2>
      <button className='register-button'>Register</button>
      <div className='footer-sections'>
        <span className='section'>Contact Us</span>
        <span className='separator'>|</span>
        <span className='section'>Get the App</span>
      </div>
      <p className='rights'>All rights reserved DriveMe</p>
    </footer>
  );
};

export default Footer;
