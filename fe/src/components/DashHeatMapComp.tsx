import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

interface SeriesData {
  name: string;
  data: number[];
}

const generateData = (count: number, { min, max }: { min: number, max: number }): number[] => {
  return Array.from({ length: count }, () => Math.floor(Math.random() * (max - min + 1)) + min);
};

const DashHeatMapComp = () => {
  const [series] = useState<SeriesData[]>([
    { name: 'Metric1', data: generateData(18, { min: 0, max: 90 }) },
    { name: 'Metric2', data: generateData(18, { min: 0, max: 90 }) },
    { name: 'Metric3', data: generateData(18, { min: 0, max: 90 }) },
    { name: 'Metric4', data: generateData(18, { min: 0, max: 90 }) },
    { name: 'Metric5', data: generateData(18, { min: 0, max: 90 }) },
    { name: 'Metric6', data: generateData(18, { min: 0, max: 90 }) },
    { name: 'Metric7', data: generateData(18, { min: 0, max: 90 }) },
    { name: 'Metric8', data: generateData(18, { min: 0, max: 90 }) },
    { name: 'Metric9', data: generateData(18, { min: 0, max: 90 }) }
  ]);

  const [options]: any = useState({
    chart: {
      height: 250,
      type: 'heatmap',
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false
    },
    colors: ["#047025"],
    yaxis: {
      show: false,
    },
    xaxis: {
      labels: {
        style: {
          colors: "#FFFFFF",
        },
      },
    },
    grid: {
      show: false,
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="heatmap" height={250} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default DashHeatMapComp;
