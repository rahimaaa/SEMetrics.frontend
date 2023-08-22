// RepoMetricsPage.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ImpactChart from "../components/charts/line_charts/ImpactChart";
import DeploymentFreqChart from "../components/charts/line_charts/DeploymentFreqChart";
import LegacyRefactorChart from "../components/charts/pie_charts/LegacyRefactorChart";
import CommitComplexityChart from "../components/charts/bar_charts/CommitComplexityChart";
import UnreviewedPullRequestChart from "../components/charts/pie_charts/UnreviewedPullRequestChart";
import TimeToFirstCommentChart from "../components/charts/line_charts/TimeToFirstComment";

const RepoMetrics = () => {
  const { repoName } = useParams();
  const [impactData, setImpactData] = useState([]);
  const [repo, setRepo] = useState({});

  useEffect(() => {
    const fetchRepo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/account/repos/${repoName}`,
          {
            withCredentials: true,
          }
        );
        console.log("Repo:", response.data);
        setRepo(response.data);
      } catch (error) {
        console.log("Error fetching repo: ", error);
      }
    };
    fetchRepo();
  }, [repoName]);

  useEffect(() => {
    const fetchRepoImpact = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/account/repos/impact/${repoName}`,
          {
            withCredentials: true,
          }
        );
        console.log("Impact Data:", response.data);
        setImpactData(response.data);
      } catch (error) {
        console.log("Error fetching repo impact data:", error);
      }
    };
    async function fetchRepoCollabs() {
      try {
        const response = await axios.get(
          `http://localhost:8080/account/repos/contributors/${repoName}`,
          {
            withCredentials: true,
          }
        );
        console.log("Collaborators Data:", response.data);
      } catch (error) {
        console.log("Error fetching repo Collaborator data:", error);
      }
    }

    async function fetchNewWork() {
      try {
        const response = await axios.get(
          `http://localhost:8080/account/repos/new_work/${repoName}`,
          {
            withCredentials: true,
          }
        );
        console.log("New Work Data:", response.data);
      } catch (error) {
        console.log("Error fetching repo impact data:", error);
      }
    }
    const fetchRepoComplexity = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/account/repos/complexity/${repoName}`,
          {
            withCredentials: true,
          }
        );
        console.log("Complexity Data:", response.data);
      } catch (error) {
        console.log("Error fetching repo complexity data: ", error);
      }
    };
    const fetchRepoLegacyRefactor = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/account/repos//legacy-refactor/${repoName}`,
          {
            withCredentials: true,
          }
        );
        console.log("Legacy Refactor Data:", response.data);
      } catch (error) {
        console.log("Error fetching repo complexity data: ", error);
      }
    };
    const fectchUnreviewsPr = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/account/repos/pulls/unreview-pr/${repoName}`,
          {
            withCredentials: true,
          }
        );
        console.log("Unreview PR Data:", response.data);
      } catch (error) {
        console.log("Error fetching repo complexity data: ", error);
      }
    };
    const fectchResponsivenessPr = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/account/repos/pulls/responsiveness/${repoName}`,
          {
            withCredentials: true,
          }
        );
        console.log("Responsiveness Data:", response.data);
      } catch (error) {
        console.log("Error fetching repo complexity data: ", error);
      }
    };
    const fectchFollowOnCommitsPr = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/account/repos/pulls/follow-on-commits/${repoName}`,
          {
            withCredentials: true,
          }
        );
        console.log("Follow On Data:", response.data);
      } catch (error) {
        console.log("Error fetching repo complexity data: ", error);
      }
    };
    const fectChangeFailureRate = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/account/repos/change-failure-rate/${repoName}`,
          {
            withCredentials: true,
          }
        );
        console.log("Change Failure Rate Data:", response.data);
      } catch (error) {
        console.log("Error fetching repo complexity data: ", error);
      }
    };
    const fetchDeploymentFreq = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/account/repos/deployment-frequency/${repoName}`,
          {
            withCredentials: true,
          }
        );
        console.log("Deployment Frequency Rate Data:", response.data);
      } catch (error) {
        console.log("Error fetching repo complexity data: ", error);
      }
    };
    // fetchRepoImpact();
    fetchRepoCollabs();
    // fetchNewWork();
    // fetchRepoComplexity();
    // fetchRepoLegacyRefactor();
    // fectchResponsivenessPr();
    // fectchUnreviewsPr();
    // fectchFollowOnCommitsPr();
    // fectChangeFailureRate();
    // fetchDeploymentFreq();
  }, [repo]);

  return (
    <div className="bg-slate-900 text-white h-screen">
      <h1>Repository Metrics for {repoName}</h1>
      <div className="flex flex-wrap">
      <div style={{ margin: "20px" }}>
        <h1>Impact Chart</h1>
        <ImpactChart repo_name={repoName} />
      </div>
      <div style={{ margin: "20px" }}>
        <h1>Deployment Frequency Chart</h1>
        <DeploymentFreqChart repo_name={repoName} />
      </div>
      <div style={{ margin: "20px" }}>
        <h1>Legacy Refactor Chart</h1>
        <LegacyRefactorChart repo_name={repoName} />
      </div>
      <div style={{ margin: "20px" }}>
        <h1>Commit Complexity Chart</h1>
        <CommitComplexityChart repo_name={repoName} />
      </div>
      <div style={{ margin: "20px" }}>
        <h1>Unreviewed Pull Request Chart</h1>
        <UnreviewedPullRequestChart repo_name={repoName} />
      </div>
      <div style={{ margin: "20px" }}>
        <h1>Time To First Comment Chart</h1>
        <TimeToFirstCommentChart repo_name={repoName} />
      </div>
    </div>
    </div>
  );
};

export default RepoMetrics;
