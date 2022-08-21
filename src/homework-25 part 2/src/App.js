import './styles.css';
import { useEffect, useState } from 'react';
import TodoHeader from './components/TodoHeader.js';
import TodoToggleAll from './components/TodoToggleAll';
import TodoList from './components/TodoList';
import Authorization from './components/Authorization';

import {
    filterTodos,
    toggleTodo,
    removeTodo,
    updateTodo,
    addTodo,
    toggleTodos,
    countItems,
    checkIsLogged,
    login,
    logout,
    getList, clearCompletedTodos,
} from './functions';
import TodoFooter from './components/TodoFooter';

export default function App() {
    const initialFilter = 'all';
    const initialTodos = [];
    const [authStatus, setAuthStatus] = useState(checkIsLogged);
    const [todos, setTodos] = useState(initialTodos);
    const [filter, setFilter] = useState(initialFilter);
    const filteredTodos = filterTodos(todos, filter);
    const {all: itemsTotal, completed: itemsCompleted, left: itemsLeft} = countItems(todos);
    const appSectionStyle = authStatus ? {display: 'block'} : {display: 'none'};
    const mainSectionStyle = itemsTotal > 0 ? {display: 'block'} : {display: 'none'};


    useEffect(() => {
        let newTodoList = [];
        const getTodoList = async () => {
            if (authStatus) {
                newTodoList = await getList();
            }
            setTodos(newTodoList);
        };

        getTodoList().catch(console.error);

    }, [authStatus]);

    return (
        <>
            <section className="todoapp" style={ appSectionStyle }>
                <TodoHeader addTodo={ async (title) => {
                    setTodos(await addTodo(todos, title));
                } }
                />
                <section className="main" style={ mainSectionStyle }>
                    <TodoToggleAll toggleTodos={ async () => {
                        setTodos(await toggleTodos(todos));
                    } }/>
                    <TodoList
                        todos={ filteredTodos }
                        toggleTodo={ async (id) => {
                            setTodos(await toggleTodo(todos, id));
                        } }
                        removeTodo={ async (id) => {
                            setTodos(await removeTodo(todos, id));
                        } }
                        updateTodo={ async (id, todo) => {
                            setTodos(await updateTodo(todos, id, todo));
                        } }
                    />
                </section>

                <TodoFooter
                    filter={ filter }
                    updateFilter={ (filter) => setFilter(filter) }
                    clearCompletedTodos={ async () => setTodos(await clearCompletedTodos(todos)) }
                    itemsTotal={ itemsTotal }
                    itemsCompleted={ itemsCompleted }
                    itemsLeft={ itemsLeft }
                />
            </section>

            <Authorization
                login={ async (email) => {
                    await login(email);
                } }
                logout={ () => {
                    logout();
                } }
                authStatus={ authStatus }
                setAuthStatus={ (newStatus) => {
                    setAuthStatus(newStatus);
                } }
                checkIsLogged={ checkIsLogged }/>
        </>
    );
}
