import React, { useEffect, useState } from "react";
import { ResponsiveBar } from "@nivo/bar"; // Import the bar chart component
import axios from "axios";

const FollowOnCommitChart = ({ repo_name }) => {
  const [data, setData] = useState(undefined);
  const [keys, setKeys] = useState(undefined);

  useEffect(() => {
    const fetchComplexityData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/account/repos/pulls/follow-on-commits/${repo_name}`
        );
        console.log("Follow On Commit Data: ", response);
        setData(response.data.chartData);
        setKeys(response.data.keys);
      } catch (error) {
        console.log(error);
      }
    };
    fetchComplexityData();
  }, [repo_name]);

  const getColor = (id) => {
    const colorKey = `${id}Color`;
    const item = data.find((item) => item.hasOwnProperty(id));

    if (item) {
      return item[colorKey];
    } else {
      // Return a default color if the item is not found
      return "hsl(0, 0%, 50%)"; // You can set any default color you prefer
    }
  };

  return (
    <div style={{ height: "300px", width: "500px" }}>
      {data ? (
        <ResponsiveBar
          data={data}
          keys={keys}
          indexBy="PR"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.1}
          valueScale={{
            type: "linear",
            max: 20, // Set your desired maximum value here
          }}
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
            legend: "Pull Request", // Keep the x-axis title
            legendPosition: "middle",
            legendOffset: 15,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Follow-On-Commit",
            legendPosition: "middle",
            legendOffset: -50,
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
          }}
          tooltip={({ id, value, data }) => (
            <div style={{ background: "white", padding: "5px" }}>
              <strong>{`${data.PR} - `}</strong>
              Follow-On Commits: {value}
            </div>
          )}
          role="application"
          ariaLabel="Nivo bar chart demo"
          barAriaLabel={(e) =>
            `PR ${e.id}: ${e.formattedValue} Follow-On Commits`
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

export default FollowOnCommitChart;
