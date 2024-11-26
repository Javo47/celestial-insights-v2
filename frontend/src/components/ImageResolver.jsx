import React from "react";

function ImageResolver(image) {
  switch (image) {
    case "Air":
      image = `/src/assets/images/elements/element_air.jpg`;
      //image = `/src/assets/images/types/male-symbol.png`;
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
      image = "/src/assets/images/avatars/avatar_capricorn.jpg";
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
    case "Uranus":
      image = `/src/assets/images/planets/uranus.jpg`;
      break;
    case "Saturn":
      image = `/src/assets/images/planets/saturn.jpg`;
      break;
    case "Jupiter":
      image = `/src/assets/images/planets/jupiter.jpg`;
      break;
    case "Mars":
      image = `/src/assets/images/planets/mars.jpg`;
      break;
    case "Mercury":
      image = `/src/assets/images/planets/mercury.jpg`;
      break;
    case "Moon":
      image = `/src/assets/images/planets/moon.jpg`;
      break;
    case "Neptune":
      image = `/src/assets/images/planets/neptune.jpg`;
      break;
    case "Pluto":
      image = `/src/assets/images/planets/pluto.jpg`;
      break;
    case "Sun":
      image = `/src/assets/images/planets/sun.jpg`;
      break;
    case "Venus":
      image = `/src/assets/images/planets/venus.jpg`;
      break;
    case "Aquarius-const":
      image = `/src/assets/images/constellations/const-aquarius.jpg`;
      break;
    default:
      image = "/src/assets/images/backgrounds/large-galaxy.jpg";
  }
  return image;
}

export default ImageResolver;
