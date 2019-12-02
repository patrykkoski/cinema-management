import React from "react";
import Slider from "react-slick";
import SlideScreen from "./SlideScreen/SlideScreen";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Mainpage.scss";

const MainpagePresentational = props => {
  let movies = props.initialMovies.map(movie => {
    return <SlideScreen movie={movie} key={movie.id} />;
  });
  return <Slider {...props.slideSettings}>{movies}</Slider>;
};

export default MainpagePresentational;
