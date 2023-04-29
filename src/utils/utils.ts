import { IItemData } from '../models/states/rootState';

export function generateNewID(items: IItemData[]) {
    let max = -1;
    for (const item of items) if (item.id > max) max = item.id;
    return max + 1;
}
