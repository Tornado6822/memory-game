import "./Grid.css";

function Grid({ board }) {
  console.log("goomba");
  console.log(board);

  return (
    <div id="grid">
      {board.map((tile, index) => (
        <button key={index} className="tile" onClick={() => handleClick(index)}>
          {tile ? "✓" : ""}
        </button>
      ))}
    </div>
  );
}

export default Grid;
