import Grid from "./Grid";
import "./Gameboard.css";

function Gameboard({ board, handleClick }) {
  return (
    <div className="container my-container mt-5 p-5 d-flex justify-content-center">
      <Grid board={board} handleClick={handleClick} />
    </div>
  );
}

export default Gameboard;
