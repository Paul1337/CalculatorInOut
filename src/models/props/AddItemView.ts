import { ExpenseCategory, IncomeCategory } from '../states/rootState';

export interface IOnAddItemViewData {
    name: string;
    sum: number;
    dateString: string;
}

export interface IOnAddExpenseItemViewData extends IOnAddItemViewData {
    category: ExpenseCategory;
}

export interface IOnAddIncomeItemViewData extends IOnAddItemViewData {
    category: IncomeCategory;
}

export enum AddItemViewType {
    income,
    expense,
}

export interface IAddExpenseItemViewProps {
    onAdd: (data: IOnAddExpenseItemViewData) => void;
    type: AddItemViewType.expense;
}
export interface IAddIncomeItemViewProps {
    onAdd: (data: IOnAddIncomeItemViewData) => void;
    type: AddItemViewType.income;
}

export type AddItemViewPropsType = IAddExpenseItemViewProps | IAddIncomeItemViewProps;
