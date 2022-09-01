import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/',
    }),
    endpoints: (builder) => ({
        getAllPost: builder.query({
            query: (num) => ({
                url: `posts/?_limit=${ num || 5 }`,
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
    useGetAllPostQuery,
    useGetPostByIdQuery,
    useDeletePostByIdMutation,
    useCreatePostMutation,
    useUpdatePostByIdMutation,
} = postApi;