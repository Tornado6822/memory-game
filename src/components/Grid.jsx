import "./Grid.css";

function Grid({ board, handleClick, symbolsEnabled }) {
  const gridSize = Math.sqrt(board.length);

  return (
    <div id="grid" style={{ gridTemplateColumns: `Repeat(${gridSize},100px)` }}>
      {board.map((tile, index) => (
        <button
          key={index}
          className="tile"
          onClick={() => handleClick(index)}
          style={{
            backgroundColor: `${tile === 1 ? "var(--primary)" : tile === 0 ? "var(--misc-1)" : "var(--bg-secondary)"}`,
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
