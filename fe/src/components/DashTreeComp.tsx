import React from 'react';
import ReactApexChart from 'react-apexcharts';

const DashTreeComp = () => {
    const series = [
        {
            data: [
                { x: 'ReactJS', y: 218 },
                { x: 'C++', y: 149 },
                { x: 'Rust', y: 184 },
                { x: 'Data Analytics', y: 55 },
                { x: 'Golang', y: 84 },
                { x: 'Python', y: 31 },
                { x: 'C#', y: 70 },
                { x: 'Javascript', y: 30 },
                { x: 'C', y: 44 },
                { x: 'UI/UX', y: 68 },
            ]
        }
    ];

    const options: any = {
        legend: {
            show: false
        },
        chart: {
            height: 250,
            type: 'treemap',
            toolbar: {
                show: false
            }
        },
        colors: [
            '#3B93A5',
            '#F7B844',
            '#ADD8C7',
            '#EC3C65',
            '#CDD7B6',
            '#C1F666',
            '#D43F97',
            '#1E5D8C',
            '#421243',
            '#7F94B0',
        ],
        plotOptions: {
            treemap: {
                distributed: true,
                enableShades: false
            }
        }
    };

    return (
        <div>
            <div id="chart">
                <ReactApexChart options={options} series={series} type="treemap" height={250} />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default DashTreeComp;