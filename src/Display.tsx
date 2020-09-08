import React from "react";
import Timer from "./components/Timer";
import CurrentTime from "./components/CurrentTime";

function Display({
  session,
  minister,
  minutes,
  seconds,
  status,
}: {
  session: string;
  minister: string;
  minutes: string;
  seconds: string;
  status: string;
}) {
  return (
    <div className="timer">
      <CurrentTime />
      <div className="session">
        {session && minister && (
          <h3>
            {session} Session - <span>{minister}</span>
          </h3>
        )}
      </div>
      <Timer minutes={minutes} seconds={seconds} statusChange={status} />
    </div>
  );
}

export default Display;
