import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import MainLayout from "./layouts/MainLayout";
import UserAccountPage, { dataLoader } from "./pages/UserAccountPage";
import MongoTest from "./pages/MongoTest";
//import UserAccountPage from "./pages/UserAccountPage";
//import UserDetails from "./components/userDetails";

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/getUsers")
      .then((users) => setUsers(users.data))
      .catch((err) => console.log(err));
  }, []);

  const addUser = async (newUser) => {
    const res = await fetch("/api/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
  };

  const deleteAccount = async (id) => {
    const res = await fetch(`/api/users/${id}`, {
      method: "DELETE",
    });
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/sign-up"
          element={<SignUpPage signUpSubmit={addUser} />}
        />
        <Route path="/test" element={<MongoTest />} />
        <Route path="/users/:id" element={<HomePage />} />
        <Route
          path="/users/:id/account"
          element={<UserAccountPage deleteAccount={deleteAccount} />}
          loader={dataLoader}
        />
        {/* <Route path="/users/test" element={<UserDetails />} /> */}
      </Route>
    )
  );

  return <RouterProvider index router={router} />;
};
export default App;
