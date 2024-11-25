import React from "react";
import ImageResolver from "./ImageResolver";

const CenterBox = ({ image }) => {
  image = ImageResolver(image);

  return (
    <div
      className={` min-h-[500px] max-h-[500px] rounded-lg shadow-2xl shadow-black bg-purple-950 hover:scale-105  transition ease-in-out  bg-contain bg-no-repeat overflow-hidden  bg-center`}
    >
      <img
          src={`${image}`}
          className="object-contain object-center w-[100%] h-[100%] rounded-2xl  "
        ></img>
    </div>
  );
};

export default CenterBox;
