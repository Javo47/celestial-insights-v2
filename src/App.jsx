import MedSquare from "./components/MedSquare";
import Bar from "./components/Bar";
import CenterBox from "./components/CenterBox";
import Domino from "./components/Domino";
import Rectangle from "./components/Rectangle";

const App = () => {
  return (
    <>
      <div className="container bg-slate-100">
        {/* Upper-Half */}
        <div className="order-2 m-4 grid grid-cols-1 gap-4 sm:order-1 sm:grid-cols-12">
          {/* Upper-Left */}
          <div className="grid gap-y-5 rounded-lg sm:col-span-3">
            <MedSquare labeling="Symbol" />
            <MedSquare labeling="Constellation" />
          </div>

          {/* Middle */}
          <div className="order-first grid min-h-[100px] gap-y-4 rounded-lg sm:order-2 sm:col-span-6">
            <Bar />
            <CenterBox centerContent="bg-aquarius" />
          </div>

          {/* Upper-Right */}
          <div className="order-3 grid gap-y-5 rounded-lg sm:order-3 sm:col-span-3">
            <div className="rounded-lg grid grid-cols-2 gap-4">
              <Domino labeling="Element" />
              <Domino labeling="Type" />
            </div>
            <MedSquare labeling="Planet" />
          </div>
        </div>

        {/* Lower-Half */}
        <div className="m-4 grid grid-cols-1 gap-4 sm:grid-cols-12">
          {/* Test Comment */}
          <Rectangle labeling="Traits" />
          <div className="min-h-[282px] rounded-lg bg-teal-500 shadow sm:col-span-6 flex flex-col items-center justify-start font-uncial">
            <h2 className="text-3xl mt-4">Compatibility</h2>
            <ul className="m-4 flex flex-col justify-around h-full">
              <li>
                Female Aquarius: Unconventional, independent, humanitarian
              </li>
              <li>Male Aquarius: Visionary, intellectual, socially aware</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
