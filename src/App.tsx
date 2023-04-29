import { Routes, Route, Navigate } from 'react-router-dom';
import Expenses from './components/Expenses/Expenses';
import Incomes from './components/Incomes/Incomes';
import Report from './components/Report/Report';
import Nav from './components/Nav/Nav';

const AppNavigation = [
    {
        to: 'incomes',
        text: 'incomes',
    },
    {
        to: 'expenses',
        text: 'expenses',
    },
    {
        to: 'report',
        text: 'report',
    },
];

function App() {
    return (
        <>
            <Nav navigation={AppNavigation} />
            <Routes>
                <Route path='/expenses' element={<Expenses />} />
                <Route path='/incomes' element={<Incomes />} />
                <Route path='/report' element={<Report />} />
                <Route path='*' element={<Navigate to='/incomes' />} />
            </Routes>
        </>
    );
}

export default App;
