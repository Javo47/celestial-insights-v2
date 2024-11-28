import React from "react";
import axios from "axios";

const VercelTestPage = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  return <div>VercelTestPage - Check the console!</div>;
};

export default VercelTestPage;
