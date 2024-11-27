import React from "react";
import axios from "axios";

const VercelTestPage = () => {
  axios
    .get(
      "/https://celestial-insights-v2-api-git-fullstack-javonnies-projects.vercel.app/"
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  return <div>VercelTestPage - Check the console</div>;
};

export default VercelTestPage;
