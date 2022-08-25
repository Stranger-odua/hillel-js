import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiMTIzIiwiYnJvd3NlciI6Ik1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMDQuMC41MTEyLjEwMiBTYWZhcmkvNTM3LjM2IEVkZy8xMDQuMC4xMjkzLjYzIiwiaXAiOiIxMjcuMC4wLjEiLCJpc3N1ZXIiOiJodHRwczovL3RvZG8uaGlsbGVsLml0IiwibWF4QWdlIjoiN2QiLCJpYXQiOjE2NjExMTk3MzJ9.ymaLhNNEEndGNtnsChCJZ87rmTVqc19McenL4XWkiO8';

export const todoApi = createApi({
    reducerPath: 'todoApi',
    tagTypes: ['Todos'],
    baseQuery: fetchBaseQuery({baseUrl: 'https://todo.hillel.it'}),
    endpoints: build => ({
        getTodos: build.query({
            query: () => ({
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
            query: text => ({
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
            query: id => ({
                url: `/todo/${ id }/toggle`,
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': `Bearer ${ token }`,
                },
            }),
            invalidatesTags: [{type: 'Todos', _id: 'LIST'}],
        }),
        removeTodo: build.mutation({
            query: id => ({
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
            query: id => ({
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
    useRemoveTodoMutation,
    useAddTodoMutation,
    useClearCompletedTodosMutation,
} = todoApi;
