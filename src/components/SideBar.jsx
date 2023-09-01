import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import leftArrow from "../images/left_arrow.png";
import { Link } from "react-router-dom";
import axios from "axios";

function SideBar() {
  const { repoName } = useParams();
  const [contributors, setContributors] = useState([]);
  const [developmentTime, setDevelopmentTime] = useState("");
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    const fetchContributor = async () => {
      const contributors = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/account/repos/contributors/${repoName}`
      );
      setContributors(contributors.data);
      console.log(contributors);
    };
    const fetchRepo = async () => {
      const repo = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/account/repos/${repoName}`
      );
      const startDate = new Date(repo?.data.created_at);
      const today = new Date();
      const formattedStartDate = `${startDate.getFullYear()}-${String(
        startDate.getMonth() + 1
      ).padStart(2, "0")}-${String(startDate.getDate()).padStart(2, "0")}`;
      const formattedTodayDate = `${today.getFullYear()}-${String(
        today.getMonth() + 1
      ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
      setDevelopmentTime(`${formattedStartDate} ~ ${formattedTodayDate}`);
      console.log(today, repo.data.created_at);
    };
    fetchContributor();
    fetchRepo();
  }, [repoName]);

  return (
    <div className=" bg-slate-800">
      <div className=" h-screen p-8">
        <h1 className="text-cyan-500 text-lg font-bold">{repoName}</h1>
        <div className=" mt-6">
          <h1 className="text-cyan-500">Development Time</h1>
          <p className=" p-2 text-cyan-100">{developmentTime}</p>
        </div>
        <div className="mt-6">
          <h1 className="text-cyan-500 pb-1">
            Developers: {contributors.length}
          </h1>
          <div className="h-48 overflow-y-scroll">
            <div className="pl-2 text-cyan-100">
              {contributors
                ?.slice(0, showAll ? contributors.length : 3)
                .map((contributor) => {
                  return (
                    <div key={contributor.id}>
                      <a
                        className="hover:text-emerald-500"
                        href={contributor.html_url}
                        target="_blank"
                      >
                        {contributor.login}
                      </a>
                      <p className="ml-5 p-2">
                        {" "}
                        Contribution: {contributor.contributions}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
          <div>
            {contributors?.length > 3 && !showAll ? (
              <button
                onClick={() => setShowAll(true)}
                className="text-cyan-700"
              >
                Show More...
              </button>
            ) : contributors.length > 3 ? (
              <button
                onClick={() => setShowAll(false)}
                className="text-cyan-700"
              >
                Hide
              </button>
            ) : (
              <div></div>
            )}
          </div>

          <div className="mt-6">
            <h1 className="text-cyan-500">Metrics Color Legend</h1>
            <div className="mt-4 space-y-2 text-cyan-100">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-emerald-500 rounded-full"></div>
                <p className="text-sm ml-2">Excellent</p>
              </div>

              <div className="flex items-center">
                <div className="w-6 h-6 bg-sky-500 rounded-full"></div>
                <p className="text-sm ml-2">Good</p>
              </div>

              <div className="flex items-center">
                <div className="w-6 h-6 bg-purple-800 rounded-full"></div>
                <p className="text-sm ml-2">Medium Risk </p>
              </div>

              <div className="flex items-center">
                <div className="w-6 h-6 bg-red-800 rounded-full"></div>
                <p className="text-sm ml-2">High Risk</p>
              </div>
            </div>
          </div>
          <Link to={`/dashboard`}>
            <div className="flex mt-10 ml-2 space-x-3">
              <img src={leftArrow} height="5px" width="30px"></img>
              <button type="button" className="text-[#00BBE2] ">
                Go Back
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default SideBar;
