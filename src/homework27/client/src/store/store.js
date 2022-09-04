import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { productsApi } from '../services/products';
import { carouselApi } from '../services/carousel';
import { ribbonArrowApi } from '../services/ribbonArrow';
import carouselSlice from '../reducers/carousel';
import ribbonMenuSlice from '../reducers/ribbonMenu';
import filtersSlice from '../reducers/filters';
import cartSlice from '../reducers/cart';

export const store = configureStore({
    reducer: {
        [ribbonArrowApi.reducerPath]: ribbonArrowApi.reducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [carouselApi.reducerPath]: carouselApi.reducer,
        carousel: carouselSlice,
        ribbonMenu: ribbonMenuSlice,
        filters: filtersSlice,
        cart: cartSlice,
    },
    middleware: (getDefaultMiddle) =>
        getDefaultMiddle()
            .concat(ribbonArrowApi.middleware)
            .concat(productsApi.middleware)
            .concat(carouselApi.middleware),
});

setupListeners(store.dispatch);