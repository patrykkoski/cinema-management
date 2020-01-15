import React, { useState, useEffect } from "react";
import MainpagePresentational from "./MainpagePresentational";
import Spinner from "../../common/spinner/Spinner";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import axios from "axios";

const Mainpage = props => {
  const [initialMovies, setInitialMovies] = useState([]);
  useEffect(() => {
    props.onStartLoading();
    axios.get("http://localhost:8080/public/lastMovies").then(response => {
      setInitialMovies(response.data);
      props.onStopLoading();
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

const mapDispatchToProps = dispatch => {
  return {
    onStartLoading: () => dispatch(actions.startLoading()),
    onStopLoading: () => dispatch(actions.stopLoading())
  };
};

export default connect(null, mapDispatchToProps)(Mainpage);
