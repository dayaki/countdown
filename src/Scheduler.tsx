import React, { useState } from "react";
import firebase from "./firebase";
import Timer from "./components/Timer";

function Scheduler({
  tsession,
  tminister,
  tminutes,
  tseconds,
  status,
}: {
  tsession: string;
  tminister: string;
  tminutes: string;
  tseconds: string;
  status: string;
}) {
  const [session, setSession] = useState("");
  const [minister, setMinister] = useState("");
  const [timer, setTimer] = useState("");

  const handleSubmit = () => {
    if (minister !== "" && timer !== "") {
      console.log(session, minister, timer);
      const timerRef = firebase
        .database()
        .ref("countdown")
        .child("-MGRDowwchtwXT7kMWxp");
      timerRef.update({
        minister: minister,
        session: session,
        timer: timer,
      });
    }
  };

  return (
    <div className="form">
      <div className="schedule">
        <h2>Initiate Countdown</h2>
        <p>
          <label htmlFor="type">Session Type</label>
          <select
            name="type"
            id="type"
            required
            defaultValue={session}
            onChange={(e) => setSession(e.target.value)}
          >
            <option value="" selected disabled>
              -- Select Session --
            </option>
            <option defaultValue="Prayer">Prayer</option>
            <option defaultValue="Praise">Praise</option>
            <option defaultValue="Worship">Worship</option>
            <option defaultValue="Tithe">Tithe</option>
            <option defaultValue="Sermon">Sermon</option>
            <option defaultValue="Closing">Closing Announcement</option>
          </select>
        </p>
        <p>
          <label htmlFor="handler">Session Handler</label>
          <input
            type="text"
            placeholder="Minister"
            value={minister}
            onChange={(e) => setMinister(e.target.value)}
            required
          />
        </p>
        <p>
          <label htmlFor="timer">Session Time</label>
          <input
            type="number"
            placeholder="Input your desired time"
            value={timer}
            onChange={(e) => setTimer(e.target.value)}
            required
          />
        </p>
        <p>
          <button onClick={handleSubmit}>Start Session</button>
        </p>
      </div>

      <div className="session">
        <h2>Current Session</h2>
        <h4>{tsession}</h4>
        <div className="line"></div>
        <h3>{tminister}</h3>
        <Timer minutes={tminutes} seconds={tseconds} statusChange={status} />
      </div>
    </div>
  );
}

export default Scheduler;
