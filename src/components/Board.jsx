import React from "react";
import Square from "./Square";
import calculateWinner from "./CalculateWinner";

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  const isDraw = squares.every(square => square !== null); 
  let status;

  if (winner) {
    status = `"${winner}" venceu essa partida!!!`;
  } else if (isDraw) {
    status = "Empate! Velha ganhou.";
  } else {
    status = `Próximo jogador: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 text-xl text-purple-200 font-bold">{status}</div>
      <div className="grid grid-cols-3 gap-0">
        {squares.map((square, index) => (
          <Square key={index} value={square} onSquareClick={() => handleClick(index)} />
        ))}
      </div>
    </div>
  );
}

export default Board;