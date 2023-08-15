import React from "react";
import { ResponsiveLine } from "@nivo/line";

const FrequencyLineChart = ({ data }) => {
    return (
        <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 110, bottom: 200, left: 60 }}
            xScale={{
                type: 'time',
                format: '%Y-%m-%d',
                useUTC: false,
                precision: 'day',
            }}
            axisBottom={{
                format: '%b %d',
                tickValues: 'every 1 month',
            }}
            curve="monotoneX"
            axisTop={null}
            axisRight={null}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'frequency',
                legendOffset: -40,
                legendPosition: 'middle',
                tickColor: 'white'
            }}
            enableGridX={false}  // Disable horizontal grid lines
            enableGridY={false}  // Disable vertical grid lines
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            useMesh={true}
            colors={d => d.color}
        />

    );
}

export default FrequencyLineChart;