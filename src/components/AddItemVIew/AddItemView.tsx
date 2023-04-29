import { CSSProperties, useState } from 'react';
import { AddItemViewType, AddItemViewPropsType } from '../../models/props/AddItemView';
import { ExpenseCategory, IncomeCategory } from '../../models/states/rootState';

const contStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
};

const AddItemView = (props: AddItemViewPropsType) => {
    const CategoryEnum = props.type == AddItemViewType.expense ? ExpenseCategory : IncomeCategory;

    const [category, setCategory] = useState(Object.values(CategoryEnum)[0]);
    const [name, setName] = useState('');
    const [sum, setSum] = useState(0);
    const [date, setDate] = useState('');

    const handleAddClick = () => {
        props.onAdd({
            category,
            name,
            sum,
            dateString: date,
        });
    };

    return (
        <div style={contStyle}>
            <div>
                <div>
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        {Object.values(CategoryEnum).map((value) => (
                            <option key={value} value={value}>
                                {value}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    name: <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    sum:{' '}
                    <input
                        type='number'
                        value={sum.toString()}
                        onChange={(e) => setSum(Number(e.target.value))}
                    />
                </div>
                <div>
                    date:
                    <input type='date' value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
            </div>
            <button onClick={handleAddClick}>Add</button>
        </div>
    );
};

export default AddItemView;
