import { useContext } from 'react';
import AddItemView from '../AddItemVIew/AddItemView';
import { AppContext } from '../AppContextProvider/AppContextProvider';
import { IExpenseItemData } from '../../models/states/rootState';
import ItemView from '../ItemView/ItemView';
import { IOnAddExpenseItemViewData, AddItemViewType } from '../../models/props/AddItemView';
import { addExpensesItemAction, removeExpensesItemAction } from '../../redux/rootReducer/actions';
import { generateNewID } from '../../utils/utils';

const Expenses = () => {
    const context = useContext(AppContext);

    const handleAdd = (data: IOnAddExpenseItemViewData) => {
        context?.dispatch(
            addExpensesItemAction({
                category: data.category,
                name: data.name,
                sum: data.sum,
                date: data.dateString,
                id: generateNewID(context.state.expenses),
            })
        );
    };

    const handleClose = (id: number) => {
        context?.dispatch(removeExpensesItemAction(id));
    };

    return (
        <>
            <h1 className='part-heading'>Expenses</h1>
            {context?.state.expenses.length === 0 ? (
                <div>No expenses yet, add some!</div>
            ) : (
                context?.state.expenses.map((exp: IExpenseItemData) => (
                    <ItemView
                        category={exp.category}
                        key={exp.id}
                        name={exp.name}
                        sum={exp.sum}
                        dateString={exp.date}
                        onClose={() => handleClose(exp.id)}
                    />
                ))
            )}
            <AddItemView onAdd={handleAdd} type={AddItemViewType.expense} />
        </>
    );
};

export default Expenses;
