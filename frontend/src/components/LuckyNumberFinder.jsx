import React from "react";

function LuckyNumberFinder(dob) {
  let luckyNumber = "";
  let date = dob.replaceAll("-", "");
  date = date.split("");
  let digits = date.map(Number);
  luckyNumber = digits.reduce((acc, currVal) => acc + currVal);
  luckyNumber = luckyNumber.toString();

  return luckyNumber;
}

export default LuckyNumberFinder;
