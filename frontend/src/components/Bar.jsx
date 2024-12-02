import React from "react";
import { useState } from "react";

const Bar = ({
  dateRange = "??? - ???",
  zodiacSign = "Unknown",
  themeColor,
}) => {
  const [color, setColor] = useState();

  return (
    <div
      className={`min-h-[100px] shrink  rounded-lg  shadow flex flex-col justify-center items-center font-uncial`}
    >
      <h2 className="text-xl text-slate-300">{dateRange}</h2>
      <h1
        className={`text-4xl uppercase tracking-widest hover:scale-110 transition ease-in-out shadow-black shadow-2xl bg-${themeColor}-950 rounded-3xl py-2 px-10 mt-1 text-slate-300`}
      >
        {zodiacSign}
      </h1>
    </div>
  );
};

export default Bar;
