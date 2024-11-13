import React from "react";
import UserDetails from "./userDetails";
import SignResolver from "./SignResolver";
import ImageResolver from "./ImageResolver";

const MedSquare = ({labeling = "Untitled", image}) => {

  // let signRes = " ";
  // const user = UserDetails();

  // if (user != null) {
  //   signRes = SignResolver(user.sign);
  // }

  // if (image != null) {
  //   image = signRes.element;
  // }

  image = ImageResolver(image);

  
  return (
    <div
      className={`min-h-[282px]  rounded-lg shadow flex flex-col items-center justify-between font-uncial bg-cover bg-no-repeat bg-center`}
    //   style={{ backgroundImage: `url(${aquarius})` }}
    >
      <h2 className="text-2xl my-4">{labeling}</h2>
      <div
          className={`min-h-[200px] max-h-[100px] min-w-[325px] mb-8 rounded-lg shadow border-4 flex bg-no-repeat   bg-center bg-contain ${image}`}
        ></div>
    </div>
  );
};

export default MedSquare;
