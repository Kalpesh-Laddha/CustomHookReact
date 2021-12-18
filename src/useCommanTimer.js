import React, { useEffect, useState } from "react";

const useCommanTimer = (forward) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setInterval(() => {
      if (forward) {
        setCounter((previouseState) => previouseState + 1);
      } else {
        setCounter((previouseState) => previouseState - 1);
      }
    }, 2000);
  }, [forward]);

  return counter;
};

export default useCommanTimer;
