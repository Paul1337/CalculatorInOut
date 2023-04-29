import { CSSProperties, useState } from 'react';
import { IAddItemViewProps } from '../../models/props/AddItemView';

const contStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
};

const AddItemView = (props: IAddItemViewProps) => {
    const [category, setCategory] = useState('');
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
                    category:{' '}
                    <input type='text' value={category} onChange={(e) => setCategory(e.target.value)} />
                </div>
                <div>
                    name: <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    sum:{' '}
                    <input type='number' value={sum} onChange={(e) => setSum(Number(e.target.value))} />
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
