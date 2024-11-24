import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const MongoTest = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("/api/getUsers")
      .then((users) => setUsers(users.data), console.log("test"))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="bg-red-300">
        {users.map((user) => {
          return user.name;
        })}
      </div>
      <div className="bg-red-300">{JSON.stringify(users[0])}</div>
    </>
  );
};

export default MongoTest;
