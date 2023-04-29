import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, PieController } from 'chart.js/auto';
import type { ChartData, ChartOptions } from 'chart.js';
import { CSSProperties, useContext } from 'react';
import { AppContext } from '../AppContextProvider/AppContextProvider';
import {
    ExpenseCategory,
    IExpenseItemData,
    IIncomesItemData,
    IncomeCategory,
} from '../../models/states/rootState';

ChartJS.register(PieController);

const contStyle: CSSProperties = {
    width: '70%',
    margin: '0 auto',
};

const GraphOptions: ChartOptions<'pie'> = {};

interface ExpenseChartData {
    Category: typeof ExpenseCategory;
    items: IExpenseItemData[];
}

interface IncomesChartData {
    Category: typeof IncomeCategory;
    items: IIncomesItemData[];
}

const getChartData = ({ Category, items }: ExpenseChartData | IncomesChartData): ChartData<'pie'> => ({
    labels: Object.values(Category),
    datasets: [
        {
            label: 'Sum',
            data: Object.values(Category).map((value) =>
                items.filter((item) => item.category === value).reduce((acc, cur) => acc + cur.sum, 0)
            ),
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(0, 240, 0)',
            ],
            hoverOffset: 4,
        },
    ],
});

const Report = () => {
    const context = useContext(AppContext);

    if (!context) return;

    const expensesChartData: ChartData<'pie'> = getChartData({
        Category: ExpenseCategory,
        items: context?.state.expenses,
    });

    const incomesChartData: ChartData<'pie'> = getChartData({
        Category: IncomeCategory,
        items: context?.state.incomes,
    });

    return (
        <>
            <h1 className='part-heading'>Report</h1>
            <div style={contStyle}>
                <div>
                    <h3>Expenses:</h3>
                    <Pie data={expensesChartData} options={GraphOptions} />
                </div>
                <div>
                    <h3>Incomes:</h3>
                    <Pie data={incomesChartData} options={GraphOptions} />
                </div>
            </div>
        </>
    );
};

export default Report;
