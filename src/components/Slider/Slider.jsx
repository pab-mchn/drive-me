import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

const Slide = ({ image, title }) => (
  <div className='slide'>
    <img src={image} alt={title} />
    <h3>{title}</h3>
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
  };

  const slides = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/12194164/pexels-photo-12194164.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Slide 1",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/620335/pexels-photo-620335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Slide 2",
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/2061417/pexels-photo-2061417.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Slide 3",
    },
  ];

  return (
    <div className='slider-wrapper'>
      <Slider {...settings}>
        {slides.map((slide) => (
          <Slide key={slide.id} image={slide.image} title={slide.title} />
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
