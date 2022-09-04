import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';

export const ribbonArrowApi = createApi({
    reducerPath: 'ribbonArrowApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${ BASE_URL }`,
    }),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => ({
                url: `/categories`,
                method: 'GET',
            }),
        }),
        getPaths: builder.query({
            query: () => ({
                url: `/paths`,
                method: 'GET',
            }),
        }),
    }),
});

export const {
    useGetCategoriesQuery,
    useGetPathsQuery,
} = ribbonArrowApi;