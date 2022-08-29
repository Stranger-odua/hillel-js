import { configureStore } from '@reduxjs/toolkit';
import { todoApi } from './todoApi';
import { userApi } from './userApi';
import todoReducer from './todoSlice';
import userReducer from './userSlice';

export default configureStore({
    reducer: {
        user: userReducer,
        [userApi.reducerPath]: userApi.reducer,
        todo: todoReducer,
        [todoApi.reducerPath]: todoApi.reducer,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todoApi.middleware).concat(userApi.middleware),
});