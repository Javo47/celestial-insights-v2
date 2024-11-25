import { useState, useEffect } from "react";
import MedSquare from "../components/MedSquare";
import Bar from "../components/Bar";
import CenterBox from "../components/CenterBox";
import Domino from "../components/Domino";
import Rectangle from "../components/Rectangle";
import { useParams} from "react-router-dom";
import axios from "axios";
import UserDetails from "../components/userDetails";
import SignResolver from "../components/SignResolver";

const HomePage = () => {
  let sign = "Unknown";
  let signRes = " ";
  let userGender = " ";
  let themeColor = "bg-slate-200";


  const { id } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    axios
      .get(`/api/getUser/${id}`)
      .then((user) => setUser(user.data))
      .catch((err) => console.log(err));
  }, []);

  if (user != null) {
    signRes = SignResolver(user.sign);
    userGender = user.gender;
    console.log(signRes);
  }


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
      <div className="bg-galaxy bg-center bg-cover bg-no-repeat">
        <div
          className={`container  py-1 bg-gray-400 bg-opacity-95  2xl:max-w-[80vw]`}
        >
          {/* Upper-Half */}
          <div className=" order-2 m-4 grid grid-cols-1 gap-4 lg:order-1 h-[100%] lg:grid-cols-12 ">
            {/* Upper-Left */}
            <div className="gap-y-5 rounded-lg lg:col-span-3  h-[100%]">
              <MedSquare labeling="Element" image={signRes.element} />
              <MedSquare
                labeling="Constellation"
                image={signRes.name}
              />
            </div>

            {/* Middle */}
            <div className="order-first grid h-[100%] gap-y-4 rounded-lg lg:order-2 lg:col-span-6">
              <Bar zodiacSign={signRes.name} dateRange={signRes.dates} />
              <CenterBox image={signRes.name} />
            </div>

            {/* Upper-Right */}
            <div className="order-3 gap-y-5 rounded-lg lg:order-3 lg:col-span-3 h-[100%] ">
              <div className="rounded-lg grid grid-cols-2 gap-4 h-[50%]">
                <Domino labeling="Symbol" image={signRes.element} />
                <Domino labeling="Type" image={signRes.signType} />
              </div>
              
              <MedSquare labeling="Planet" image={signRes.rulingPlanets} />
              
            </div>
          </div>

          {/* Lower-Half */}
          <div className="m-4 grid grid-cols-1 gap-4 lg:grid-cols-12 lg:row-span-10">
            <Rectangle
              labeling="Traits"
              listItems={signRes.traits}
              gender={userGender}
            />
            <Rectangle
              labeling="Compatibility"
              listItems={signRes.traits}
              gender={userGender}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
