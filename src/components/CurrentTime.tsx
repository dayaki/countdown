import React, { useEffect, useState, useRef } from "react";
import moment from "moment";

function CurrentTime() {
  const [currentTime, setCurrentTime] = useState(moment());

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(moment());
    }, 61000);
  });

  return (
    <div className="time">
      <h2>{moment(currentTime).format("hh : mm A")}</h2>
    </div>
  );
}

export default CurrentTime;
