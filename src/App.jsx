import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import UserDetails from "./components/userDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/users/:id" element={<HomePage />} />
      {/* <Route path="/users/test" element={<UserDetails />} /> */}
    </Route>
  )
);

const App = () => {
  return <RouterProvider index router={router} />;
};
export default App;
