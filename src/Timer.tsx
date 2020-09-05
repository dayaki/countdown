import React from "react";
import moment from "moment";
import "./App.css";

function Timer({ minutes, seconds }: { minutes: string; seconds: string }) {
  return (
    <div className="countdown">
      <h1>
        {minutes} <span>:</span> {seconds}
      </h1>
    </div>
  );
}

export default Timer;
