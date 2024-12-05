import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [userId, setuserId] = useState("");
  // const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("https://celestial-api-production.vercel.app/login", {
  //       email,
  //       password,
  //     })
  //     .then((result) => {
  //       setuserId(result.data);
  //       console.log(userId);
  //       navigate(`/users/${userId}`);
  //     });
  // };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let isvalid = true;
    let validationErrors = {};
    if (formData.email === "" || formData.email === null) {
      isvalid = false;
      validationErrors.email = "Email required! ";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isvalid = false;
      validationErrors.email = "Email is not valid! ";
    }

    if (formData.password === "" || formData.email === null) {
      isvalid = false;
      validationErrors.email = "Email required! ";
    }

    axios
      .get("https://celestial-api-production.vercel.app/getUsers")
      .then((result) => {
        result.data.map((user) => {
          if (user.email === formData.email) {
            if (user.password === formData.password) {
              alert("Login successful");
              navigate(`/users/${user._id}`);
            } else {
              isvalid = false;
              validationErrors.password = "Wrong Password! ";
            }
          } else {
            isvalid = false;
            validationErrors.email =
              "The email is unrecognized. Please create an account.";
          }
        });
        setErrors(validationErrors);
        setValid(isvalid);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <section className="bg-galaxy bg-cover bg-no-repeat bg-center h-[100vh]">
        <div className="container m-auto max-w-2xl py-24 ">
          <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-xl border m-4 md:m-0">
            <form onSubmit={handleSubmit}>
              <h2 className="text-3xl text-center font-semibold mb-6">
                Welcome!
              </h2>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Email
                </label>
                {valid ? (
                  <></>
                ) : (
                  <span className="text-red-500">{errors.email}</span>
                )}
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="Enter Email"
                  required
                  //value={email}
                  onChange={(event) =>
                    setFormData({ ...formData, email: event.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Password
                </label>
                {valid ? (
                  <></>
                ) : (
                  <span className="text-red-500">{errors.password}</span>
                )}
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="Enter Password"
                  required
                  //value={password}
                  onChange={(event) =>
                    setFormData({ ...formData, password: event.target.value })
                  }
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
