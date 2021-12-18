import React from "react";
import useCommanTimer from "./useCommanTimer";

const TimerDec = () => {
  const counter = useCommanTimer(false);
  return (
    <>
      <h2>Decreament Timer : {counter}</h2>
    </>
  );
};
export default TimerDec;
