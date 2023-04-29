export interface IOnAddItemViewData {
    category: string;
    name: string;
    sum: number;
    dateString: string;
}

export interface IAddItemViewProps {
    onAdd: (data: IOnAddItemViewData) => void;
}
