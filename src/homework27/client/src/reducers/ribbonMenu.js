import { createSlice } from '@reduxjs/toolkit';

const ribbonArrowSlice = createSlice({
    name: 'ribbonArrow',
    initialState: {
        position: 'left',
    },
    reducers: {
        changeShowingCategories(state, action) {
            const isClickedLeftArrow = action.payload.isClickedLeftArrow;
            state.position === 'center'
                ? isClickedLeftArrow ? state.position = 'left' : state.position = 'right'
                : state.position = 'center';
        },
    },
});

export const {changeShowingCategories} = ribbonArrowSlice.actions;

export default ribbonArrowSlice.reducer;