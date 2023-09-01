import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Metric() {
  const navigate = useNavigate();
  const { repoName } = useParams();
  const handleColabClick = () => {
    navigate(`../colab-metrics/${repoName}`);
  };
  const handleCodingClick = () => {
    navigate(`../coding-metrics/${repoName}`);
  };
  return (
    <div className="bg-gray-900 flex flex-col pt-4 justify-between items-center ">
      <div className="flex text-cyan-100">
        <button
          className="bg-transparent text-cyan-100 mr-8 ml-20  text-center text-xl pl-40 padding-20 pr-40 flex items-center justify-center hover:bg-cyan-800 font-semibold hover:text-white py-3 px-6 border border-cyan-500 hover:border-transparent rounded w-128"
          onClick={handleColabClick}
        >
          Colab Metric
        </button>
        <button
          className="bg-transparent hover:bg-cyan-800 ml-20 text-xl text-center  text-cyan-100 font-semibold pl-40 padding-20 pr-40 hover:text-white py-3 px-6 border border-cyan-500 hover:border-transparent rounded w-68"
          onClick={handleCodingClick}
        >
          Coding Metric
        </button>
      </div>

      {/* Rest of your sidebar content */}
    </div>
  );
}

export default Metric;
