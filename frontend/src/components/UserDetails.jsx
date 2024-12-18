import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      axios
        .get(`https://celestial-api-production.vercel.app/getUser/${id}`)
        .then((result) => console.log(result), setUser(result.data))
        .catch((err) => console.log(err));
      setUser("test");
    };

    console.log(user);
    fetchUser();
  }, []);

  return user;
};

export default UserDetails;
