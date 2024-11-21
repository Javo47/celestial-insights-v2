import React from "react";
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
import UserDetails from "./components/userDetails";

const App = () => {
  const addUser = async (newUser) => {
    const res = await fetch("/api/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
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
        <Route path="/users/:id" element={<HomePage />} />
        <Route path="/users/:id/account" element={<UserAccountPage />} />
        {/* <Route path="/users/test" element={<UserDetails />} /> */}
      </Route>
    )
  );

  return <RouterProvider index router={router} />;
};
export default App;
