import React from "react";
import { useParams } from "react-router-dom";
import SideBar from "../components/SideBar";
import Metric from "../components/Metric";
import FollowOnCommitChart from "../components/charts/bar_charts/FollowOnCommitChart";
import PrResponsivenessChart from "../components/charts/bar_charts/PrRsponsivenessChart";
import PrIterationTimeChart from "../components/charts/line_charts/PrIterationTimeChart";
import TimeToMergeChart from "../components/charts/line_charts/TimeToMerge";
import TimeToFirstCommentChart from "../components/charts/line_charts/TimeToFirstComment";
import UnreviewedPullRequestChart from "../components/charts/pie_charts/UnreviewedPullRequestChart";
import "../style/styles.css";

function ColabMetrics() {
  const { repoName } = useParams();
  return (
    <div className="flex bg-slate-900" style={{ paddingBottom: "0px" }}>
      <SideBar />
      <div style={{ width: "100%" }}>
        <Metric />

        <div className="grid-container">
          <div className="grid-item-bigger-1">
            <PrResponsivenessChart repo_name={repoName} />
          </div>
          <div className="grid-item-smaller-1">
            <TimeToMergeChart repo_name={repoName} />
          </div>
          <div className="grid-item-bigger-2">
            <PrIterationTimeChart repo_name={repoName} />
          </div>
          <div className="grid-item-smaller-2">
            <TimeToFirstCommentChart repo_name={repoName} />
          </div>
          <div className="grid-item-smaller-3">
            <UnreviewedPullRequestChart repo_name={repoName} />
          </div>
          <div className="grid-item-bigger-3">
            <FollowOnCommitChart repo_name={repoName} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColabMetrics;
/*

          <div className="col-span-1 row-span-2 h-8">
            {/* <PrIterationTimeChart repo_name={repoName} /> 
          </div>

          <div className="col-span-2 row-span-2 h-8">
            {/* <TimeToFirstCommentChart repo_name={repoName} /> 
          </div>

          <div className="col-span-2 row-span-3 h-16">
            {/* <UnreviewedPullRequestChart repo_name={repoName} /> 
          </div>

          <div className="col-span-1 row-span-3 h-16">
            {/* <FollowOnCommitChart repo_name={repoName} />
          </div>

*/
