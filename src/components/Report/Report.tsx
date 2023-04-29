import { Chart } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    BubbleController,
    CategoryScale,
    LineController,
    ScatterController,
} from 'chart.js';
import type { ChartData, ChartOptions } from 'chart.js';

ChartJS.register(
    ScatterController,
    BubbleController,
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Title
);

const GraphOptions: ChartOptions = {
    scales: {
        x: {
            type: 'linear',
        },
        y: {
            type: 'linear',
        },
    },
};

const Report = () => {
    const chartData: ChartData = {
        datasets: [
            {
                label: 'Report',
                data: [300, 50, 100],
                backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
                hoverOffset: 4,
            },
        ],
        type: 'doughnut',
    };

    return (
        <div>
            <h1 className='part-heading'>Chart</h1>
            {/* <Chart data={chartData} options={GraphOptions} /> */}
        </div>
    );
};

export default Report;
