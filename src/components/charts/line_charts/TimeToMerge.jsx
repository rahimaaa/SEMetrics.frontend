import React, { useEffect, useState } from "react";
import { ResponsiveLine } from "@nivo/line";
import axios from "axios";

const TimeToMergeChart = ({ repo_name }) => {
  const [data, setData] = useState(undefined);
  const [avg, setAvg] = useState(Number(0).toFixed(2));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/account/repos/pulls/time-to-merge/${repo_name}`
        );
        console.log("Time to Merge Data: ", response);
        setData(response.data.chartDataFormatted);
        setAvg(response.data.averageTimeToMerge.toFixed(3));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

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
        Time To Merge
      </h1>
      <h1
        style={{
          position: "absolute",
          top: "40px",
          left: "40px",
          color: "white",
          zIndex: 5,
          fontSize: "1rem",
        }}
      >
        {avg}
      </h1>
      <h1
        style={{
          position: "absolute",
          top: "60px",
          left: "40px",
          color: "#BDBBBB",
          zIndex: 5,
          // fontWeight: "bold",
          fontSize: "1rem",
        }}
      >
        AVG/Times/Fortnight
      </h1>
      {data ? (
        <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 20, bottom: 50, left: 35 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          gridXValues={null}
          gridYValues={null}
          theme={{
            grid: {
              line: {
                stroke: "transparent", // Remove frame by setting line color to transparent
                strokeWidth: 0, // Set the line width to 0
              },
            },
            legends: {
              text: {
                fill: "white", // Change the legend text color
              },
            },
            lines: {
              line: {
                stroke: "hsl(240, 70%, 50%)", // Set the line color here
                strokeWidth: 2, // Adjust the line width as needed
              },
            },
            axis: {
              ticks: {
                text: {
                  fill: "white",
                },
              },
              domain: {
                line: {
                  stroke: "#9c9c9c",
                },
              },
            },
          }}
          // yFormat=" >-.2f"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "",
            legendOffset: 36,
            legendPosition: "middle",
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "",
            legendOffset: -40,
            legendPosition: "middle",
          }}
          colors={{ datum: "color" }}
          pointSize={10}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[]}
          borderWidth={0}
          //   enableSlices="x"
        />
      ) : (
        <>
          <div className="loading-container"></div>
        </>
      )}
    </div>
  );
};

export default TimeToMergeChart;
