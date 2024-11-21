import React from "react";
import { Link, useNavigate, useLoaderData, useParams } from "react-router-dom";
import UserDetails from "../components/userDetails";
import { useState } from "react";

const UserAccountPage = ({ deleteAccount }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const acct = useLoaderData();
  let user = " ";
  const userData = UserDetails();

  if (userData != null) {
    user = userData;
  }

  const onDeleteClick = (acctId) => {
    const confirm = window.confirm(
      "Are you sure you want to delete your account?"
    );

    if (!confirm) return;

    deleteAccount(acctId);

    navigate("/sign-up");
  };

  // Branch Switch Test
  return (
    <div className="mx-[500px] my-[300px] bg-white rounded-xl shadow-md">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-xl font-bold mt-2 mb-6">
            Name: {user.name}
            <Link
              to="#"
              className="h-[36px] mx-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
              Edit
            </Link>
          </div>
          <div className="text-xl font-bold mt-2 mb-6">
            Date of Birth: {user.birthDate}
            <Link
              to="#"
              className="h-[36px] mx-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
              Edit
            </Link>
          </div>
          <div className="text-xl font-bold mt-2 mb-6">
            Gender: {user.gender}
            <Link
              to="#"
              className="h-[36px] mx-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
              Edit
            </Link>
          </div>
          <h3 className="text-xl font-bold">Zodiac: {user.sign}</h3>
          <h3 className="text-xl font-bold">Lucky Number: {user.lNumber}</h3>
        </div>

        <button
          //onClick={() => setShowFullDescription((prevState) => !prevState)}
          className="text-indigo-500 mb-5 hover:text-indigo-600"
        >
          {/* {showFullDescription ? "Less" : "More"} */}
        </button>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-start mb-4">
          <button
            onClick={() => onDeleteClick(acct.id)}
            className="h-[36px] bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

const dataLoader = async ({ params }) => {
  const res = await fetch(`/api/users/${params.id}`);
  const data = await res.json();
  return data;
};

export { UserAccountPage as default, dataLoader };
