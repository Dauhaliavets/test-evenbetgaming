import React, { useState, useEffect, useRef } from "react";

import "./styles.css";

export const Button = ({ handleStart }) => {
  const [seconds, setSeconds] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (seconds > 0) {
      ref.current = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    if (seconds === 0) {
      clearInterval(ref.current);
    }

    return () => clearInterval(ref.current);
  }, [seconds]);

  const handleClick = () => {
    handleStart();
    setSeconds(5);
  };

  return (
    <button
      className="button"
      onClick={handleClick}
      disabled={Boolean(seconds)}
    >
      {seconds ? seconds : "Start"}
    </button>
  );
};
