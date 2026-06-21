import { useState, useEffect } from "react";
import "./App.css";
import Gameboard from "./components/Gameboard";
import SetupScreen from "./components/SetupScreen";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [difficulty, setDifficulty] = useState("easy");

  const [board, setBoard] = useState(Array(25).fill(0));
  const [level, setLevel] = useState(0);
  const [pattern, setPattern] = useState();
  const [time, setTime] = useState(2000);

  const [showPattern, setShowPattern] = useState(false);
  const [inputEnabled, setInputEnabled] = useState(false);

  const [mistakes, setMistakes] = useState(0);
  const [correctTiles, setCorrectTiles] = useState(0);

  function generateMatrix() {
    const numToSelect = level * 2 + 4;
    const sideLength = Math.ceil(Math.sqrt(numToSelect * 2));
    const numTiles = sideLength ** 2;

    console.log(
      `Generating matrix with sidelength ${sideLength} and numTiles ${numTiles} for level ${level}`,
    );

    setBoard(Array(numTiles).fill(0));
  }

  function generateLevel() {
    const numToSelect = level * 2 + 4;
    const sideLength = Math.ceil(Math.sqrt(numToSelect * 2));
    const numTiles = sideLength ** 2;

    setBoard(Array(numTiles).fill(0));

    let selected = [];
    for (let i = 0; i < numToSelect; i++) {
      let selectedIndex = Math.floor(Math.random() * numTiles);
      while (selected.includes(selectedIndex)) {
        selectedIndex = Math.floor(Math.random() * numTiles);
      }
      selected.push(selectedIndex);
    }

    setBoard((prev) => {
      const newBoard = [...prev];
      selected.forEach((index) => {
        newBoard[index] = 1;
      });
      return newBoard;
    });

    setPattern(selected);
  }

  function handleClick(index) {
    if (inputEnabled) {
      if (pattern.includes(index)) {
        setCorrectTiles((prev) => prev + 1);

        setBoard((prev) => {
          const newBoard = [...prev];
          newBoard[index] = 1;
          return newBoard;
        });
      } else {
        setMistakes((prev) => prev + 1);

        setBoard((prev) => {
          const newBoard = [...prev];
          newBoard[index] = 2;
          return newBoard;
        });
      }
    }
  }

  function startRound() {
    setTime(2000);
    setMistakes(0);
    setCorrectTiles(0);

    setInputEnabled(false);
    generateMatrix();

    setTimeout(() => {
      setShowPattern(true);
      generateLevel();

      setTimeout(() => {
        generateMatrix();
        setShowPattern(false);
        setInputEnabled(true);
      }, 2000);
    }, 600);
  }

  //Track Mistakes
  useEffect(() => {
    if (mistakes > 2) {
      endGame();
    }
  }, [mistakes]);

  //Track Correct
  useEffect(() => {
    if (!gameStarted) {
      return;
    }

    if (correctTiles == pattern.length) {
      setTimeout(() => {
        winGame();
      }, [250]);
    }
  }, [correctTiles]);

  //Track level
  useEffect(() => {
    if (!inputEnabled) {
      return;
    }
    startRound();
  }, [level]);

  function endGame() {
    setInputEnabled(false);
    console.log("You lose!");
  }

  function winGame() {
    console.log("You win!");

    if (level < 10) {
      setLevel((prev) => prev + 1);
    } else {
      console.log("No more levels. You've won the game!");
    }
  }

  return gameStarted ? (
    <Gameboard
      board={board}
      handleClick={handleClick}
      level={level}
      showPattern={showPattern}
      time={time}
      setTime={setTime}
    />
  ) : (
    <SetupScreen
      setGameStarted={setGameStarted}
      setDifficulty={setDifficulty}
      difficulty={difficulty}
      startRound={startRound}
    />
  );
}

export default App;
