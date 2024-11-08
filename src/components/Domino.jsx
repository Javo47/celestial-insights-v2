import React from "react";

const Domino = ({ labeling, bg = "bg-transparent" }) => {
  return (
    <div
      className={`min-h-[282px] rounded-lg ${bg} shadow flex justify-center font-uncial`}
    >
      <h2 className="xl:text-3xl lg:text-xl mt-4">{labeling}</h2>
    </div>
  );
};

export default Domino;
