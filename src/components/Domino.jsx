import React from "react";
import { useState, useEffect } from "react";
import UserDetails from "./userDetails";
import signs from "../signs.json";
import SignResolver from "./SignResolver";

const Domino = ({ labeling, image }) => {
  

  let pic = "";

  if (image != null) {
    pic = image;
  }

  let signRes = " ";

  const user = UserDetails();

  if (user != null) {
    signRes = SignResolver(user.sign);
  }

  //console.log(user);
  //let signRes = SignResolver(user);
  //let sign = user.name;
  //let signRes = SignResolver(sign);

  //const [element, setElement] = useState(image);

  //console.log(signRes);

  // useEffect(() => {
  //   //setElement(image);

  //   switch (image) {
  //     case "Air":
  //       setElement("/src/assets/images/elements/element_air.jpg");
  //       break;
  //     case "Water":
  //       setElement("/src/assets/images/elements/element_water.jpg");
  //       break;
  //     case "Fire":
  //       setElement("/src/assets/images/elements/element_fire.jpg");
  //       break;
  //     case "Earth":
  //       setElement("/src/assets/images/elements/element_earth.jpg");
  //       break;
  //   }
  //   console.log(element);
  // }, [image]);

  if (image != null) {
    image = signRes.element;
  }

  switch (image) {
    case "Air":
      image = `bg-[url("/src/assets/images/elements/element_air.jpg")]`;
      break;
    case "Water":
      image = `bg-[url("/src/assets/images/elements/element_water.jpg")]`;
      break;
    case "Fire":
      image = `bg-[url("/src/assets/images/elements/element_fire.jpg")]`;
      break;
    case "Earth":
      image = `bg-[url("/src/assets/images/elements/element_earth.jpg")]`;
      break;
  }

  return (
    <>
      <div
        className={`min-h-[282px] rounded-lg  shadow flex flex-col items-center justify-between font-uncial`}
      >
        <h2 className="text-xl my-8">{labeling}</h2>
        <div
          className={`min-h-[175px] max-h-[100px] min-w-[150px] mb-14 rounded-lg shadow border-4 flex   bg-center bg-contain ${image}`}
        ></div>
      </div>
    </>
  );
};

export default Domino;
