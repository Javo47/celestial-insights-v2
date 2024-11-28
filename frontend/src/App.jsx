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
import NotFoundPage from "./pages/NotFoundPage";
import MongoTest from "./pages/MongoTest";
import Login from "./pages/Login";
import VercelTestPage from "./pages/VercelTestPage";

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://celestial-api-production.vercel.app/getUsers")
      .then((users) => console.log(users.data))
      .catch((err) => console.log(err));
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        {/* Change index back to HomePage after testing. */}
        <Route index element={<VercelTestPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/home-test" element={<HomePage />} />
        <Route path="/test" element={<MongoTest />} />
        <Route path="/users/:id" element={<HomePage />} />
        <Route path="/users/:id/account" element={<UserAccountPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider index router={router} />;
};
export default App;
