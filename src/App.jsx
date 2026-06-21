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

  function handleClick(index) {
    setBoard((prev) => {
      const newBoard = [...prev];
      newBoard[index] = !newBoard[index];
      return newBoard;
    });
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
