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
import UserAccountPage from "./pages/UserAccountPage";
import MongoTest from "./pages/MongoTest";

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/getUsers")
      .then((users) => setUsers(users.data))
      .catch((err) => console.log(err));
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/test" element={<MongoTest />} />
        <Route path="/users/:id" element={<HomePage />} />
        <Route path="/users/:id/account" element={<UserAccountPage />} />
      </Route>
    )
  );

  return <RouterProvider index router={router} />;
};
export default App;
