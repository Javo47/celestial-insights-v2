import React from "react";

function ImageResolver(image) {
  switch (image) {
    case "Air":
      image = `/images/elements/element_air.jpg`;
      //image = `/images/types/male-symbol.png`;
      break;
    case "Water":
      image = `/images/elements/element_water.jpg`;
      break;
    case "Fire":
      image = `/images/elements/element_fire.jpg`;
      break;
    case "Earth":
      image = `/images/elements/element_earth.jpg`;
      break;
    case "Masculine":
      image = `/images/elements/element_earth.jpg`;
      break;
    case "Feminine":
      image = `/images/elements/element_water.jpg`;
      break;
    case "Aquarius":
      image = `/images/avatars/avatar_aquarius.jpg`;
      break;
    case "Aries":
      image = `/images/avatars/avatar_aries.jpg`;
      break;
    case "Cancer":
      image = `/images/avatars/avatar_cancer.jpg`;
      break;
    case "Capricorn":
      image = "/images/avatars/avatar_capricorn.jpg";
      break;
    case "Gemini":
      image = `/images/avatars/avatar_gemini.jpg`;
      break;
    case "Leo":
      image = `/images/avatars/avatar_leo.jpg`;
      break;
    case "Libra":
      image = `/images/avatars/avatar_libra.jpg`;
      break;
    case "Pisces":
      image = `/images/avatars/avatar_pisces.jpg`;
      break;
    case "Sagittarius":
      image = `/images/avatars/avatar_sagittarius.png`;
      break;
    case "Scorpio":
      image = `/images/avatars/avatar_scorpio.png`;
      break;
    case "Taurus":
      image = `/images/avatars/avatar_taurus.jpg`;
      break;
    case "Virgo":
      image = `/images/avatars/avatar_virgo.jpg`;
      break;
    case "Uranus":
      image = `/images/planets/uranus.jpg`;
      break;
    case "Saturn":
      image = `/images/planets/saturn.jpg`;
      break;
    case "Jupiter":
      image = `/images/planets/jupiter.jpg`;
      break;
    case "Mars":
      image = `/images/planets/mars.jpg`;
      break;
    case "Mercury":
      image = `/images/planets/mercury.jpg`;
      break;
    case "Moon":
      image = `/images/planets/moon.jpg`;
      break;
    case "Neptune":
      image = `/images/planets/neptune.jpg`;
      break;
    case "Pluto":
      image = `/images/planets/pluto.jpg`;
      break;
    case "Sun":
      image = `/images/planets/sun.jpg`;
      break;
    case "Venus":
      image = `/images/planets/venus.jpg`;
      break;
    case "Aquarius-const":
      image = `/images/constellations/const-aquarius.jpg`;
      break;
    default:
      image = "/images/backgrounds/large-galaxy.jpg";
  }
  return image;
}

export default ImageResolver;
