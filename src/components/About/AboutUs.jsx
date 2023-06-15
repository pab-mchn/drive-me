import React, { useState } from "react";
import "./AboutUs.css";

const AboutUs = () => {
  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <div className='container'>
      <h2 className='title'>Get to Know Us</h2>

      <div className='button-container'>
        <button
          className={`aboutUs-button ${selectedButton === 1 ? "selected" : ""}`}
          onClick={() => handleButtonClick(1)}>
          we are
        </button>

        <button
          className={`aboutUs-button ${selectedButton === 2 ? "selected" : ""}`}
          onClick={() => handleButtonClick(2)}>
          we do
        </button>

        <button
          className={`aboutUs-button ${selectedButton === 3 ? "selected" : ""}`}
          onClick={() => handleButtonClick(3)}>
          why us
        </button>
      </div>

      {selectedButton === 1 && (
        <div className='content'>
          <p>
            We are Drive Me, an innovative platform that connects drivers and passengers to facilitate safe and
            convenient ridesharing. We have a mission to transform the way people travel, providing an efficient and
            collaborative alternative.
          </p>
        </div>
      )}
      {selectedButton === 2 && (
        <div className='content'>
          <p>
            We offer a simple solution for drivers who regularly travel in their own vehicles. Our application allows
            drivers to register their trips and offer available seats to passengers who share the same route. This
            creates an opportunity to share expenses and reduce traffic congestion while also encouraging social
            interaction and community.
          </p>
        </div>
      )}
      {selectedButton === 3 && (
        <div className='content'>
          <p>
            Because we believe in collaborative and sustainable travel. Our platform offers affordable, safe, and
            verified ridesharing options. Join our community for convenient and eco-friendly commuting, enhanced by user
            ratings and feedback. Simplify your daily travels, connect with others, and contribute to a better future
            with Drive Me.
          </p>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
