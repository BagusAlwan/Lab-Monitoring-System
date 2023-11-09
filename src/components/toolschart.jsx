"use client";

import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

function ToolsChart({ data, chartType }) {
  const options = getChartOptions(data, chartType);

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

function getChartOptions(data, chartType) {
  const chartData = calculateChartData(data);

  return {
    chart: {
      type: chartType,
    },
    title: {
      text: "Tools Data",
    },
    xAxis: {
      categories: chartData.map((item) => item.tool), // X-axis represents available tools
      title: {
        text: "Tools",
      },
    },
    yAxis: {
      title: {
        text: "Accumulated Usage",
      },
    },
    series: [
      {
        name: "Accumulated Usage",
        data: chartData.map((item) => item.accumulatedUsage), // Y-axis represents the accumulated tool usage
      },
    ],
  };
}

function calculateChartData(data) {
  // Calculate the accumulated tool usage
  const toolUsageMap = new Map();
  data.forEach((entry) => {
    const tool = entry.alat;
    if (toolUsageMap.has(tool)) {
      toolUsageMap.set(tool, toolUsageMap.get(tool) + 1);
    } else {
      toolUsageMap.set(tool, 1);
    }
  });

  const chartData = Array.from(toolUsageMap, ([tool, count]) => ({
    tool,
    accumulatedUsage: count,
  }));

  return chartData;
}

export default ToolsChart;
