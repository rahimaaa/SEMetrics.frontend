import React, { useEffect, useState } from "react";
import { ResponsivePie } from "@nivo/pie";
import axios from "axios";

const UnreviewedPullRequestChart = ({ repo_name }) => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    const fetchtData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/account/repos/pulls/unreview-pr/${repo_name}`
        );
        console.log("Unreviewed Pull Request Data: ", response);
        setData(response.data.chartData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchtData();
  }, []);

  const customColorGenerator = (data) =>
    data.label === "Total Pull Requests" ? "#02DBFE" : "#00B4FF";

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
        Unreview Pull Request
      </h1>
      <div
        style={{
          position: "absolute",
          top: "40px",
          left: "15px",
          // color: "white",
          zIndex: 5,
          // fontWeight: "bold",
          // fontSize: "1.3rem",
        }}
      >
        <div className="dot-container">
          <div className="light-dot"></div>
          <h1>Total Pull Request</h1>
        </div>
        <div>
          <div className="dot-container">
            <div className="dark-dot"></div>
            <h1>Unreview Pull Request</h1>
          </div>
        </div>
      </div>
      {data ? (
        <ResponsivePie
          data={data}
          margin={{ top: 90, right: 80, bottom: 0, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          colors={customColorGenerator} // Use the custom color generator
          borderColor="white"
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor={customColorGenerator}
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={customColorGenerator} // Use the custom color generator
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={customColorGenerator} // Change to your preferred label color
          arcLinkLabels={(arc) => `${arc.value}`} // Display value on hover
          arcLinkLabel={(arc) => `${arc.value}`}
          arcLabel={() => ""}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          //   legends={[
          //     {
          //       anchor: "top-left",
          //       direction: "column",
          //       justify: false,
          //       translateX: 0,
          //       translateY: 56,
          //       itemsSpacing: 10,
          //       itemWidth: 100,
          //       itemHeight: 18,
          //       itemTextColor: "#999", // Change to your preferred legend text color
          //       itemDirection: "left-to-right",
          //       itemOpacity: 1,
          //       symbolSize: 18,
          //       symbolShape: "circle",
          //       effects: [
          //         {
          //           on: "hover",
          //           style: {
          //             itemTextColor: "#000",
          //           },
          //         },
          //       ],
          //     },
          //   ]}
        />
      ) : (
        <>
          <div className="loading-container"></div>
        </>
      )}
    </div>
  );
};

export default UnreviewedPullRequestChart;
