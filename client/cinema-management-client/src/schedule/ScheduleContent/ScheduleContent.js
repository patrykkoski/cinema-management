import React from "react";
import "./ScheduleContent.scss";
import ScheduleMovie from "../ScheduleMovie/ScheduleMovie";

const ScheduleContent = props => {
  return (
    <section className="schedule-content-wrapper">
      <div className="schedule-shadow"></div>
      <ScheduleMovie />
    </section>
  );
};

export default ScheduleContent;
