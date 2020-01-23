import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./ScheduleHeader.scss";

const ScheduleHeader = props => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="schedule-header">
      <div className="schedule-header-content">
        <h2>Schedule</h2>
        <ul className="schedule-day-list">
          <li>Today</li>
          <li>Tomorrow</li>
          <li>Friday</li>
          <li>Saturday</li>
          <li>Sunday</li>
          <li>
            <DatePicker
              selected={startDate}
              onChange={date => setStartDate(date)}
            />
          </li>
        </ul>
        <p className="current-date">Wednesday 15.01.2020</p>
      </div>
    </div>
  );
};

export default ScheduleHeader;
