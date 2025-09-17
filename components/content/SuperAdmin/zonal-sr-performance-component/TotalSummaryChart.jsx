import React from 'react'
import Chart from 'react-apexcharts';

const TotalSummaryChart = () => {
    const barChartSeries = [
        {
            name: 'Total Sale',
            data: [145, 86, 56, 156, 76, 178, 156],
        },
    ];
    const barChartOptions = {
        chart: {
            type: 'bar',
            toolbar: { show: false },
        },
        plotOptions: {
            bar: {
                columnWidth: '50%',
            },
        },
        xaxis: {
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        dataLabels: {
            enabled: false,
        },
    };
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex justify-between items-center">
                <div className="text-xl font-bold">৳256,002 <span className="text-sm font-medium text-gray-500">Total Sale</span></div>
                <select className="border rounded px-2 py-1 text-sm">
                    <option>Weekly</option>
                </select>
            </div>
            <Chart options={barChartOptions} series={barChartSeries} type="bar" height={140} />
        </div>
    )
}

export default TotalSummaryChart
