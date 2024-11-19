import React from "react";
import ReactApexChart from "react-apexcharts";

const DashLineComp = () => {
  const options: any = {
    chart: {
      height: 250,
      type: "line",
      toolbar: {
        show: false, 
      },
      zoom: {
        enabled: true,
      },
    },
    colors: ["#15CAB6"],
    tooltip: {
      enabled: true,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    grid: {
      row: {
        colors: ["#000000"],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
      labels: {
        style: {
          colors: "#FFFFFF",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#FFFFFF",
        },
      },
    },
  };

  const series = [
    {
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
  ];

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="line" height={250} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default DashLineComp;
