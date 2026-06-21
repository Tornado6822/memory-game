import { useState, useEffect } from "react";
import Grid from "./Grid";
import "./Gameboard.css";
import { HiHeart } from "react-icons/hi";

function Gameboard({
  board,
  handleClick,
  level,
  showPattern,
  time,
  setTime,
  symbolsEnabled,
  mistakes,
  difficulty,
  score,
  blitzTime,
  setBlitzTime,
  inputEnabled,
}) {
  //showPattern clock
  useEffect(() => {
    if (!showPattern) {
      return;
    }

    const interval = setInterval(() => {
      setTime((prev) => prev - 10);
    }, 10);

    return () => clearInterval(interval);
  }, [showPattern]);

  //blitz timer
  useEffect(() => {
    if (!inputEnabled) {
      return;
    }

    const interval = setInterval(() => {
      setBlitzTime((prev) => prev - 10);
    }, 10);

    return () => clearInterval(interval);
  }, [inputEnabled]);

  return (
    <div className="container my-container mt-5 p-5 d-flex flex-column justify-content-center align-items-center">
      <div className="my-3 d-flex gap-5">
        <h1>Level {level}</h1>
        <h1>
          Time: <b>{(time / 1000).toFixed(2)}</b>
        </h1>
      </div>

      <Grid
        board={board}
        handleClick={handleClick}
        symbolsEnabled={symbolsEnabled}
      />
      {difficulty === "easy" ? null : (
        <div className="d-flex justify-content-center gap-2 mt-5">
          <HiHeart
            id="life"
            style={{
              color: `${mistakes <= 2 ? "var(--misc-2)" : "var(--bg-secondary)"}`,
            }}
          />
          <HiHeart
            id="life"
            style={{
              color: `${mistakes <= 1 ? "var(--misc-2)" : "var(--bg-secondary)"}`,
            }}
          />
          <HiHeart
            id="life"
            style={{
              color: `${mistakes <= 0 ? "var(--misc-2)" : "var(--bg-secondary)"}`,
            }}
          />
        </div>
      )}

      {difficulty === "hard" ? (
        <div className="blitz-timer my-5">
          <div
            className="blitz-timer-bar"
            style={{ width: `${(blitzTime / 3000) * 100}%` }}
          ></div>
        </div>
      ) : (
        ""
      )}

      <h1 className="my-3">
        Score: <b>{score}</b>
      </h1>
    </div>
  );
}

export default Gameboard;
