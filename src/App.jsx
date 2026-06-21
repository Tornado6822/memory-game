import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Gameboard from "./components/Gameboard";
import SetupScreen from "./components/SetupScreen";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [difficulty, setDifficulty] = useState("easy");

  const [board, setBoard] = useState(Array(25).fill(false));
  const [level, setLevel] = useState(0);
  const [pattern, setPattern] = useState();

  const [showPattern, setShowPattern] = useState(false);
  const [inputEnabled, setInputEnabled] = useState(false);

  function generateLevel() {
    const numToSelect = level * 3 + 5;

    const sideLength = Math.ceil(Math.sqrt(numToSelect));
    const numTiles = sideLength ** 2;

    setBoard(Array(numTiles).fill(false));

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
        newBoard[index] = true;
      });
      return newBoard;
    });

    setPattern(selected);
  }

  function handleClick(index) {
    /*
    setBoard((prev) => {
      const newBoard = [...prev];
      newBoard[index] = !newBoard[index];
      return newBoard;
    });
    */
    setLevel(level + 1);
  }

  useEffect(() => {
    startRound();
  }, []);

  useEffect(() => {
    startRound();
  }, [level]);

  function startRound() {
    setInputEnabled(false);

    setTimeout(() => {
      setShowPattern(true);
      generateLevel();
    }, 1000);
  }

  return gameStarted ? (
    <Gameboard board={board} handleClick={handleClick} level={level} />
  ) : (
    <SetupScreen
      setGameStarted={setGameStarted}
      setDifficulty={setDifficulty}
      difficulty={difficulty}
    />
  );
}

export default App;
