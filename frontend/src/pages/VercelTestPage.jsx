import React from "react";
import axios from "axios";

const VercelTestPage = () => {
  axios
    .get("/api")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  return <div>VercelTestPage - Check the console</div>;
};

export default VercelTestPage;
