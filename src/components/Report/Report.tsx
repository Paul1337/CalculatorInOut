import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, PieController } from 'chart.js/auto';
import type { ChartData, ChartOptions } from 'chart.js';
import { CSSProperties, useContext } from 'react';
import { AppContext } from '../AppContextProvider/AppContextProvider';

ChartJS.register(PieController);

const contStyle: CSSProperties = {
    width: '70%',
    margin: '0 auto',
};

const GraphOptions: ChartOptions<'pie'> = {
    // scales: {
    //     x: {
    //         type: 'linear',
    //     },
    //     y: {
    //         type: 'linear',
    //     },
    // },
};

const Report = () => {
    const context = useContext(AppContext);

    const chartData: ChartData<'pie'> = {
        labels: ['Red', 'Blue', 'Green'],
        datasets: [
            {
                label: 'Sum',
                data: [300, 70, 100],
                backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
                hoverOffset: 4,
            },
        ],
    };

    return (
        <>
            <h1 className='part-heading'>Chart</h1>
            <div style={contStyle}>
                <Pie data={chartData} options={GraphOptions} />
            </div>
        </>
    );
};

export default Report;
