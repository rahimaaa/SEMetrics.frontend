import React, { useEffect, useState } from "react";
import { ResponsivePie } from "@nivo/pie";
import axios from "axios";

const LegacyRefactorChart = ({ repo_name }) => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    const fetchImpactData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/account/repos/legacy-refactor/${repo_name}`
        );
        console.log("Legacy Refractor Data: ", response);
        setData(response.data.chartData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchImpactData();
  }, []);

  const customColorGenerator = (data) =>
    data.label === "commits affecting code" ? "#02DBFE" : "#00B4FF";
  return (
    <div className="bg-slate-800 rounded-lg" style={{ height: "300px", width: "500px" }}>
      {data ? (
        <ResponsivePie
          data={data}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
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
          theme={{
            tooltip: {
              color: "black",
            },
          }}

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

export default LegacyRefactorChart;
