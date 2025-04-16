import React from "react";

const NUM_STARS = 50;

const Estrelinhas = () => {
  const stars = Array.from({ length: NUM_STARS }, (_, i) => {
    const size = Math.random() * 2 + 1;
    const style = {
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${size}px`,
      height: `${size}px`,
      animationDelay: `${Math.random() * 5}s`,
    };

    return (
      <div
        key={i}
        style={style}
        className="absolute rounded-full bg-white opacity-80 twinkle"
      />
    );
  });

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {stars}
    </div>
  );
};

export default Estrelinhas;