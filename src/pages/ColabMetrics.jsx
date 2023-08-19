import React from "react";
import SideBar from "../components/SideBar";
import Metric from "../components/Metric";

function ColabMetrics() {
  return (
    <div className="flex bg-slate-900">
      <SideBar />
      <div className="ml-2 text-sm text-black-300">
        <Metric />
        <h1>THIS IS ColabMetrics</h1>
      </div>
    </div>
  );
}
export default ColabMetrics;
