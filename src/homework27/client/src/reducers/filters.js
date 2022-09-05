import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        filters: {
            spiciness: 4,
            noNuts: false,
            vegeterianOnly: false,
        },
        stepSlider: {
            dragging: false,
        },
    },
    reducers: {
        setSpicinessFilter(state, action) {
            state.filters.spiciness = action.payload.spiciness;
        },
        setNutsFilter(state, action) {
            state.filters.noNuts = action.payload.noNuts;
        },
        setVegeterianFilter(state, action) {
            state.filters.vegeterianOnly = action.payload.vegeterianOnly;
        },
        setDragging(state, action) {
            state.stepSlider.dragging = action.payload.dragging;
        },
    },
});

export const {setSpicinessFilter, setNutsFilter, setVegeterianFilter, setDragging} = filtersSlice.actions;

export default filtersSlice.reducer;