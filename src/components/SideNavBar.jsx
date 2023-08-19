import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import semlogo from "../assets/semlogo.png";
import github from "../assets/github.png";
import stats from "../assets/stats.png";
import arrow from "../assets/arrow.png";
import logouticon from "../assets/logouticon.png";
import home from "../assets/home.png";
import axios from "axios";
function SideNavBar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const handleLogout = async () => {
    const response = await axios.get("http://localhost:8080/auth/logout", {
      withCredentials: true,
    });
    console.log(response);

    navigate("/");
  };

  const handleShowDashBoard = () => {
    navigate("../dashboard");
  };
  const handleShowMetrics = () => {
    navigate("../colab-metrics");
  };

  const handleShowProfile = () => {
    navigate("../profile");
  };
  return (
    <div className="bg-gray-600">
      <div
        className={` ${
          open ? "w-72" : "w-30 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={arrow}
          alt="arrow"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 top-9 w-10 items-center">
          <img
            src={semlogo}
            alt="gitpulse logo"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-black origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            GitPulse
          </h1>
        </div>
        <ul className="pt-6">
          <li
            className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-2"
            onClick={handleShowDashBoard}
          >
            <img
              src={home}
              alt="repo"
              className="gap-x-4 top-9 w-10 items-center"
            />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Dashboard
            </span>
          </li>
         
          <li
            className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-2"
            onClick={handleShowProfile}
          >
            <img
              src={github}
              alt="repo"
              className="gap-x-4 top-9 w-10 items-center"
            />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              GitHub Profile
            </span>
          </li>
          <li
            className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-2"
            onClick={handleLogout}
          >
            <img
              src={logouticon}
              alt="logout"
              className="gap-x-4 top-9 w-10 items-center"
            />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Logout
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default SideNavBar;
