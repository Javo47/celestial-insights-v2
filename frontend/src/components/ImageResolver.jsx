import React from "react";

function ImageResolver(image) {
  switch (image) {
    case "Air":
      image = `/src/assets/images/elements/element_air.jpg`;
      break;
    case "Water":
      image = `/src/assets/images/elements/element_water.jpg`;
      break;
    case "Fire":
      image = `/src/assets/images/elements/element_fire.jpg`;
      break;
    case "Earth":
      image = `/src/assets/images/elements/element_earth.jpg`;
      break;
    case "Masculine":
      image = `/src/assets/images/elements/element_earth.jpg`;
      break;
    case "Feminine":
      image = `/src/assets/images/elements/element_water.jpg`;
      break;
    case "Aquarius":
      image = `/src/assets/images/avatars/avatar_aquarius.jpg`;
      break;
    case "Aries":
      image = `/src/assets/images/avatars/avatar_aries.jpg`;
      break;
    case "Cancer":
      image = `/src/assets/images/avatars/avatar_cancer.jpg`;
      break;
    case "Capricorn":
      image = `/src/assets/images/avatars/avatar_capricorn.jpg`;
      break;
    case "Gemini":
      image = `/src/assets/images/avatars/avatar_gemini.jpg`;
      break;
    case "Leo":
      image = `/src/assets/images/avatars/avatar_leo.jpg`;
      break;
    case "Libra":
      image = `/src/assets/images/avatars/avatar_libra.jpg`;
      break;
    case "Pisces":
      image = `/src/assets/images/avatars/avatar_pisces.jpg`;
      break;
    case "Sagittarius":
      image = `/src/assets/images/avatars/avatar_sagittarius.png`;
      break;
    case "Scorpio":
      image = `/src/assets/images/avatars/avatar_scorpio.png`;
      break;
    case "Taurus":
      image = `/src/assets/images/avatars/avatar_taurus.jpg`;
      break;
    case "Virgo":
      image = `/src/assets/images/avatars/avatar_virgo.jpg`;
      break;
  }
  return image;
}

export default ImageResolver;
