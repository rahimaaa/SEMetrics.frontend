import React from "react";
import SideNavBar from "../components/SideNavBar";
import Metric from "../components/Metric";

function CodingMetrics() {
  return (
    <div className="flex bg-slate-400">
      <SideNavBar />
      <div className="ml-2 text-sm text-black-300">
        <Metric />
        <h1>THIS IS Coding Metrics</h1>
      </div>
    </div>
  );
}
export default CodingMetrics;
