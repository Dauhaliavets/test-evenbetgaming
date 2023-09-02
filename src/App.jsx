import { useCallback, useEffect, useRef, useState } from "react";

import { Ball } from "./components/Ball/Ball";
import { Box } from "./components/Box/Box";
import { Button } from "./components/Button/Button";

import "./styles.css";

const defaultCoords = {
  startX: 0,
  startY: 0,
  endX: 0,
  endY: 0,
};

const ballSize = 50;

export const App = () => {
  const [isAnimate, setIsAnimate] = useState(false);
  const [bollCoords, setBollCoords] = useState(defaultCoords);

  const firstBoxRef = useRef(null);
  const secondBoxRef = useRef(null);

  const getNewCoords = () => {
    const {
      top: firstBoxTop,
      left: firstBoxLeft,
      height: firstBoxHeight,
      width: firstBoxWidth,
    } = firstBoxRef.current.getBoundingClientRect();

    const {
      top: secondBoxTop,
      left: secondBoxLeft,
      height: secondBoxHeight,
      width: secondBoxWidth,
    } = secondBoxRef.current.getBoundingClientRect();

    const startX = firstBoxLeft + ballSize / 2 - firstBoxWidth;
    const startY = firstBoxTop + ballSize / 2 - firstBoxHeight;
    const endX = secondBoxLeft + ballSize / 2 - secondBoxWidth;
    const endY = secondBoxTop + ballSize / 2 - secondBoxHeight;

    const newCoords = {
      startX,
      startY,
      endX,
      endY,
    };

    return newCoords;
  };

  const handleStart = () => {
    setIsAnimate(true);
    updateCoords();
  };

  const updateCoords = useCallback(() => {
    const newCoords = getNewCoords();
    setBollCoords(newCoords);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateCoords);
    return () => {
      window.removeEventListener("resize", updateCoords);
    };
  }, [updateCoords]);

  return (
    <div className="app">
      <div className="boxes-container">
        <Box ref={firstBoxRef} className="box box1">
          Box 1
        </Box>
        <Box ref={secondBoxRef} className="box box2">
          Box 2
        </Box>
        {isAnimate && <Ball coords={bollCoords} setIsAnimate={setIsAnimate} />}
      </div>
      <Button handleStart={handleStart} />
    </div>
  );
};
