export enum ExpenseCategory {
    Food = 'food',
    Entertaiment = 'entertaiment',
    OnlineServices = 'online services',
    BuyingThings = 'buying things',
}

export enum IncomeCategory {
    work = 'work',
    scholarship = 'scholarship',
    investing = 'investing',
    byChange = 'by chance',
}

export interface IItemData {
    name: string;
    sum: number;
    date: string;
    id: number;
}

export interface IExpenseItemData extends IItemData {
    category: ExpenseCategory;
}

export interface IIncomesItemData extends IItemData {
    category: IncomeCategory;
}

export interface IItems {
    expenses: IExpenseItemData[];
    incomes: IIncomesItemData[];
}

export interface IState extends IItems {
    dataIsLoaded: boolean;
}
