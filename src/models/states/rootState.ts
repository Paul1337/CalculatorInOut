export interface IItemData {
    category: string;
    name: string;
    sum: number;
    date: string;
    id: number;
}

export interface IItems {
    expenses: IItemData[];
    incomes: IItemData[];
}

export interface IState {
    expenses: IItemData[];
    incomes: IItemData[];
    dataIsLoaded: boolean;
}
