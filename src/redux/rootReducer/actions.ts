import { ActionType } from '../../models/actions/rootReducer/actions';
import { IItemData, IItems } from '../../models/states/rootState';

export enum Actions {
    ADD_INCOMES_ITEM = 'ADD_INCOMES_ITEM',
    ADD_EXPENSES_ITEM = 'ADD_EXPENSES_ITEM',
    REMOVE_INCOMES_ITEM = 'REMOVE_INCOMES_ITEM',
    REMOVE_EXPENSES_ITEM = 'REMOVE_EXPENSES_ITEM',
    LOAD_ITEMS = 'LOAD_ITEMS',
}

export const addIncomesItemAction = (payload: IItemData): ActionType => {
    return {
        type: Actions.ADD_INCOMES_ITEM,
        payload,
    };
};

export const removeIncomesItemAction = (payload: number): ActionType => {
    return {
        type: Actions.REMOVE_INCOMES_ITEM,
        payload,
    };
};

export const addExpensesItemAction = (payload: IItemData): ActionType => {
    return {
        type: Actions.ADD_EXPENSES_ITEM,
        payload,
    };
};

export const removeExpensesItemAction = (payload: number): ActionType => {
    return {
        type: Actions.REMOVE_EXPENSES_ITEM,
        payload,
    };
};

export const loadItemsAction = (payload: IItems): ActionType => {
    return {
        type: Actions.LOAD_ITEMS,
        payload,
    };
};
