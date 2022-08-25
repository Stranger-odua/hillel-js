import { configureStore } from '@reduxjs/toolkit';
import { todoApi } from './todoApi';
import footerReducer from './todoSlice';

export default configureStore({
    reducer: {
        [todoApi.reducerPath]: todoApi.reducer,
        footer: footerReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat((todoApi.middleware)),
});