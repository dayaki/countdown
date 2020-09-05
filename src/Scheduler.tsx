import React, { useEffect, useState } from "react";
import firebase from "./firebase";
import "./App.css";

function Scheduler() {
  const [session, setSession] = useState("");
  const [minister, setMinister] = useState("");
  const [timer, setTimer] = useState("");

  const handleSubmit = () => {
    if (minister !== "" && timer !== "") {
      console.log(session, minister, timer);
      const todoRef = firebase.database().ref("countdown");
      const todo = {
        session,
        minister,
        timer,
        complete: false,
      };

      todoRef.push(todo);
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
        <h3>Current Session</h3>
        <p>Prayer</p>
        <div className="line"></div>
        <h4>Belinda</h4>
      </div>
    </div>
  );
}

export default Scheduler;
