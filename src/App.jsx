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

  const [showPattern, setShowPattern] = useState(false);
  const [inputEnabled, setInputEnabled] = useState(false);

  function generateMatrix() {
    const numToSelect = level * 2 + 4;
    const sideLength = Math.ceil(Math.sqrt(numToSelect * 2));
    const numTiles = sideLength ** 2;

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

    console.log(selected);

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
        setBoard((prev) => {
          const newBoard = [...prev];
          newBoard[index] = 1;
          return newBoard;
        });
      } else {
        setBoard((prev) => {
          const newBoard = [...prev];
          newBoard[index] = 2;
          return newBoard;
        });
      }
    }
  }

  /*
  useEffect(() => {
    startRound();
  }, [gameStarted]);
*/

  function startRound() {
    setInputEnabled(false);
    generateMatrix();

    setTimeout(() => {
      setShowPattern(true);
      generateLevel();

      setTimeout(() => {
        generateMatrix();
        setShowPattern(false);
        setInputEnabled(true);
      }, 3000);
    }, 1500);
  }

  return gameStarted ? (
    <Gameboard
      board={board}
      handleClick={handleClick}
      level={level}
      showPattern={showPattern}
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
