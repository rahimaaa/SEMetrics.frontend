import React, { useEffect, useState } from "react";
import { ResponsiveBar } from "@nivo/bar"; // Import the bar chart component
import axios from "axios";

const CommitComplexityChart = ({ repo_name }) => {
  const [data, setData] = useState(undefined);
  const [keys, setKeys] = useState(undefined);

  useEffect(() => {
    const fetchComplexityData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/account/repos/complexity/${repo_name}`
        );
        console.log("Commit Complexity Data: ", response);
        setData(response.data.chartData);
        setKeys(response.data.keys);
      } catch (error) {
        console.log(error);
      }
    };
    fetchComplexityData();
  }, [repo_name]);

  // Define a color scale function
  const getColor = (id) => {
    const colorKey = `${id}Color`;
    return data.find((item) => item.commit === id)[colorKey];
  };

  return (
    <div style={{ height: "300px", width: "500px" }}>
      {data ? (
        <ResponsiveBar
          data={data}
          keys={keys}
          indexBy="commit"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors={({ id }) => getColor(id)} // Use the getColor function
          borderColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickValues: [], // Remove tick labels
            legend: "Commit", // Keep the x-axis title
            legendPosition: "middle",
            legendOffset: 15,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Commit Complexity",
            legendPosition: "middle",
            legendOffset: -50,
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
          }}
          role="application"
          ariaLabel="Nivo bar chart demo"
          barAriaLabel={(e) =>
            e.id + ": " + e.formattedValue + " on Commit: " + e.indexValue
          }
        />
      ) : (
        <>
          <p>Loading...</p>
        </>
      )}
    </div>
  );
};

export default CommitComplexityChart;
