import { useEffect, useCallback, useRef } from "react";

const ANIMATION_DELAY = 2000;

export const useAnimation = (coords, setIsAnimate) => {
  const ballRef = useRef(null);
  const startTimeRef = useRef(null);
  const requestRef = useRef(null);

  const { startX, startY, endX, endY } = coords;

  const step = useCallback(
    (timeStamp) => {
      if (!startTimeRef.current) startTimeRef.current = timeStamp;
      const progress = timeStamp - startTimeRef.current;

      const rate = progress / ANIMATION_DELAY;

      ballRef.current.style.transform = `translate(${
        (endX - startX) * rate
      }px, ${(endY - startY) * rate}px)`;

      if (progress < ANIMATION_DELAY) {
        requestRef.current = requestAnimationFrame(step);
      } else {
        setIsAnimate(false);
      }
    },
    [startX, startY, endX, endY, setIsAnimate]
  );

  useEffect(() => {
    ballRef.current.style.top = `${startY}px`;
    ballRef.current.style.left = `${startX}px`;

    requestRef.current = requestAnimationFrame(step);

    return () => cancelAnimationFrame(requestRef.current);
  }, [startX, startY, step]);

  return ballRef;
};
