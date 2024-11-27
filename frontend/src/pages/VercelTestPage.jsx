import React from "react";
import axios from "axios";

const VercelTestPage = () => {
  axios
    .get("https://celestial-api-production.vercel.app/")
    .then((res) => console.log("It works."))
    .catch((err) => console.log(err));

  return <div>VercelTestPage - Check the console!</div>;
};

export default VercelTestPage;
