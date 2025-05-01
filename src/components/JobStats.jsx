import React from "react";
import "../styles/jobstats.css";

export default function JobStats({ jobsites }) {
  const onRoad = jobsites.filter((j) => j.status === "In Progress").length;
  const completed = jobsites.filter((j) => j.status === "Completed").length;
  const onHold = jobsites.filter((j) => j.status === "On Hold").length;

  return (
    <div className="jobstats-container">
      <div className="jobstats-card yellow">
        <span>{onRoad} On Road</span>
      </div>
      <div className="jobstats-card green">
        <span>{completed} Completed</span>
      </div>
      <div className="jobstats-card red">
        <span>{onHold} On Hold</span>
      </div>
    </div>
  );
}
