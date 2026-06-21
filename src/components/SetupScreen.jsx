import "./SetupScreen.css";

function SetupScreen({
  setGameStarted,
  setDifficulty,
  difficulty,
  startRound,
  setSymbolsEnabled,
}) {
  return (
    <div className="setup-screen">
      <div className="container my-container d-flex flex-column align-items-center py-5 my-5 gap-2">
        <h1>Welcome to Memory Matrix!</h1>
        <h4>Memorize the tiles. Recreate the pattern.</h4>

        <div>
          <div className="btn-group">
            <button
              className={`btn btn-difficulty ${difficulty === "easy" ? "btn-selected" : ""}`}
              onClick={() => setDifficulty("easy")}
            >
              Easy
            </button>
            <button
              className={`btn btn-difficulty ${difficulty === "medium" ? "btn-selected" : ""}`}
              onClick={() => setDifficulty("medium")}
            >
              Medium
            </button>
            <button
              className={`btn btn-difficulty ${difficulty === "hard" ? "btn-selected" : ""}`}
              onClick={() => setDifficulty("hard")}
            >
              Hard
            </button>
          </div>
        </div>

        <div className="d-flex flex-column justify-content-center my-3">
          <h6>Modifiers</h6>
          <div className="d-flex justify-content-center">
            <ul>
              {difficulty === "hard" ? (
                <>
                  <li>Blitz Timer</li>
                  <li>Limited Lives</li>
                  <li>Score 2x</li>
                </>
              ) : difficulty === "medium" ? (
                <>
                  <li>Limited Lives icon</li>
                  <li>Score 1.5x</li>
                </>
              ) : (
                <>
                  <li>No modifiers</li>
                </>
              )}
            </ul>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              onClick={() => setSymbolsEnabled((prev) => !prev)}
              id="symbolsCheck"
            />
            <label className="form-check-label" htmlFor="symbolsCheck"></label>
            Enable symbols
          </div>
        </div>

        <p>Can you beat level 10?</p>
        <div className="d-flex justify-content-center">
          <button
            onClick={() => {
              setGameStarted(true);
              startRound();
            }}
            className="btn btn-start"
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
}

export default SetupScreen;
