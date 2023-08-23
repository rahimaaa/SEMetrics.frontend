import React, {useState, useEffect} from 'react'
import { ResponsiveLine } from "@nivo/line";
import axios from "axios";

/*
Test data
const data = [
    {
        id: 'main',
        color: '#009FE1',  // This color will be used for the line itself, not the shading.
        data: [
            { x: 'A', y: 2 },
            { x: 'B', y: 14 },
            { x: 'C', y: 5 },
            { x: 'D', y: 7 },
            { x: 'E', y: 9 },
            { x: 'F', y: 12 },
            { x: 'G', y: 4 },
            { x: 'H', y: 20 },
            { x: 'I', y: 25 },
            { x: 'J', y: 30 },
            { x: 'K', y: 1 },
            { x: 'L', y: 4 },
            { x: 'M', y: 2},
            { x: 'N', y: 9 },
            { x: 'O', y: 10 },
        ],
    },
];
*/
const MyCustomLayer = ({ series, xScale, yScale, innerHeight }) => {
  const generateAreaPath = (points, isGood) => {
    let path = `M ${xScale(points[0].data.x)} ${yScale(points[0].data.y)}`;
    for (let i = 1; i < points.length; i++) {
      path += ` L ${xScale(points[i].data.x)} ${yScale(points[i].data.y)}`;
    }

    if (isGood) {
      path += ` L ${xScale(points[points.length - 1].data.x)} ${yScale(15)}`;//Note: for testing 15 is good time if over 15hour sits blue and not elite
      path += ` L ${xScale(points[0].data.x)} ${yScale(5)}`;
    } else {
      path += ` L ${xScale(points[points.length - 1].data.x)} ${innerHeight}`;
      path += ` L ${xScale(points[0].data.x)} ${innerHeight}`;
    }
    path += " Z";
    return path;
  };

  return (
    <g>
      <path d={generateAreaPath(series[0].data, false)} fill="#00D789" />
      <path d={generateAreaPath(series[0].data, true)} fill="#009FE1" />
    </g>
  );
};
//for better testting use the  data array provided above because if repo dont have many dpeloyments graph wont be diverse
export default function LeadTimeForChange({ repo_name }) {
    const [data, setData] = useState(undefined);
    useEffect(() => {
        const fetchLeadTimeData = async () => {
          try {
            const response = await axios.get(
              `${process.env.REACT_APP_BACKEND_URL}/account/repos/lead_time/${repo_name}`
            );
            console.log("Leadtime Data: ", response);
            // Sort data points by date in ascending order
            const sortedData = response.data.map((item) => ({
              ...item,
              data: item.data.sort((a, b) => new Date(a.x) - new Date(b.x)),
            }));
            
            setData(sortedData);
          } catch (error) {
            console.log(error);
          }
        };
        fetchLeadTimeData();
      
    }, [repo_name]);
    
    return (
      <div
      className="bg-slate-800 rounded-lg"
      style={{ height: "300px", width: "500px" }}
    >
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
                    stroke: "transparent",
                    strokeWidth: 0,
                },
            },
            legends: {
                text: {
                    fill: "white",
                },
            },
            lines: {
                line: {
                    stroke: "hsl(240, 70%, 50%)",
                    strokeWidth: 2,
                },
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
        pointSize={5}
        pointColors={{ from: 'dark'}}
        pointBorderWidth={2}
        pointBorderColors={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[]}
        borderWidth={0}
        enableArea={true}  // This enables the shaded area
        areaBaselineValue={5}  // This defines where the shaded area starts. You can adjust as needed.
        layers={['grid', 'axes', MyCustomLayer, 'lines', 'points', 'legends']}  // Add the 'areas' layer to your graph layers
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
}
