import React from "react";
import ImageResolver from "./ImageResolver";

const Domino = ({ labeling, image }) => {
  image = ImageResolver(image);

  return (
    <>
      <div
        className={`h-[100%] rounded-lg shadow flex flex-col items-center justify-between font-uncial`}
      >
        <h2 className="text-xl text-slate-300 my-8">{labeling}</h2>
        <div
          className={`min-w-auto max-h-[153px] mb-14 rounded-2xl shadow-black shadow-2xl flex hover:scale-110 transition ease-in-out`}
        >
          <img
            src={`${image}`}
            className="object-contain object-center rounded-2xl w-[100%] h-[100%]  "
          ></img>
        </div>
      </div>
    </>
  );
};

export default Domino;
