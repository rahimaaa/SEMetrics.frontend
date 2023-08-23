// RepoMetricsPage.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const RepoMetrics = () => {
  const { repoName } = useParams();
  const [impactData, setImpactData] = useState([]);
  const [repo, setRepo] = useState({});

  useEffect(() => {
    const fetchRepo = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}account/repos/${repoName}`,
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
          `${process.env.REACT_APP_BACKEND_URL}account/repos/impact/${repoName}`,
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
          `${process.env.REACT_APP_BACKEND_URL}account/repos/collabs/${repoName}`,
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
          `${process.env.REACT_APP_BACKEND_URL}account/repos/new_work/${repoName}`,
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
          `${process.env.REACT_APP_BACKEND_URL}account/repos/complexity/${repoName}`,
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
          `${process.env.REACT_APP_BACKEND_URL}account/repos//legacy-refactor/${repoName}`,
          {
            withCredentials: true,
          }
        );
        console.log("Legacy Refactor Data:", response.data);
      } catch (error) {
        console.log("Error fetching repo complexity data: ", error);
      }
    };
    fetchRepoImpact();
    fetchRepoCollabs();
    fetchNewWork();
    fetchRepoComplexity();
    fetchRepoLegacyRefactor();
  }, [repo]);

  return (
    <div>
      <h1>Repository Metrics for {repoName}</h1>

      {impactData && impactData.length > 0 ? (
        <h1>Check the console</h1>
      ) : (
        <h3>No impact data available for this repository.</h3>
      )}
    </div>
  );
};

export default RepoMetrics;
