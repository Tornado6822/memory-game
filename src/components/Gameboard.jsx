import { useState, useEffect } from "react";
import Grid from "./Grid";
import "./Gameboard.css";

function Gameboard({
  board,
  handleClick,
  level,
  showPattern,
  time,
  setTime,
  symbolsEnabled,
}) {
  useEffect(() => {
    if (!showPattern) {
      return;
    }

    const interval = setInterval(() => {
      setTime((prev) => prev - 10);
    }, 10);

    return () => clearInterval(interval);
  }, [showPattern]);

  return (
    <div className="container my-container mt-5 p-5 d-flex flex-column justify-content-center align-items-center">
      <div className="my-3 d-flex gap-5">
        <h1>Level {level}</h1>
        <h1>Time: {(time / 1000).toFixed(2)}</h1>
      </div>

      <Grid
        board={board}
        handleClick={handleClick}
        symbolsEnabled={symbolsEnabled}
      />
    </div>
  );
}

export default Gameboard;
