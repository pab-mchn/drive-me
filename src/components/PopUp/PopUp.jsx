import React, { useState } from "react";
import "./PopUp.css";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className='popup-container'>
          <div className='popup-content'>
            <h3>In the moment we are working on creating our app!</h3>
            <p>In the meantime, you can register and we will keep you updated.</p>
            <button className='close-button' onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
