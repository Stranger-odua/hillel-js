import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: '',
        isUserAuthorise: false,
    },
    reducers: {
        setToken(state, action) {
            state.token = action.payload.token;
        },
        setAuthStatus(state, action) {
            state.isUserAuthorise = action.payload.isUserAuthorise;
        },
    },
});

export const {setToken, setAuthStatus} = userSlice.actions;

export default userSlice.reducer;