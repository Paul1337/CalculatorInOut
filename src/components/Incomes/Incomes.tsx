import { useContext } from 'react';
import AddItemView from '../AddItemVIew/AddItemView';
import { AppContext } from '../AppContextProvider/AppContextProvider';
import { IItemData } from '../../models/states/rootState';
import ItemView from '../ItemView/ItemView';
import { IOnAddItemViewData } from '../../models/props/AddItemView';
import { addIncomesItemAction, removeIncomesItemAction } from '../../redux/rootReducer/actions';
import { generateNewID } from '../../utils/utils';

const Incomes = () => {
    const context = useContext(AppContext);

    const handleAdd = (data: IOnAddItemViewData) => {
        context?.dispatch(
            addIncomesItemAction({
                category: data.category,
                name: data.name,
                sum: data.sum,
                date: data.dateString,
                id: generateNewID(context.state.incomes),
            })
        );
    };

    const handleClose = (id: number) => {
        context?.dispatch(removeIncomesItemAction(id));
    };

    return (
        <>
            <h1 className='part-heading'>Incomes</h1>
            {context?.state.incomes.length === 0 ? (
                <div>No incomes yet, add some!</div>
            ) : (
                context?.state.incomes.map((exp: IItemData) => (
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
            <AddItemView onAdd={handleAdd} />
        </>
    );
};

export default Incomes;
