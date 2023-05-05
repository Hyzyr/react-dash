import React, { useEffect, useState } from "react";

const Counter = ({
  numberN,
  increment = false,
  interval = 1000,
  stopN = 0,
  onEnd,
}) => {
  const [n, setN] = useState(numberN);

  useEffect(() => {
    let newN = increment ? n + 1 : n - 1;
    if ((increment && newN > stopN) || (!increment && newN < stopN)) return;

    const timout = setTimeout(() => {
      setN(newN);
      if (newN === stopN && onEnd) onEnd(newN);
    }, interval);
    return () => clearTimeout(timout);
  }, [n]);

  return <>{n}</>;
};

export default Counter;
