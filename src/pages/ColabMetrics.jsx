import React from "react";
import SideNavBar from "../components/SideNavBar";
import Metric from "../components/Metric";

function ColabMetrics() {
  return (
    <div className="flex bg-slate-400">
      <SideNavBar />
      <div className="ml-2 text-sm text-black-300">
        <Metric />
        <h1>THIS IS ColabMetrics</h1>
      </div>
    </div>
  );
}
export default ColabMetrics;
