import { useAnimation } from "../../hooks/useAnimation";

import "./styles.css";

export const Ball = ({ coords, setIsAnimate }) => {
  const ballRef = useAnimation(coords, setIsAnimate);

  return <div className="circle" ref={ballRef}></div>;
};
