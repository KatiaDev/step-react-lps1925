import React, { useEffect, useState } from "react";

const Time = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    let time = setInterval(() => {
      return setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(time);
    };
  }, []);

  return (
    <>
      <h1>{currentTime}</h1>
    </>
  );
};

export default Time;
