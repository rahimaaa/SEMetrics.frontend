import React, { useState, useEffect } from "react";
import axios from "axios";
import FrequencyLineChart from "./FrequencyLiveChart";

const DeploymentFrequency = ({ repo }) => {
    const [frequencyData, setFrequencyData] = useState({ averageFrequency: 0, graphData: [] });

    useEffect(() => {
        const fetchDeploymentFrequency = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/deployment/deployment-frequency/${repo}`);
                setFrequencyData(response.data);
            } catch (error) {
                console.error("Failed to fetch deployment frequency!", error);
            }
        }
        fetchDeploymentFrequency();
    }, [repo]);

    return (
        <div style={{ height: 500, width: 700 }}>
            <h1>Deployment Frequency for {owner}/{repo}</h1>
            <p>Average Frequency: {frequencyData.averageFrequency.toFixed(2)}</p>
            <FrequencyLineChart data={frequencyData.graphData} />
        </div>
    );
}

export default DeploymentFrequency;