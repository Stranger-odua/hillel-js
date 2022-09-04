import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${ BASE_URL }`,
    }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => ({
                url: `/products`,
                method: 'GET',
            }),
        }),
        getSalads: builder.query({
            query: () => ({
                url: `/products/?path=salads`,
                method: 'GET',
            }),
        }),
        getSoups: builder.query({
            query: () => ({
                url: `/products/?path=soups`,
                method: 'GET',
            }),
        }),
        getChickenDishes: builder.query({
            query: () => ({
                url: `/products/?path=chickendishes`,
                method: 'GET',
            }),
        }),
        getBeefDishes: builder.query({
            query: () => ({
                url: `/products/?path=beefdishes`,
                method: 'GET',
            }),
        }),
        getSeafoodDishes: builder.query({
            query: () => ({
                url: `/products/?path=seafooddishes`,
                method: 'GET',
            }),
        }),
        getVegetableDishes: builder.query({
            query: () => ({
                url: `/products/?path=vegetabledishes`,
                method: 'GET',
            }),
        }),
        getBitsAndBites: builder.query({
            query: () => ({
                url: `/products/?path=bitsandbites`,
                method: 'GET',
            }),
        }),
        getOnTheSideDishes: builder.query({
            query: () => ({
                url: `/products/?path=ontheside`,
                method: 'GET',
            }),
        }),
    }),
});

export const {
    useGetAllProductsQuery,
    useGetSaladsQuery,
    useGetSoupsQuery,
    useGetChickenDishesQuery,
    useGetBeefDishesQuery,
    useGetSeafoodDishesQuery,
    useGetVegetableDishesQuery,
    useGetBitsAndBitesQuery,
    useGetOnTheSideDishesQuery,
} = productsApi;