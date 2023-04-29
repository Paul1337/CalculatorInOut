import { Actions } from '../../../redux/rootReducer/actions';
import { IExpenseItemData, IIncomesItemData, IItems } from '../../states/rootState';
export interface IAddExpensesItem {
    type: Actions.ADD_EXPENSES_ITEM;
    payload: IExpenseItemData;
}

export interface IRemoveExpensesItem {
    type: Actions.REMOVE_EXPENSES_ITEM;
    payload: number;
}

export interface IAddIncomesItem {
    type: Actions.ADD_INCOMES_ITEM;
    payload: IIncomesItemData;
}

export interface IRemoveIncomesItem {
    type: Actions.REMOVE_INCOMES_ITEM;
    payload: number;
}

export interface ILoadItems {
    type: Actions.LOAD_ITEMS;
    payload: IItems;
}

export type ActionType =
    | IAddExpensesItem
    | IRemoveExpensesItem
    | IAddIncomesItem
    | IRemoveIncomesItem
    | ILoadItems;
