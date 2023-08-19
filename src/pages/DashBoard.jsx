import React, { useEffect } from "react";
import SideNavBar from "../components/SideNavBar";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Dashboard() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (event) => {
    const selectedText = event.target.innerText;
    setSelectedValue(selectedText);
    setIsDropdownOpen(false);
  };

  const [repos, setRepos] = useState(null);

  useEffect(() => {
    getRepos();
  }, []);

  const getRepos = async () => {
    try {
      const response = await axios.get("http://localhost:8080/account/repos/", {
        withCredentials: true,
      });
      console.log("response\n", response.data);
      setRepos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex bg-slate-900">
      <SideNavBar />
      <div className="flex flex-grow flex-col pt-8">
        <div
          className={`p-8 max-w-full dropdown ${isDropdownOpen ? "open" : ""}`}
        >
          <label
            htmlFor="repos"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select a Repository
          </label>
          <div
            id="repos"
            className="border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
            onClick={handleDropdownToggle}
            onBlur={() => setIsDropdownOpen(false)}
          >
            {selectedValue || "Select a Repository"}
          </div>
          {isDropdownOpen && (
            <div className="flex flex-col justify-between border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full mt-2 max-h-40 overflow-y-auto">
              <ul className="dropdown-list divide-y-2 divide-slate-500">
                {repos.map((repo) => (
                  <li
                    key={repo.id}
                    className="dropdown-item p-2 rounded hover:bg-gray-500"
                    onClick={handleOptionSelect}
                  >
                    {repo.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="flex justify-center">
          {selectedValue ? (
            <Link to={`/coding-metrics/${selectedValue}`}>
              <button
                type="button"
                className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs uppercase leading-normal font-semibold text-white bg-gradient-to-r from-emerald-500 to-cyan-400 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                Show Metrics
              </button>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
