import React from "react";
import { useNavigate } from "react-router-dom";

function Metric() {
  const navigate = useNavigate();
  const handleColabClick = () => {
    navigate("../colab-metrics");
  };
  const handleCodingClick = () => {
    navigate("../coding-metrics");
  };
  return (
    <div className="flex text-black items-end">
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={handleColabClick}
      >
        Colab Metric
      </button>
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={handleCodingClick}
      >
        coding Metric
      </button>
    </div>
  );
}

export default Metric;
