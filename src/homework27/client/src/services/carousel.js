import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';

export const carouselApi = createApi({
    reducerPath: 'carouselApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${ BASE_URL }`,
    }),
    endpoints: (builder) => ({
        getCarouselSlides: builder.query({
            query: () => ({
                url: `/carousel`,
                method: 'GET',
            }),
        }),
    }),
});

export const {
    useGetCarouselSlidesQuery,
} = carouselApi;