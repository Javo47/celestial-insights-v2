import React from "react";
import aquarius from "../assets/images/avatar_aquarius.jpg";

const MedSquare = ({labeling = "Untitled", bg = 'bg-gray-100'}) => {
  return (
    <div
      className={`min-h-[282px] ${bg} rounded-lg shadow flex justify-center font-uncial bg-cover bg-no-repeat bg-center`}
    //   style={{ backgroundImage: `url(${aquarius})` }}
    >
      <h2 className="text-2xl mt-4">{labeling}</h2>
    </div>
  );
};

export default MedSquare;
