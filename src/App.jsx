import { useState } from "react";
import "./App.css";
import Gameboard from "./components/Gameboard";
import SetupScreen from "./components/SetupScreen";

function App() {
  const [gridSize, setGridSize] = useState(0);

  const [gameStarted, setGameStarted] = useState(false);
  const [difficulty, setDifficulty] = useState("easy");

  const [board, setBoard] = useState(Array(16).fill(false));
  const [level, setLevel] = useState(0);

  return gameStarted ? (
    <Gameboard board={board} />
  ) : (
    <SetupScreen
      setGameStarted={setGameStarted}
      setDifficulty={setDifficulty}
      difficulty={difficulty}
    />
  );
}

export default App;
