import { CSSProperties, useState } from 'react';
import { AddItemViewType, AddItemViewPropsType } from '../../models/props/AddItemView';
import { ExpenseCategory, IncomeCategory } from '../../models/states/rootState';
import styles from './AddItemView.module.css';

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
        <div className={styles.formCont}>
            <div className={styles.form}>
                <div className={styles.formRow}>
                    category:
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        {Object.values(CategoryEnum).map((value) => (
                            <option key={value} value={value}>
                                {value}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={styles.formRow}>
                    name: <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className={styles.formRow}>
                    sum:{' '}
                    <input
                        type='number'
                        value={sum.toString()}
                        onChange={(e) => setSum(Number(e.target.value))}
                    />
                </div>
                <div className={styles.formRow}>
                    date:
                    <input type='date' value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
            </div>
            <button onClick={handleAddClick} className={styles.formButton}>
                Add
            </button>
        </div>
    );
};

export default AddItemView;
