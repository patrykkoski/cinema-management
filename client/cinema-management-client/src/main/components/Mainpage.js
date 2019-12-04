import React, { useState, useEffect } from "react";
import MainpagePresentational from "./MainpagePresentational";
import Spinner from "../../common/spinner/Spinner";
import axios from "axios";

const Mainpage = () => {
  const [initialMovies, setInitialMovies] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/public/lastMovies").then(response => {
      setInitialMovies(response.data);
    });
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    arrows: true,
    autoplaySpeed: 7500,
    className: "slides"
  };

  if (initialMovies.length > 0) {
    return (
      <MainpagePresentational
        initialMovies={initialMovies}
        slideSettings={settings}
      />
    );
  } else {
    return <Spinner />;
  }
};

export default Mainpage;
