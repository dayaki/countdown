import React, { useEffect, useState, useRef } from "react";
import firebase from "./firebase";
import moment from "moment";
import Timer from "./Timer";
import CurrentTime from "./components/CurrentTime";
import "./App.css";

interface Timer {
  minister?: string;
  session?: string;
  timer?: string;
}

function Display({ name }: { name: string }) {
  const [session, setSession] = useState("");
  const [minister, setMinister] = useState("");
  const [seconds, setSeconds] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [isStarted, setIsStarted] = useState(false);
  let intervalHandle = useRef<any>(null);
  let secondsRemaining: number;

  useEffect(() => {
    const todoRef = firebase.database().ref("countdown");
    todoRef.on("value", (snapshot) => {
      console.log("firebase changed");
      let data: Timer = {};
      snapshot.forEach(function (childSnapshot) {
        var childData = childSnapshot.val();
        data = childData;
      });

      if (data.timer) {
        clearInterval(intervalHandle.current);
        setIsStarted(true);
        setMinutes(data.timer || "");
        setSession(data.session || "");
        setMinister(data.minister || "");
      }
    });

    return () => clearInterval(intervalHandle.current);
  }, []);

  useEffect(() => {
    if (isStarted) {
      setIsStarted(false);
      startCountDown();
    }
  }, [minutes]);

  const startCountDown = () => {
    secondsRemaining = 0;
    intervalHandle.current = setInterval(tick, 1000);
    let time: any = minutes;
    secondsRemaining = time * 60;
  };

  const tick = () => {
    const min = Math.floor(secondsRemaining / 60);
    const sec = secondsRemaining - min * 60;
    console.log(min, sec);

    if (sec < 10) {
      setSeconds("0" + sec);
    } else {
      setSeconds(sec.toString());
    }

    if (min < 10) {
      setMinutes("0" + min);
    } else {
      setMinutes(min.toString());
    }

    if (min === 0 && sec === 0) {
      clearInterval(intervalHandle.current);
    }

    secondsRemaining--;
  };

  return (
    <div className="timer">
      {/* <div className="time">
        <h2>{moment().format("hh : mm A")}</h2>
      </div> */}
      <CurrentTime />
      <div className="session">
        {session && minister && (
          <h3>
            {session} Session - {name}-<span>{minister}</span>
          </h3>
        )}
      </div>
      <Timer minutes={minutes} seconds={seconds} />
      <div className="footnote">
        <p>
          Ecclesiastes 3:8: <span>...A time to start, and a time to stop.</span>
        </p>
      </div>
    </div>
  );
}

export default Display;
