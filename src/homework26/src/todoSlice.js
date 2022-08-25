import { createSlice } from '@reduxjs/toolkit';

const footerSlice = createSlice({
    name: 'footer',
    initialState: {
        filter: 'all',
        todosCount: 0,
    },
    reducers: {
        // addTodo1(state, action) {
        //     console.log({state});
        //     console.log({action});
        //
        //     state.todos.push({
        //         id: new Date().toISOString(),
        //         text: action.payload.text,
        //         completed: false,
        //     });
        // },
        // removeTodo1(state, action) {
        //     state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        // },
        setFilter(state, action) {
            state.filter = action.payload.filter;
        },

        getTodosCount(state, action) {

        },
    },
});

export const {setFilter} = footerSlice.actions;

export default footerSlice.reducer;