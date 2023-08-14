// RepoMetricsPage.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const RepoMetrics = () => {
  const { repoName } = useParams();
  const [impactData, setImpactData] = useState([]);

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

    fetchRepoImpact();
  }, [repoName]);

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
