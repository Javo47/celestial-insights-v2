import React from "react";

function ImageResolver(image) {
  switch (image) {
    case "Air":
      image = `/public/images/elements/element_air.jpg`;
      //image = `/public/images/types/male-symbol.png`;
      break;
    case "Water":
      image = `/public/images/elements/element_water.jpg`;
      break;
    case "Fire":
      image = `/public/images/elements/element_fire.jpg`;
      break;
    case "Earth":
      image = `/public/images/elements/element_earth.jpg`;
      break;
    case "Masculine":
      image = `/public/images/elements/element_earth.jpg`;
      break;
    case "Feminine":
      image = `/public/images/elements/element_water.jpg`;
      break;
    case "Aquarius":
      image = `/public/images/avatars/avatar_aquarius.jpg`;
      break;
    case "Aries":
      image = `/public/images/avatars/avatar_aries.jpg`;
      break;
    case "Cancer":
      image = `/public/images/avatars/avatar_cancer.jpg`;
      break;
    case "Capricorn":
      image = "/public/images/avatars/avatar_capricorn.jpg";
      break;
    case "Gemini":
      image = `/public/images/avatars/avatar_gemini.jpg`;
      break;
    case "Leo":
      image = `/public/images/avatars/avatar_leo.jpg`;
      break;
    case "Libra":
      image = `/public/images/avatars/avatar_libra.jpg`;
      break;
    case "Pisces":
      image = `/public/images/avatars/avatar_pisces.jpg`;
      break;
    case "Sagittarius":
      image = `/public/images/avatars/avatar_sagittarius.png`;
      break;
    case "Scorpio":
      image = `/public/images/avatars/avatar_scorpio.png`;
      break;
    case "Taurus":
      image = `/public/images/avatars/avatar_taurus.jpg`;
      break;
    case "Virgo":
      image = `/public/images/avatars/avatar_virgo.jpg`;
      break;
    case "Uranus":
      image = `/public/images/planets/uranus.jpg`;
      break;
    case "Saturn":
      image = `/public/images/planets/saturn.jpg`;
      break;
    case "Jupiter":
      image = `/public/images/planets/jupiter.jpg`;
      break;
    case "Mars":
      image = `/public/images/planets/mars.jpg`;
      break;
    case "Mercury":
      image = `/public/images/planets/mercury.jpg`;
      break;
    case "Moon":
      image = `/public/images/planets/moon.jpg`;
      break;
    case "Neptune":
      image = `/public/images/planets/neptune.jpg`;
      break;
    case "Pluto":
      image = `/public/images/planets/pluto.jpg`;
      break;
    case "Sun":
      image = `/public/images/planets/sun.jpg`;
      break;
    case "Venus":
      image = `/public/images/planets/venus.jpg`;
      break;
    case "Aquarius-const":
      image = `/public/images/constellations/const-aquarius.jpg`;
      break;
    default:
      image = "/public/images/backgrounds/large-galaxy.jpg";
  }
  return image;
}

export default ImageResolver;
