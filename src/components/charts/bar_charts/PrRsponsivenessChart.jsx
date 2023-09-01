import React, { useEffect, useState } from "react";
import { ResponsiveBar } from "@nivo/bar"; // Import the bar chart component
import axios from "axios";

const PrResponsivenessChart = ({ repo_name }) => {
  const [data, setData] = useState(undefined);
  const [keys, setKeys] = useState(undefined);

  useEffect(() => {
    const fetchComplexityData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/account/repos/pulls/responsiveness/${repo_name}`
        );
        console.log("PR Responsiveness Data: ", response);
        setData(response.data.chartData);
        setKeys(response.data.keys);
      } catch (error) {
        console.log(error);
      }
    };
    fetchComplexityData();
  }, [repo_name]);

  const customTheme = {
    axis: {
      ticks: {
        text: {
          fill: "white", // Change axis label color to white
          fontSize: 14,
        },
        domain: {
          line: {
            stroke: "transparent",
          },
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

  const getColor = (id) => {
    const colorKey = `${id}Color`;
    const item = data.find((item) => item.hasOwnProperty(id));

    if (item) {
      return item[colorKey];
    } else {
      return "hsl(0, 0%, 50%)";
    }
  };

  return (
    <div
      className="rounded-lg"
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
        Pull Request Responsiveness
      </h1>
      {data ? (
        <ResponsiveBar
          data={data}
          keys={keys}
          indexBy="PR"
          margin={{ top: -10, right: 30, bottom: 20, left: 80 }}
          padding={0.1}
          valueScale={{
            type: "linear",
            max: 36,
          }}
          indexScale={{ type: "band", round: true }}
          colors={({ id }) => getColor(id)}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0]],
          }}
          borderWidth={0}
          axisTop={null}
          axisRight={null}
          axisBottom={null} // Remove axisBottom
          axisLeft={null} // Remove axisLeft
          gridXValues={null}
          gridYValues={null}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={"white"}
          tooltip={({ id, value, data }) => (
            <div style={{ background: "white", padding: "5px" }}>
              <strong>{`${data.PR} - `}</strong>
              AVG Responsiveness: {value}
            </div>
          )}
          role="application"
          ariaLabel="Nivo bar chart demo"
          barAriaLabel={(e) =>
            `PR ${e.id}: ${e.formattedValue} Follow-On Commits`
          }
          theme={customTheme}
        />
      ) : (
        <>
          <div className="loading-container"></div>
        </>
      )}
    </div>
  );
};

export default PrResponsivenessChart;
