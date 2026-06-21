import { useState } from "react";
import "./App.css";
import Gameboard from "./components/Gameboard";
import SetupScreen from "./components/SetupScreen";

function App() {
  const [gridSize, setGridSize] = useState(0);

  const [gameStarted, setGameStarted] = useState(false);
  const [difficulty, setDifficulty] = useState("easy");

  const [board, setBoard] = useState(Array(25).fill(false));
  const [level, setLevel] = useState(0);

  function generateLevel() {
    const numToSelect = level * 3 + 5;
    let selected = [];
    for (let i = 0; i < numToSelect; i++) {
      let selectedIndex = Math.floor(Math.random() * board.length);
      while (selected.includes(selectedIndex)) {
        selectedIndex = Math.floor(Math.random() * board.length);
      }
      selected.push(selectedIndex);
    }

    setBoard((prev) => {
      const newBoard = [...prev];
      selected.forEach((index) => {
        newBoard[index] = true;
      });
      return newBoard;
    });
  }

  function handleClick(index) {
    setBoard((prev) => {
      const newBoard = [...prev];
      newBoard[index] = !newBoard[index];
      return newBoard;
    });
    generateLevel();
  }

  return gameStarted ? (
    <Gameboard board={board} handleClick={handleClick} />
  ) : (
    <SetupScreen
      setGameStarted={setGameStarted}
      setDifficulty={setDifficulty}
      difficulty={difficulty}
    />
  );
}

export default App;
