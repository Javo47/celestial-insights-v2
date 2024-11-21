import React from "react";
import signs from "../signs.json";

function SignResolver(sign) {
  switch (sign) {
    case "Aquarius":
      sign = signs.zodiac[0];
      break;
    case "Pisces":
      sign = signs.zodiac[1];
      break;
    case "Aries":
      sign = signs.zodiac[2];
      break;
    case "Taurus":
      sign = signs.zodiac[3];
      break;
    case "Gemini":
      sign = signs.zodiac[4];
      break;
    case "Cancer":
      sign = signs.zodiac[5];
      break;
    case "Leo":
      sign = signs.zodiac[6];
      break;
    case "Virgo":
      sign = signs.zodiac[7];
      break;
    case "Libra":
      sign = signs.zodiac[8];
      break;
    case "Scorpio":
      sign = signs.zodiac[9];
      break;
    case "Sagittarius":
      sign = signs.zodiac[10];
      break;
    case "Capricorn":
      sign = signs.zodiac[11];
      break;
  }
  return sign;
}

export default SignResolver;
