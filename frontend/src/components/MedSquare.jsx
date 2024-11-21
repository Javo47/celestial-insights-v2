import React from "react";
import UserDetails from "./userDetails";
import SignResolver from "./SignResolver";
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
      className={`min-h-[282px]  rounded-lg shadow flex flex-col items-center justify-between font-uncial bg-cover bg-no-repeat bg-center`}
    >
      <h2 className="text-2xl my-4">{labeling}</h2>
      <div
        className={`min-h-[200px] max-h-[100px] min-w-[325px] mb-8 rounded-lg shadow border-4 flex bg-no-repeat bg-center bg-contain ${image}`}
      ></div>
    </div>
  );
};

export default MedSquare;
