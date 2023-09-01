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

  const customTheme = {
    axis: {
      ticks: {
        text: {
          fill: "white", // Change axis label color to white
          fontSize: 14,
        },
      },
      legend: {
        text: {
          fill: "white", // Change legend text color to white
          fontSize: 14,
        },
      },
    },
  };

  return (
    <div
      className="bg-slate-800 rounded-lg"
      style={{
        height: "300px",
        width: "100%",
        position: "relative",
        backgroundColor: "#1B2746",
      }}
    >
      <h1
        style={{
          position: "absolute",
          top: "10px",
          left: "15px",
          color: "white",
          zIndex: 5,
          fontWeight: "bold",
          fontSize: "1.3rem",
        }}
      >
        Follow-On-Commit
      </h1>
      {data ? (
        <ResponsiveBar
          data={data}
          keys={keys}
          indexBy="PR"
          margin={{ top: 0, right: 50, bottom: 20, left: 80 }}
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
          axisBottom={null}
          axisLeft={null}
          labelSkipWidth={12}
          labelSkipHeight={12}
          gridXValues={null}
          gridYValues={null}
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
          theme={customTheme}
          role="application"
          ariaLabel="Nivo bar chart demo"
          barAriaLabel={(e) =>
            `PR ${e.id}: ${e.formattedValue} Follow-On Commits`
          }
        />
      ) : (
        <>
          <div className="loading-container"></div>
        </>
      )}
    </div>
  );
};

export default FollowOnCommitChart;
