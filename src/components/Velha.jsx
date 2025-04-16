import React from "react";
import Estrelinhas from "./Estrelinhas";

function Velha() {
  return (
    <div className="relative">
    <Estrelinhas /> {/* aparece atrás das velhinhas fofas */}
      <img
        src="https://pa1.aminoapps.com/6907/6e5aecb9661fa2d5468358a97575de2669b12446r1-512-512_00.gif"
        alt="Velha ganhou"
        className="w-[150px] h-[150px] z-20 "
      />
    </div>
  );
}

export default Velha;