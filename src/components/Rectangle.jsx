import React from "react";
import signs from "../signs.json";
import jobs from "../jobs.json"

const Rectangle = ({ labeling, listItems, bg = "bg-transparent" }) => {
  return (
    <div
      className={`min-h-[282px] rounded-lg ${bg} shadow sm:col-span-6 flex flex-col items-center h-full justify-start font-uncial`}
    >
      <h2 className="text-3xl mt-4">{labeling}</h2>
      <ul className="m-4 flex flex-col justify-around h-full">
        <li>{`Female Traits: ${signs[listItems].traits.female}` || "Nothing"}</li>
        <li>{`Male Traits: ${signs[1].traits.male}`}</li>
        
      </ul>
    </div>
  );
};

export default Rectangle;
