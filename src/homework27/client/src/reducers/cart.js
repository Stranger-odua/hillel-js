import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        showModal: false,
        products: [],
        dishesInsideCart: 0,
        totalOrderPrice: 0,
    },
    reducers: {
        // FIXME подумати над рефакторингом
        addProduct(state, action) {
            const isProduct = state.products.find((product) => product.id === action.payload.id);

            if ( !!isProduct && state.products.length > 0) {
                state.products.forEach((product) => {
                    if (product.id === action.payload.id) {
                        product.count += 1;
                        product.priceInAll = Math.floor((product.price * product.count) * 10) / 10;
                    }
                });

            } else {
                state.products.push({
                    id: action.payload.id,
                    name: action.payload.name,
                    price: action.payload.price,
                    count: 1,
                    priceInAll: action.payload.price,
                    imgPath: action.payload.imgPath,
                });
            }

            const totalOrderPrice = state.products.reduce((acc, product) => {
                acc += product.priceInAll;
                return acc;
            }, 0);

            state.totalOrderPrice = Math.floor(totalOrderPrice * 10) / 10;
            state.dishesInsideCart++;
        },
        // FIXME подумати над рефакторингом
        subtractProduct(state, action) {
            state.products.forEach((product) => {
                if (product.id === action.payload.id) {

                    if (product.count === 1) {
                        state.products = state.products.filter((product) => product.id !== action.payload.id);
                    } else {
                        product.count -= 1;
                        product.priceInAll = Math.floor((product.price * product.count) * 10) / 10;
                    }


                    const totalOrderPrice = state.products.reduce((acc, product) => {
                        acc += product.priceInAll;
                        return acc;
                    }, 0);
                    state.totalOrderPrice = Math.floor(totalOrderPrice * 10) / 10;
                }
            });

            state.dishesInsideCart -= 1;
            if ( !state.dishesInsideCart) {
                state.showModal = false;
            }
        },

        setCartModalShow(state, action) {
            state.showModal = action.payload;
        },
    },
});

export const {addProduct, subtractProduct, setCartModalShow} = cartSlice.actions;

export default cartSlice.reducer;