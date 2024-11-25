import React from "react";
import ImageResolver from "./ImageResolver";

const MedSquare = ({ labeling = "Untitled", image }) => {
  let arrLength = 0;

  let imageA, imageB;

  if (image instanceof Array) {
    arrLength = image.length;
    [imageA, imageB] = image;
  }

  image = ImageResolver(image);

  return (
    <div
      className={`h-[50%] rounded-lg shadow flex flex-col items-center justify-start font-uncial`}
    >
      <h2 className="text-2xl my-4">{labeling}</h2>
      <div
        className={`mb-8 mx-2 rounded-2xl  h-[100%] w-[90%] overflow-hidden hover:scale-105  shadow-black shadow-2xl transition ease-in-out  `}
      >
        <img
          src={`${image}`}
          className="object-cover object-center w-[100%] h-[100%] "
        ></img>
      </div>
    </div>
  );
};

export default MedSquare;
