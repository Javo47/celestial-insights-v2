import React from "react";

const VercelTestPage = () => {
  axios
    .get("/api")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  return <div>VercelTestPage - Check the console</div>;
};

export default VercelTestPage;
