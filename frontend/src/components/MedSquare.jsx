import React from "react";
import ImageResolver from "./ImageResolver";

const MedSquare = ({ labeling = "Untitled", image }) => {
  let arrLength = 0;
  let isArray = false;

  let imageA, imageB;

  if (image instanceof Array && labeling == "Planet") {
    arrLength = image.length;
    isArray = true;
    [imageA, imageB] = image;
    imageA = ImageResolver(imageA);
    imageB = ImageResolver(imageB);
  }

  if (labeling == "Constellation") {
    image = image + "-const";
  }

  image = ImageResolver(image);
  // console.log(image);
  // console.log(imageA);

  return (
    <div
      className={`h-[50%] rounded-lg shadow flex flex-col items-center justify-start font-uncial`}
    >
      <h2 className="text-2xl text-slate-300 my-4">
        {isArray ? `${labeling}` + "s" : `${labeling}`}
      </h2>
      <div
        className={`mb-8 mx-2 rounded-2xl max-h-[212px] h-[100%] w-[90%]  overflow-hidden hover:scale-105  shadow-black shadow-2xl transition ease-in-out  `}
      >
        <img
          src={isArray ? `${imageA}` : `${image}`}
          className="object-cover object-center w-[100%] h-[100%] "
        ></img>
      </div>
    </div>
  );
};

export default MedSquare;
