import Grid from "./Grid";
import "./Gameboard.css";

function Gameboard({ board, handleClick, level }) {
  return (
    <div className="container my-container mt-5 p-5 d-flex flex-column justify-content-center align-items-center">
      <div className="my-3">
        <h1>Level {level}</h1>
      </div>

      <Grid board={board} handleClick={handleClick} />
    </div>
  );
}

export default Gameboard;
