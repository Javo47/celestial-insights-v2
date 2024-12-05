import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import BirthResolver from "../components/BirthResolver";
import LuckyNumberFinder from "../components/LuckyNumberFinder";
import ImageResolver from "../components/ImageResolver";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const UserAccountPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [userId, setUserId] = useState("0");
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [gender, setGender] = useState("Male");
  const [birthDate, setBirthDate] = useState("1999-01-01");
  const [sign, setSign] = useState();
  const [signImage, setSignImage] = useState();
  //const [lNumber, setLNumber] = useState();

  //let signImage = "";
  let lNumber = "0";
  console.log(typeof id);

  useEffect(() => {
    if (id != "undefined") {
      axios
        .get(`https://celestial-api-production.vercel.app/getUser/${id}`)
        .then((result) => {
          console.log(result);
          setUserId(result.data._id);
          console.log(userId);
          setName(result.data.name);
          setEmail(result.data.email);
          setPassword(result.data.password);
          setGender(result.data.gender);
          setBirthDate(result.data.birthDate);
          //setSign(BirthResolver(birthDate));
          //setSignImage(ImageResolver(sign));
        })
        .catch((err) => console.log(err));
    } else {
      toast.error("You must be signed in to access account settings..");
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    setSign(BirthResolver(birthDate));
    setSignImage(ImageResolver(sign));
  }, [birthDate]);

  const updateUser = (e) => {
    e.preventDefault();
    axios
      .put(`https://celestial-api-production.vercel.app/updateUser/${id}`, {
        name,
        email,
        gender,
        birthDate,
        sign,
        lNumber,
      })
      .then((result) => {
        console.log(result);
        const newId = result.data._id;
        navigate(`/users/${newId}`);
        toast.success("Your account information has been updated! \u{1F60E}");
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (e) => {
    axios
      .delete(`https://celestial-api-production.vercel.app/deleteUser/${id}`)
      .then((res) => {
        console.log(res);
        navigate("/sign-up");
        success.toast(
          "Your account has successfully been deleted. Goodbye.. \u{1F622} "
        );
      })
      .catch((err) => console.log(err));
  };

  //const test = ImageResolver(sign);

  return (
    <>
      <section className="bg-celestial">
        <div className="container m-auto max-w-2xl py-24">
          <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
            <form onSubmit={updateUser}>
              <h2 className="text-3xl text-center font-semibold mb-6">
                Account Settings
              </h2>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="John Doe"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="jdoe@whomail.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="Enter Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="type"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  className="border rounded w-full py-2 px-3"
                  required
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="nb-other">Nonbinary/Other</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="birthDate"
                >
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  className="border rounded w-full py-2 px-3 mb-2"
                  required
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                />
              </div>

              <div className="mb-10">
                <button
                  className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Update Account Information
                </button>
              </div>
              {/* <div className="flex items-center justify-between">
                <div className="mb-10 w-6/12">
                  <img
                    className={`bg-center bg-contain h-[300px] items-center mr-1  hover:scale-105 transition ease-in-out text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline`}
                    src={signImage}
                  ></img>
                </div>
                <div className={`mb-10 w-6/12 bg-[url('${signImage}')]`}>
                  <img
                    className={` bg-center bg-contain h-[300px] items-center ml-1  hover:scale-105 transition ease-in-out text-white font-bold py-2 px-4 rounded-3xl w-full focus:outline-none focus:shadow-outline`}
                    src={signImage}
                  ></img>
                </div>
              </div> */}
              <hr className="w-11/12 h-10 m-auto"></hr>
              <div>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                  onClick={(e) => handleDelete(userId)}
                >
                  Delete Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

// const dataLoader = async ({ params }) => {
//   const res = await fetch(`/api/users/${params.id}`);
//   const data = await res.json();
//   return data;
// };

// export { UserAccountPage as default, dataLoader };

export default UserAccountPage;
