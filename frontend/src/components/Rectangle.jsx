import React from "react";
import signs from "../signs.json";
import jobs from "../jobs.json";

const Rectangle = ({ labeling, listItems, gender, bg = "bg-transparent" }) => {
  let a, b, c, d, e, f;

  if (listItems instanceof Object) {
    if (gender == "male") {
      [a, b, c, d, e, f] = listItems?.male;
      labeling = labeling + " (Masculine)";
    } else if (gender == "female") {
      [a, b, c, d, e, f] = listItems?.female;
      labeling = labeling + " (Feminine)";
    } else if (gender == "other") {
      [a, b, c, d, e, f] = listItems?.other;
      labeling = labeling + " (Other/NB)";
    }
  }

  return (
    <div
      className={`min-h-[282px] rounded-lg ${bg} shadow sm:col-span-6 flex flex-col items-center h-full justify-start font-uncial`}
    >
      <h2 className="text-3xl mt-4">{labeling}</h2>
      <ul className="m-4 flex flex-col justify-around h-full">
        <li>{a}</li>
        <li>{b}</li>
        <li>{c}</li>
        <li>{d}</li>
        <li>{e}</li>
        <li>{f}</li>
      </ul>
    </div>
  );
};

export default Rectangle;
