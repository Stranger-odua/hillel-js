import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        filter: 'all',
    },
    reducers: {
        setFilter(state, action) {
            state.filter = action.payload.filter;
        },
    },
});

export const {setFilter} = todoSlice.actions;

export default todoSlice.reducer;