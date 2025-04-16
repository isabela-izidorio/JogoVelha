import React from "react";

function Square({ value, onSquareClick }) {
  return (
    <button
      onClick={onSquareClick}
      className="w-20 h-20 bg-purple-300 text-gray-800 text-3xl font-bold border-2 border-purple-500 rounded-lg transition-colors duration-200 ease-in-out hover:bg-purple-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
    >
      {value}
    </button>
  );
}

export default Square;