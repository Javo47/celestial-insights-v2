import React from "react";
import UserDetails from "./userDetails";
import SignResolver from "./SignResolver";
import ImageResolver from "./ImageResolver";

const Domino = ({ labeling, image }) => {
  // let signRes = " ";
  // const user = UserDetails();

  // if (user != null) {
  //   signRes = SignResolver(user.sign);
  // }

  // if (image != null) {
  //   if (labeling == "Element") {
  //     image = signRes.element;
  //   } else if (labeling == "Type") {
  //     image = signRes.signType;
  //   } else {
  //     console.log("The sign cannot be resolved.");
  //   }
  // }

  image = ImageResolver(image);

  return (
    <>
      <div
        className={`min-h-[282px] rounded-lg  shadow flex flex-col items-center justify-between font-uncial`}
      >
        <h2 className="text-xl my-8">{labeling}</h2>
        <div
          className={`min-h-[175px] max-h-[100px] min-w-[150px] mb-14 rounded-lg shadow border-4 flex bg-no-repeat   bg-center bg-contain ${image}`}
        ></div>
      </div>
    </>
  );
};

export default Domino;
