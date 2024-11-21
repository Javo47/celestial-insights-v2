import React from "react";

function ImageResolver(image) {
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
    case "Masculine":
      image = `bg-[url("/src/assets/images/elements/element_earth.jpg")]`;
      break;
    case "Feminine":
      image = `bg-[url("/src/assets/images/elements/element_water.jpg")]`;
      break;
    case "Aquarius":
      image = `bg-[url("/src/assets/images/avatars/avatar_aquarius.jpg")]`;
      break;
    case "Aries":
      image = `bg-[url("/src/assets/images/avatars/avatar_aries.jpg")]`;
      break;
    case "Cancer":
      image = `bg-[url("/src/assets/images/avatars/avatar_cancer.jpg")]`;
      break;
    case "Capricorn":
      image = `bg-[url("/src/assets/images/avatars/avatar_capricorn.jpg")]`;
      break;
    case "Gemini":
      image = `bg-[url("/src/assets/images/avatars/avatar_gemini.jpg")]`;
      break;
    case "Leo":
      image = `bg-[url("/src/assets/images/avatars/avatar_leo.jpg")]`;
      break;
    case "Libra":
      image = `bg-[url("/src/assets/images/avatars/avatar_libra.jpg")]`;
      break;
    case "Pisces":
      image = `bg-[url("/src/assets/images/avatars/avatar_pisces.jpg")]`;
      break;
    case "Sagittarius":
      image = `bg-[url("/src/assets/images/avatars/avatar_sagittarius.png")]`;
      break;
    case "Scorpio":
      image = `bg-[url("/src/assets/images/avatars/avatar_scorpio.png")]`;
      break;
    case "Taurus":
      image = `bg-[url("/src/assets/images/avatars/avatar_taurus.jpg")]`;
      break;
    case "Virgo":
      image = `bg-[url("/src/assets/images/avatars/avatar_virgo.jpg")]`;
      break;
  }
  return image;
}

export default ImageResolver;
