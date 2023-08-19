import React from "react";
import { useParams } from "react-router-dom";
import SideBar from "../components/SideBar";
import Metric from "../components/Metric";

function CodingMetrics() {
  const { repoName } = useParams();
  return (
    <div className=" flex bg-slate-900">
      <SideBar/>
      <div className="ml-2 text-sm text-black-300">
        <Metric />
        <h1>THIS IS Coding Metrics</h1>
        <p>{repoName}</p>
      </div>
    </div>
  );
}
export default CodingMetrics;
