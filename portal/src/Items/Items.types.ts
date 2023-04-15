// Items Type file

import { isObject } from "../types";

export interface Item {
    id: number;
    category: string;
    thought: string;
}

export const isItem = (val: any): val is Item => isObject<Item>(val);

export type Items = Item[];
