import "./Grid.css";

function Grid({ board, handleClick }) {
  const gridSize = Math.sqrt(board.length);

  return (
    <div id="grid" style={{ gridTemplateColumns: `Repeat(${gridSize},100px)` }}>
      {board.map((tile, index) => (
        <button
          key={index}
          className="tile"
          onClick={() => handleClick(index)}
          style={{
            backgroundColor: `${tile ? "var(--primary)" : "var(--misc-1)"}`,
          }}
        >
          {/*}{tile ? "✓" : ""}{*/}
        </button>
      ))}
    </div>
  );
}

export default Grid;
