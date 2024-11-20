import React from "react";
import ImageResolver from "./ImageResolver";

const CenterBox = ({ image }) => {
  console.log(image);
  image = ImageResolver(image);

  return (
    <div
      className={`min-h-[500px] max-h-[500px] rounded-lg shadow ${image}  bg-contain bg-no-repeat bg-purple-500 bg-center`}
    ></div>
  );
};

export default CenterBox;
