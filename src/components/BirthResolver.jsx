import React from "react";

function BirthResolver(dob) {
  let zodiacSign = "";
  const date = dob.split("-");
  let year, month, day;
  [year, month, day] = date;

  //   Thanks for this script, Jonathan Harmon
  if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
    zodiacSign = "Aquarius";
  } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    zodiacSign = "Pisces";
  } else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
    zodiacSign = "Aries";
  } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
    zodiacSign = "Taurus";
  } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
    zodiacSign = "Gemini";
  } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
    zodiacSign = "Cancer";
  } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
    zodiacSign = "Leo";
  } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
    zodiacSign = "Virgo";
  } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
    zodiacSign = "Libra";
  } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
    zodiacSign = "Scorpio";
  } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
    zodiacSign = "Sagittarius";
  } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
    zodiacSign = "Capricorn";
  }

  console.log(date);
  console.log(year);
  console.log(month);
  console.log(day);
  console.log(zodiacSign);

  return zodiacSign;
}

export default BirthResolver;
