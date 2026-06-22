import "./GameOver.css";

function GameOver({ level, score, resetGame }) {
  return (
    <div className="container my-container mt-5 p-5 d-flex flex-column justify-content-center align-items-center gap-4">
      <h1>GAME OVER!</h1>
      <h2>
        You reached <b>level {level}</b>
      </h2>
      <h2>
        Score: <b>{score}</b>
      </h2>
      <button
        className="btn btn-restart my-5"
        onClick={() => {
          resetGame();
        }}
      >
        Restart Game
      </button>
    </div>
  );
}

export default GameOver;
