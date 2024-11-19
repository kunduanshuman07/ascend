import React from 'react';
import ReactApexChart from 'react-apexcharts';

const DashStackedBarComp = () => {
  const [series] = React.useState([
    {
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    },
    {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    },
  ]);

  const [options]: any = React.useState({
    chart: {
      type: 'bar',
      height: 250,
      toolbar: {
        show: false
      }
    },
    colors: ['#287E8F', '#F6B53D'],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      labels: {
        style: {
          colors: "#FFFFFF",
        },
      },
    },
    yaxis: {
      title: {
        text: 'hours'
      },
      labels: {
        style: {
          colors: "#FFFFFF",
        },
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    grid: {
      show: false,
    },
    fill: {
      opacity: 1,
    },
    legend: {
      show: false,
    },
    tooltip: {
      y: {
        formatter: (val: any) => `$ ${val} thousands`
      }
    }
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="bar" height={250} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default DashStackedBarComp;

