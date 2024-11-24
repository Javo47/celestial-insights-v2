import React from "react";
import UserDetails from "./userDetails";
import SignResolver from "./SignResolver";
import ImageResolver from "./ImageResolver";

const Domino = ({ labeling, image }) => {
  image = ImageResolver(image);

  return (
    <>
      <div
        className={`min-h-[282px] rounded-lg shadow flex flex-col items-center justify-between font-uncial`}
      >
        <h2 className="text-xl my-8">{labeling}</h2>
        <div
          className={`min-h-[175px] max-h-[100px] min-w-[90%] mb-14 rounded-lg shadow border-4 flex bg-no-repeat   bg-center bg-cover ${image}`}
        ></div>
      </div>
    </>
  );
};

export default Domino;
