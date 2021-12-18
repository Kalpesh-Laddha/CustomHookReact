import React from "react";
import useCommanTimer from "./useCommanTimer";

const TimerInc = () => {
  const counter = useCommanTimer(true);

  return (
    <div>
      <h2>Increament Timer : {counter}</h2>
    </div>
  );
};
export default TimerInc;
