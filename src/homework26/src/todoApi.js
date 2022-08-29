import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from './constants';


export const todoApi = createApi({
    reducerPath: 'todoApi',
    tagTypes: ['Todos'],
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: build => ({

        getTodos: build.query({
            query: (token) => ({
                url: '/todo',
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': `Bearer ${ token }`,
                },
            }),
            providesTags: result =>
                result
                    ? [...result.map(({_id}) => ({type: 'Todos', _id})), {type: 'Todos', _id: 'LIST'}]
                    : [{type: 'Todos', _id: 'LIST'}],
        }),

        addTodo: build.mutation({
            query: ({text, token}) => ({
                url: `/todo`,
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': `Bearer ${ token }`,
                },
                body: {value: text, priority: 1},
            }),
            invalidatesTags: [{type: 'Todos', _id: 'LIST'}],
        }),

        toggleTodo: build.mutation({
            query: ({id, token}) => ({
                url: `/todo/${ id }/toggle`,
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': `Bearer ${ token }`,
                },
            }),
            invalidatesTags: [{type: 'Todos', _id: 'LIST'}],
        }),

        updateTodo: build.mutation({
            query: ({id, value, token}) => ({
                url: `/todo/${ id }`,
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${ token }`,
                },
                body: JSON.stringify({value, priority: 1}),
            }),
            invalidatesTags: [{type: 'Todos', _id: 'LIST'}],
        }),

        removeTodo: build.mutation({
            query: ({id, token}) => ({
                url: `/todo/${ id }`,
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': `Bearer ${ token }`,
                },
            }),
            invalidatesTags: [{type: 'Todos', _id: 'LIST'}],
        }),

        clearCompletedTodos: build.mutation({
            query: ({id, token}) => ({
                url: `/todo/${ id }`,
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': `Bearer ${ token }`,
                },
            }),
            invalidatesTags: [{type: 'Todos', _id: 'LIST'}],
        }),
    }),
});

export const {
    useGetTodosQuery,
    useToggleTodoMutation,
    useUpdateTodoMutation,
    useRemoveTodoMutation,
    useAddTodoMutation,
    useClearCompletedTodosMutation,
} = todoApi;
