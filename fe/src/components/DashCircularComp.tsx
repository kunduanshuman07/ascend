import React from 'react';
import ReactApexChart from 'react-apexcharts';

const DashCircularComp = () => {
  const options: any = {
    chart: {
      height: 250,
      type: 'radialBar',
    },
    colors: ["#EF8A5A"],
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: '16px',
            color: undefined,
            offsetY: 0,
          },
          value: {
            offsetY: 10,
            fontSize: '22px',
            color: "white",
            formatter: function (val: number) {
              return `${val}%`;
            },
          },
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91],
      },
    },
    stroke: {
      dashArray: 3,
    },
    labels: ['Progress'],
  };

  const series = [67];

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="radialBar" height={300} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default DashCircularComp;
