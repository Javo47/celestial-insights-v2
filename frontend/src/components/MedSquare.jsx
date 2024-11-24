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
      className={`min-h-[282px] max-h-[100%]  rounded-lg shadow flex flex-col items-center justify-between font-uncial bg-cover bg-no-repeat bg-center`}
    >
      <h2 className="text-2xl my-4">{labeling}</h2>
      <div
        className={`mb-8 rounded-lg shadow border-4 inline-flex max-h-[50%] max-w-[90%]
           ${image}`}
      >
        <img src={`${image}`} className="object-cover"></img>
      </div>
    </div>
  );
};

export default MedSquare;
