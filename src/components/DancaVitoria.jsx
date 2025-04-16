import React from "react";
import Estrelinhas from "./Estrelinhas";

function DancaVitoria() {
  return (
    <div className="relative">
      <Estrelinhas /> {/* aparece atrás dos pandinhas dançando */}
      <img
        src="https://i.pinimg.com/originals/bf/bc/21/bfbc21130efd482684e4f02991350817.gif"
        alt="Dança da vitoriaaa"
        className="w-[150px] h-[150px] z-20 rounded-full"
      />
    </div>
  );
}

export default DancaVitoria;