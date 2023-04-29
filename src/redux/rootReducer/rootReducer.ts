import { IState } from '../../models/states/rootState';
import { Actions } from './actions';
import { ActionType } from '../../models/actions/rootReducer/actions';

export const initialState: IState = {
    expenses: [],
    incomes: [],
    dataIsLoaded: false,
};

const reducer = (state: IState, action: ActionType) => {
    console.log('Reducer is called :)');

    switch (action.type) {
        case Actions.LOAD_ITEMS:
            return {
                expenses: action.payload.expenses,
                incomes: action.payload.incomes,
                dataIsLoaded: true,
            };

        case Actions.ADD_EXPENSES_ITEM:
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            };

        case Actions.REMOVE_EXPENSES_ITEM:
            return {
                ...state,
                expenses: state.expenses.filter((exp) => exp.id !== action.payload),
            };

        case Actions.ADD_INCOMES_ITEM:
            return {
                ...state,
                incomes: [...state.incomes, action.payload],
            };

        case Actions.REMOVE_INCOMES_ITEM:
            return {
                ...state,
                incomes: state.incomes.filter((income) => income.id !== action.payload),
            };

        default:
            return state;
    }
};

export default reducer;
