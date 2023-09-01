import React, { useEffect, useState } from "react";
import { ResponsiveLine } from "@nivo/line";
import axios from "axios";

const PrIterationTimeChart = ({ repo_name }) => {
  const [data, setData] = useState(undefined);
  const [avg, setAvg] = useState(Number(0).toFixed(2));

  useEffect(() => {
    const fetchIterationTime = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/account/repos/pulls/iteration-time/${repo_name}`
        );
        console.log("PR Iteration Time Data: ", response);
        // Sort data points by date in ascending order
        const sortedData = response.data.chartData.map((item) => ({
          ...item,
          data: item.data.sort((a, b) => new Date(a.x) - new Date(b.x)),
        }));
        setData(sortedData);
        setAvg(response.data.averageTime);
      } catch (error) {
        console.log(error);
      }
    };
    fetchIterationTime();
  }, [repo_name]);

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
          left: "20px",
          color: "white",
          zIndex: 5,
          fontWeight: "bold",
          fontSize: "1.3rem",
        }}
      >
        Pull Request Iteration Time
      </h1>
      <h1
        style={{
          position: "absolute",
          top: "40px",
          left: "35px",
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
          left: "35px",
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
          margin={{ top: 60, right: 50, bottom: 60, left: 50 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: 0,
            max: 12,
            stacked: true,
            reverse: false,
            format: ".2~f",
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
            tooltip: {
              color: "black",
            },
          }}
          yFormat={(value) => value.toFixed(2)}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: -45,
            legend: "",
            legendOffset: 36,
            legendPosition: "middle",
          }}
          axisLeft={null}
          enableGridX={false}
          enableGridY={false}
          colors={{ datum: "color" }}
          pointSize={10}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[]}
          borderWidth={0}
        />
      ) : (
        <>
          <div className="loading-container"></div>
        </>
      )}
    </div>
  );
};

export default PrIterationTimeChart;
