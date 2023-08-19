import React from "react";
import { useParams } from "react-router-dom";
import SideNavBar from "../components/SideNavBar";
import Metric from "../components/Metric";

function CodingMetrics() {
  const { repoName } = useParams();
  return (
    <div className="flex bg-slate-400">
      <SideNavBar />
      <div className="ml-2 text-sm text-black-300">
        <Metric />
        <h1>THIS IS Coding Metrics</h1>
        <p>{repoName}</p>
      </div>
    </div>
  );
}
export default CodingMetrics;
