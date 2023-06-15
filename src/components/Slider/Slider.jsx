import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

const Slide = ({ image, title }) => (
  <div className='slide'>
    <img src={image} alt={title} />
    <div className='slide-content'>
      <h1>Your Trip, Your Adventure</h1>
      <button className='download-button'>Get the App</button>
    </div>
  </div>
);

const SliderComponent = () => {
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
      image: "https://images.pexels.com/photos/12194164/pexels-photo-12194164.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/620335/pexels-photo-620335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/2061417/pexels-photo-2061417.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className='slider-wrapper'>
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <Slide image={slide.image} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
