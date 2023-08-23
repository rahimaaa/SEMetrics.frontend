import React, { useEffect, useState } from "react";
import { ResponsiveBar } from "@nivo/bar"; // Import the bar chart component
import axios from "axios";

const CommitComplexityChart = ({ repo_name }) => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    const fetchComplexityData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/account/repos/complexity/${repo_name}`
        );
        console.log("Commit Complexity Data: ", response);
        setData(response.data.chartData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchComplexityData();
  }, [repo_name]);

  return (
    <div className="bg-slate-800 rounded-lg" style={{ height: "300px", width: "500px" }}>
      {data ? (
        <ResponsiveBar
          data={data}
          keys={["complexity"]} // Use "complexity" as the key
          indexBy="date" // Index the data by "date"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors={{ scheme: "nivo" }}
          borderColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            // legend: "Date", // Change the legend to "Date"
            legendPosition: "middle",
            legendOffset: 32,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            // legend: "Complexity", // Change the legend to "Complexity"
            legendPosition: "middle",
            legendOffset: -40,
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
          }}
          legends={[
            {
              dataFrom: "keys",
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: "left-to-right",
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          role="application"
          ariaLabel="Nivo bar chart demo"
          barAriaLabel={(e) =>
            e.id + ": " + e.formattedValue + " on Date: " + e.indexValue
          }
          theme={{
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
            legends: {
              text: {
                fill: "#9c9c9c",
              }
            }
          }}
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
