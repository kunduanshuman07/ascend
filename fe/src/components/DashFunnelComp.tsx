import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const DashFunnelComp = () => {
    const [chartState, setChartState] = useState<any>({
        series: [
            {
                name: "",
                data: [500, 330, 548, 240, 880, 990, 1000],
            },
        ],
        options: {
            chart: {
                type: 'bar',
                height: 250,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    borderRadius: 0,
                    horizontal: true,
                    distributed: true,
                    barHeight: '80%',
                    isFunnel: true,
                },
            },
            colors: [
                '#F44F5E',
                '#E55A89',
                '#D863B1',
                '#CA6CD8',
                '#B57BED',
                '#8D95EB',
                '#62ACEA',
            ],
            dataLabels: {
                enabled: true,
                formatter: function (val: any, opt: any) {
                    return opt.w.globals.labels[opt.dataPointIndex];
                },
                dropShadow: {
                    enabled: true,
                },
            },
            xaxis: {
                categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            },
            legend: {
                show: false,
            },
        },
    })

    return (
        <div>
            <div id="chart">
                <ReactApexChart options={chartState.options} series={chartState.series} type="bar" height={250} />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default DashFunnelComp;
