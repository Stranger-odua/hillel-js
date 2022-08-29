import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from './constants';

export const userApi = createApi({
    reducerPath: 'userApi',
    tagTypes: ['User'],
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: build => ({
        getToken: build.mutation({
            query: (email) => ({
                url: '/auth/login',
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: {value: email},
            }),
            // invalidatesTags: [{type: 'User', _id: 'LIST'}],
        }),
    }),
});

export const {useGetTokenMutation} = userApi;
