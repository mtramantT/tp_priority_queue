import { createSlice } from "@reduxjs/toolkit";
import { Thoughts } from "./Thoughts.types";

interface ThoughtsState {
    thoughts: Thoughts;
}

const initialState: ThoughtsState = {
    thoughts: [{
        value: '',
        category: 'Thoughts'
    }]
}


const todoSlice = createSlice({
    name: 'thoughts',
    initialState,
    reducers: {
        
    }
})