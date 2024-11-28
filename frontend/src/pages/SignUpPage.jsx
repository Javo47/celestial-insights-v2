import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BirthResolver from "../components/BirthResolver";
import LuckyNumberFinder from "../components/LuckyNumberFinder";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [gender, setGender] = useState("Male");
  const [birthDate, setBirthDate] = useState("1999-01-01");
  let sign = BirthResolver(birthDate);
  let lNumber = LuckyNumberFinder(birthDate);

  const navigate = useNavigate();

  const submitForm = (e) => {
    let id = "0";
    e.preventDefault();
    axios
      .post("https://celestial-api-production.vercel.app/createUser", {
        name,
        email,
        password,
        gender,
        birthDate,
        sign,
        lNumber,
      })
      .then((result) => {
        console.log(result);
        id = result.data._id;
        toast.success(`Account successfully created! \u{1F973}`);
        navigate(`/users/${id}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <section className="bg-galaxy bg-cover bg-no-repeat bg-center h-[100vh]">
        <div className="container m-auto max-w-2xl py-24 ">
          <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-xl border m-4 md:m-0">
            <form onSubmit={submitForm}>
              <h2 className="text-3xl text-center font-semibold mb-6">
                Sign Up Now
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
                  placeholder="Enter Name"
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
                  placeholder="Enter Email"
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

              <div>
                <button
                  className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUpPage;
