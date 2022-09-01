import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
    },
    reducers: {
        setFilter(state, action) {
            state.filter = action.payload.filter;
        },
    },
});

export const {setFilter} = productsSlice.actions;

export default productsSlice.reducer;