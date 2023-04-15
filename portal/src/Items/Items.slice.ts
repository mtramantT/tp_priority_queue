// Item Slice

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from './Items.types';

interface ItemsState {
    items: Item[];
}

const initialState: ItemsState = {
    items: [{
        id: 0,
        category: 'Thoughts',
        thought: 'This is a thought'
    }]
}

const itemSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Item>) => {
            state.items.push(action.payload);
        }
    }
})

export const { addItem } = itemSlice.actions;
export default itemSlice.reducer;
