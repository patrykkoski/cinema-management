import React from "react";

const SlideScreen = props => {
  return (
    <div className="slide-wrapper">
      <img src={props.movie.imageurl} alt="movie" />
      <div className="slide-description">
        <h2>{props.movie.title}</h2>
        <p>{props.movie.description}</p>
        <h4>Director: {props.movie.director}</h4>
        <h4>Genre: {props.movie.category}</h4>
        <button className="main-slide-button">READ MORE</button>
      </div>
    </div>
  );
};

export default SlideScreen;
