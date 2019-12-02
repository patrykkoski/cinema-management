import React from "react";

const SlideScreen = props => {
  return (
    <div className="slide-wrapper">
      <img src={props.imageUrl} />
      <div className="slide-description">
        <h2>Transformers</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu
          metus fermentum, tempus felis id, laoreet felis.
        </p>
        <h4>Director: Patryk Koski</h4>
        <h4>Genre: Comedy</h4>
        <button className="main-slide-button">READ MORE</button>
      </div>
    </div>
  );
};

export default SlideScreen;
