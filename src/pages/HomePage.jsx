import React from "react";
import MedSquare from "../components/MedSquare";
import Bar from "../components/Bar";
import CenterBox from "../components/CenterBox";
import Domino from "../components/Domino";
import Rectangle from "../components/Rectangle";
import { useParams, useLoaderData } from "react-router-dom";

const dataLoader = async ({ params }) => {
  const res = await fetch(`/api/users/${params.id}`);
  const data = await res.json();
  return data;
};

const HomePage = () => {
  const sign = useLoaderData();

  return (
    <>
      <div className="container bg-slate-100">
        {/* Upper-Half */}
        <div className="order-2 m-4 grid grid-cols-1 gap-4 lg:order-1 lg:grid-cols-12">
          {/* Upper-Left */}
          <div className="grid gap-y-5 rounded-lg lg:col-span-3">
            <MedSquare labeling="Symbol" />
            <MedSquare labeling="Constellation" />
          </div>

          {/* Middle */}
          <div className="order-first grid min-h-[100px] gap-y-4 rounded-lg lg:order-2 lg:col-span-6">
            <Bar />
            <CenterBox centerContent="bg-aquarius" />
          </div>

          {/* Upper-Right */}
          <div className="order-3 grid gap-y-5 rounded-lg lg:order-3 lg:col-span-3">
            <div className="rounded-lg grid grid-cols-2 gap-4">
              <Domino labeling="Element" />
              <Domino labeling="Type" />
            </div>
            <MedSquare labeling="Planet" />
          </div>
        </div>

        {/* Lower-Half */}
        <div className="m-4 grid grid-cols-1 gap-4 lg:grid-cols-12">
          <Rectangle labeling="Traits" />
          <Rectangle labeling="Compatibility" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
