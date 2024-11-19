import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const DashPieComp: React.FC = () => {
  const [chartState, setChartState] = useState<any>({
    series: [44, 55, 67],
    options: {
      chart: {
        height: 250,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '22px',
            },
            colors: ['#FFFFFF'],
            value: {
              fontSize: '16px',
            },
            total: {
              show: true,
              label: 'Total',
              formatter: () => 249,
              color: '#FFFFFF'
            },
          },
        },
      },
      labels: ['Basic', 'Intermediate', 'Advanced'],
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={chartState.options}
          series={chartState.series}
          type="radialBar"
          height={250}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default DashPieComp;
