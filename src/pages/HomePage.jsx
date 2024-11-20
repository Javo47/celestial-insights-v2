import { useState, useEffect } from "react";
import MedSquare from "../components/MedSquare";
import Bar from "../components/Bar";
import CenterBox from "../components/CenterBox";
import Domino from "../components/Domino";
import Rectangle from "../components/Rectangle";
import { useParams, useLoaderData } from "react-router-dom";
import signs from "../signs.json";
import users from "../users.json";
import UserDetails from "../components/userDetails";
import SignResolver from "../components/SignResolver";

const HomePage = () => {
  let sign = "Unknown";
  let signRes = " ";
  let userGender = " ";
  let themeColor = "bg-slate-200";
  const user = UserDetails();

  if (user != null) {
    sign = user.sign;
    userGender = user.gender;
  }

  signRes = SignResolver(sign);

  switch (signRes.element) {
    case "Air":
      themeColor = "bg-purple-100";
      break;
    case "Water":
      themeColor = "bg-blue-100";
      break;
    case "Earth":
      themeColor = "bg-green-100";
      break;
    case "Fire":
      themeColor = "bg-red-100";
      break;
  }

  return (
    <>
      <div className="bg-slate-300">
        <div className={`container  py-1 //${themeColor}`}>
          {/* Upper-Half */}
          <div className="order-2 m-4 grid grid-cols-1 gap-4 lg:order-1 lg:grid-cols-12">
            {/* Upper-Left */}
            <div className="grid gap-y-5 rounded-lg lg:col-span-3">
              <MedSquare labeling="Element" image={signRes.element} />
              <MedSquare
                labeling="Constellation"
                image={signRes.rulingPlanets}
              />
            </div>

            {/* Middle */}
            <div className="order-first grid min-h-[100px] gap-y-4 rounded-lg lg:order-2 lg:col-span-6">
              <Bar zodiacSign={signRes.name} dateRange={signRes.dates} />
              <CenterBox image={signRes.name} />
            </div>

            {/* Upper-Right */}
            <div className="order-3 grid gap-y-5 rounded-lg lg:order-3 lg:col-span-3">
              <div className="rounded-lg grid grid-cols-2 gap-4">
                <Domino labeling="Symbol" image={signRes.element} />
                <Domino labeling="Type" image={signRes.signType} />
              </div>
              <MedSquare labeling="Planet" image={signRes.rulingPlanets} />
            </div>
          </div>

          {/* Lower-Half */}
          <div className="m-4 grid grid-cols-1 gap-4 lg:grid-cols-12">
            <Rectangle
              labeling="Traits"
              listItems={signRes.traits}
              gender={userGender}
            />
            <Rectangle labeling="Compatibility" listItems={signRes.traits} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
