import React from "react";

function ImageResolver(image) {
  switch (image) {
    // Elements
    case "Air":
      image = `/images/elements/element_air.jpg`;
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

    // Gender
    case "Masculine":
      image = `/images/symbols/male-sign.jpg`;
      break;
    case "Feminine":
      image = `/images/symbols/female-sign.jpg`;
      break;

    // Zodiac Avatar
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

    // Planets
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

    // Constellations
    case "Aquarius-const":
      image = `/images/constellations/const-aquarius.jpg`;
      break;
    case "Pisces-const":
      image = `/images/constellations/const-pisces.jpg`;
      break;
    case "Gemini-const":
      image = `/images/constellations/const-gemini.jpg`;
      break;
    case "Cancer-const":
      image = `/images/constellations/const-cancer.jpg`;
      break;
    case "Taurus-const":
      image = `/images/constellations/const-taurus.jpg`;
      break;
    case "Virgo-const":
      image = `/images/constellations/const-virgo.jpg`;
      break;
    case "Capricorn-const":
      image = `/images/constellations/const-capricorn.jpg`;
      break;
    case "Sagittarius-const":
      image = `/images/constellations/const-sagittarius.jpg`;
      break;
    case "Aries-const":
      image = `/images/constellations/const-aries.jpg`;
      break;
    case "Leo-const":
      image = `/images/constellations/const-leo.jpg`;
      break;
    case "Scorpio-const":
      image = `/images/constellations/const-scorpio.jpg`;
      break;

    // Symbols & Signs
    case "Aquarius-sign":
      image = `/images/symbols/aquarius-sign.jpg`;
      break;
    case "Aries-sign":
      image = `/images/symbols/aries-sign.jpg`;
      break;
    case "Cancer-sign":
      image = `/images/symbols/cancer-sign.jpg`;
      break;
    case "Capricorn-sign":
      image = "/images/symbols/capricorn-sign.jpg";
      break;
    case "Gemini-sign":
      image = `/images/symbols/gemini-sign.jpg`;
      break;
    case "Leo-sign":
      image = `/images/symbols/leo-sign.jpg`;
      break;
    case "Libra-sign":
      image = `/images/symbols/libra-sign.jpg`;
      break;
    case "Pisces-sign":
      image = `/images/symbols/pisces-sign.jpg`;
      break;
    case "Sagittarius-sign":
      image = `/images/symbols/sagittarius-sign.jpg`;
      break;
    case "Scorpio-sign":
      image = `/images/symbols/scorpio-sign.jpg`;
      break;
    case "Taurus-sign":
      image = `/images/symbols/taurus-sign.jpg`;
      break;
    case "Virgo-sign":
      image = `/images/symbols/virgo-sign.jpg`;
      break;
    default:
      image = "/images/backgrounds/large-galaxy.jpg";
  }
  return image;
}

export default ImageResolver;
