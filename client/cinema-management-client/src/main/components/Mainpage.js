import React from "react";
import Slider from "react-slick";
import SlideScreen from "./SlideScreen/SlideScreen";
import image1 from "../../assets/1.jpg";
import image2 from "../../assets/2.jpg";
import image3 from "../../assets/3.jpg";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Mainpage.scss";

const Mainpage = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    arrows: true,
    autoplaySpeed: 5000,
    className: "slides"
  };

  return (
    <div className="mainpage">
      <Slider {...settings}>
        <SlideScreen imageUrl="https://images8.alphacoders.com/674/thumb-1920-674115.jpg" />
        <SlideScreen imageUrl="https://images6.alphacoders.com/417/417263.jpg" />
        <SlideScreen imageUrl="https://images4.alphacoders.com/118/118904.jpg" />
      </Slider>
    </div>
  );
};

export default Mainpage;
