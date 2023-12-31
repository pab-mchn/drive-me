import React, { useContext } from "react";
import Slider from "react-slick";
import { Context } from "../context/Context";
import PopUp from "../PopUp/PopUp"; // Import the pop-up component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

const SliderComponent = () => {
  const { openPopup } = useContext(Context);
  const handleOpenPopup = () => {
    openPopup(); // Llama a la función openPopup desde el contexto para mostrar el pop-up
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // autoplay
    autoplaySpeed: 2000, // Intervalo de tiempo entre cada slide (en milisegundos)
    appendDots: (dots) => (
      <div style={{ position: "absolute", bottom: 10, width: "100%", textAlign: "center" }}>
        <ul style={{ margin: "0", padding: "0" }}>{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#fff", margin: "0 5px" }}></div>
    ),
  };

  const slides = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/620335/pexels-photo-620335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/2705755/pexels-photo-2705755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/620332/pexels-photo-620332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  const Slide = ({ image, title }) => (
    <div className='slide'>
      <img src={image} alt={title} />
      <div className='slide-content'>
        <h1>Your Trip, Your Adventure</h1>
        <p>Let's drive together</p>
        <button className='download-button' onClick={handleOpenPopup}>
          Get the App
        </button>
      </div>
    </div>
  );

  return (
    <div className='slider-wrapper'>
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <Slide image={slide.image} />
          </div>
        ))}
      </Slider>
      {openPopup && <PopUp />}
    </div>
  );
};

export default SliderComponent;
