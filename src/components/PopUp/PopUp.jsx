import React, { useContext } from "react";
import { Context } from "../context/Context";
import "./Popup.css";

const PopUp = () => {
  const { isOpen, closePopup } = useContext(Context);

  return (
    <>
      {isOpen && (
        <div className='modal-overlay'>
          <div className='popup-container'>
            <h3>get the app</h3>
            <p>
              we are working in the app, if you want you can pre register over here and we will let you know when the
              app is ready TRABAJAR MEJOR EN EL TEXTO Y LOS ESTILOS!
            </p>
            <button className='close-button' onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;
