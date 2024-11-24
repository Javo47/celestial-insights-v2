import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BirthResolver from "../components/BirthResolver";
import LuckyNumberFinder from "../components/LuckyNumberFinder";

const SignUpPage = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [gender, setGender] = useState("Male");
  const [birthDate, setBirthDate] = useState("1999-01-01");
  let sign = BirthResolver(birthDate);
  let lNumber = LuckyNumberFinder(birthDate);

  const navigate = useNavigate();

  const submitForm = (e) => {
    let id = "0";
    e.preventDefault();
    axios
      .post("/api/createUser", {
        name,
        email,
        gender,
        birthDate,
        sign,
        lNumber,
      })
      .then((result) => {
        console.log(result);
        id = result.data._id;
        navigate(`/users/${id}`);
      })
      .catch((err) => console.log(err));

    // const newUser = {
    //   name,
    //   email,
    //   gender,
    //   birthDate,
    //   sign,
    //   lNumber,
    // };

    // signUpSubmit(newUser);

    //return navigate(`/users/${id}`);
  };

  return (
    <>
      <section className="bg-indigo-50">
        <div className="container m-auto max-w-2xl py-24">
          <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
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
                  Submit
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
