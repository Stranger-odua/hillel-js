import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { productsApi } from '../services/products';
import productsSlice from '../reducers/products';

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        productsSlice,
    },
    middleware: (getDefaultMiddle) =>
        getDefaultMiddle().concat(productsApi.middleware),
});

setupListeners(store.dispatch);