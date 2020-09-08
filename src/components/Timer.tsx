import React from "react";

function Timer({
  minutes,
  seconds,
  statusChange,
}: {
  minutes: string;
  seconds: string;
  statusChange: string;
}) {
  return (
    <div className={`countdown ${statusChange}`}>
      <h1>
        {minutes} <span>:</span> {seconds}
      </h1>
    </div>
  );
}

export default Timer;
