import React from "react";
import "./ScheduleMovie.scss";

const ScheduleMovie = props => {
  return (
    <React.Fragment>
      <div className="movie-row">
        <img
          src="https://d1w8cc2yygc27j.cloudfront.net/6381868401373148495/383165095153084018.jpg"
          width="162"
          height="240"
        />
        <div>
          <h3>TRANSFORMERS</h3>
          <p>SCI-FI | 120 min</p>
          <button className="schedule-ticket">15:00</button>
          <button className="schedule-ticket">17:00</button>
          <button className="schedule-ticket">19:00</button>
        </div>
      </div>
      <div className="movie-row">
        <img
          src="https://i0.wp.com/garretreza.pl/wp-content/uploads/2018/12/powrot-krola.jpg?fit=675%2C1000"
          width="162"
          height="240"
        />
        <div>
          <h3>TRANSFORMERS</h3>
          <p>SCI-FI | 120 min</p>
          <button className="schedule-ticket">11:00</button>
          <button className="schedule-ticket">12:20</button>
          <button className="schedule-ticket">13:30</button>
          <button className="schedule-ticket">17:00</button>
          <button className="schedule-ticket">18:00</button>
          <button className="schedule-ticket">19:25</button>
          <button className="schedule-ticket">20:10</button>
        </div>
      </div>
      <div className="movie-row">
        <img
          src="https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2017/09/mv5bmtmxntmwodm0nf5bml5banbnxkftztcwodaymtk2mw-_v1_sy1000_cr006751000_al_.jpg"
          width="162"
          height="240"
        />
        <div>
          <h3>TRANSFORMERS</h3>
          <p>SCI-FI | 120 min</p>
          <button className="schedule-ticket">12:50</button>
          <button className="schedule-ticket">17:00</button>
          <button className="schedule-ticket">19:00</button>
          <button className="schedule-ticket">19:30</button>
          <button className="schedule-ticket">20:00</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ScheduleMovie;
