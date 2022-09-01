import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${ process.env.REACT_APP_BASE_URL }`,
    }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: `/products`,
                method: 'GET',
            }),
        }),


        getPostById: builder.query({
            query: (id) => ({
                url: `posts/${ id }`,
                method: 'GET',
            }),
        }),
        createPost: builder.mutation({
            query: (newpost) => ({
                url: `posts`,
                method: 'POST',
                body: newpost,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),
        deletePostById: builder.mutation({
            query: (id) => ({
                url: `posts/${ id }`,
                method: 'DELETE',
            }),
        }),
        updatePostById: builder.mutation({
            query: (updatePost) => {
                const {id, ...data} = updatePost;
                return {
                    url: `posts/${ id }`,
                    method: 'PUT',
                    body: data,
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                };
            },
        }),
    }),
});

export const {
    useGetProductsQuery,
    useGetPostByIdQuery,
    useDeletePostByIdMutation,
    useCreatePostMutation,
    useUpdatePostByIdMutation,
} = productsApi;