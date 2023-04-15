import { isObject } from "../types";

export interface Thought {
    value: string;
    category: string;
    tags?: [string];
    // type: string;
}

export const isThought = (val: any): val is Thought => isObject<Thought>(val);

export type Thoughts = Thought[];



