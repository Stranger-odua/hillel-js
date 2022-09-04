import { createSlice } from '@reduxjs/toolkit';

const carouselSlice = createSlice({
    name: 'carousel',
    initialState: {
        activeSlideId: 0,
    },
    reducers: {
        setActiveSlide(state, action) {
            state.activeSlideId = action.payload.activeSlideId;
        },
    },
});

export const {setActiveSlide} = carouselSlice.actions;

export default carouselSlice.reducer;