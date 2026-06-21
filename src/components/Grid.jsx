import "./Grid.css";

function Grid({ board, handleClick, symbolsEnabled }) {
  const gridSize = Math.sqrt(board.length);

  return (
    <div
      id="grid"
      style={{
        gridTemplateColumns: `Repeat(${gridSize},${board.length === 25 ? "75px" : "100px"})`,
      }}
    >
      {board.map((tile, index) => (
        <button
          key={index}
          className="tile"
          onClick={() => handleClick(index)}
          style={{
            backgroundColor:
              tile === 1
                ? "var(--primary)"
                : tile === 0
                  ? "var(--misc-1)"
                  : "var(--bg-secondary)",

            width: board.length === 25 ? "75px" : undefined,
            height: board.length === 25 ? "75px" : undefined,
          }}
        >
          <div className="symbols">
            {symbolsEnabled ? (tile === 1 ? "✓" : tile === 2 ? "✗" : "") : ""}
          </div>
        </button>
      ))}
    </div>
  );
}

export default Grid;
