import React, { useState } from "react";
import Board from "./Board";
import DancaVitoria from "./DancaVitoria"; 
import Velha from "./Velha"; 
import calculateWinner from "./CalculateWinner"; 

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    if (nextMove === 0) {
      setHistory([Array(9).fill(null)]);
      setCurrentMove(0);
    } else {
      setCurrentMove(nextMove);
    }
  }

  const winner = calculateWinner(currentSquares);
  const isDraw = currentSquares.every(square => square !== null) && !winner;
  const moves = history.map((_, move) => {
    const description = move ? `Movimento #${move}` : 'Recomeçar jogo';
    return (
      <li key={move}>
        <button
          onClick={() => jumpTo(move)}
          className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-md mt-2 transition duration-300"
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="font-sans font-semibold bg-gray-900 text-purple-100 min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none" style={{
        background: 'radial-gradient(circle at center, #e0c6f4 0%, #d0a5f0 35%, #9c7df7 70%, #2b2235 100%)',
        filter: 'blur(80px) saturate(120%)',
      }} />
      
      <div className="flex gap-8 z-10">
        <div className="flex flex-col gap-8 p-6 bg-gray-800 rounded-2xl shadow-2xl border-2 border-purple-500 animate-[popIn_0.6s_ease-out]">
          <div className="game-board">
            <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
          </div>
        </div>

        <div className="p-6 bg-gray-800 rounded-2xl shadow-2xl border-2 border-purple-500 animate-[popIn_0.6s_ease-out]">
          <ol className="grid grid-cols-3 gap-4 list-none p-0">{moves}</ol>
        </div>
      </div>

      {/* se tiver um vencedor */}
      {winner && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4">
          <DancaVitoria />
          <DancaVitoria />
          <DancaVitoria />
        </div>
      )}

      {/* se der velha */}
      {isDraw && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4">
          <Velha />
          <Velha />
          <Velha />
        </div>
      )}
    </div>
  );
}