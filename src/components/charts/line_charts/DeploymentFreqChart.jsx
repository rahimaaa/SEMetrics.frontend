import React, { useEffect, useState } from "react";
import { ResponsiveLine } from "@nivo/line";
import axios from "axios";

const DeploymentFreqChart = ({ repo_name }) => {
  const [data, setData] = useState(undefined);
  /*
    For reference - to remove grid and make the lines transparent

          gridXValues={null}
          gridYValues={null}
          theme={{
            grid: {
              line: {
                stroke: "transparent", // Remove frame by setting line color to transparent
                strokeWidth: 0, // Set the line width to 0
              },
            },
          }}


colors={{ datum: "color" }} -> to use the color provided in the data

*/
  useEffect(() => {
    const fetchDeploymentData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/account/repos/deployment-frequency/${repo_name}`
        );
        console.log("Deployment Data: ", response);
        setData(response.data.graphData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDeploymentData();
  }, []);

  return (
    <div className="bg-slate-800 rounded-lg" style={{ height: "300px", width: "500px" }}>
      {data ? (
        <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
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
                  fill: "#9c9c9c",
                }
              },
              domain: {
                line: {
                  stroke: "#9c9c9c",
                }
              }
            },
            tooltip: {
              color: "black",
            },
          }}
          yFormat=" >-.2f"
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
          <p>
            Here we should render a fake chart with a mini loading animation
          </p>
        </>
      )}
    </div>
  );
};

export default DeploymentFreqChart;
