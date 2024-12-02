import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [userId, setuserId] = useState()
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://celestial-api-production.vercel.app/login", {
        email,
        password,
      })
      .then((result) => {
        console.log(result);

        if (result.data === "Success!") {
          axios.get()
          navigate("/home");
        }
      });
  };

  return (
    <>
      <section className="bg-galaxy bg-cover bg-no-repeat bg-center h-[100vh]">
        <div className="container m-auto max-w-2xl py-24 ">
          <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-xl border m-4 md:m-0">
            <form onSubmit={handleSubmit}>
              <h2 className="text-3xl text-center font-semibold mb-6">
                Welcome Back
              </h2>

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

              <div>
                <button
                  className="bg-indigo-500 hover:bg-indigo-600 mb-4 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Log In
                </button>
              </div>
            </form>
            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                onClick={(e) => navigate("/sign-up")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
