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
    getList,
} from './functions';

// const initialTodos = [
//     {_id: 1, value: 'Todo 1', checked: true},
//     {_id: 2, value: 'Todo 2', checked: true},
//     {_id: 3, value: 'Todo 3', checked: false},
// ];


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
        // console.log('authStatus in useEffect', authStatus);
        // console.log('checkIsLogged in useEffect', checkIsLogged());
        console.log(1);
        if (authStatus) {
            console.log(2);

            getList().then((todos) => {
                console.log('2 todos in useEffect: ', todos);
                setTodos(todos);
            });

        } else {
            console.log(3);
            setTodos([]);
            console.log('3 todos in useEffect: ', todos);
        }
    }, [authStatus]);

    console.log('4 todos: ', todos);

    return (<>
        <section className="todoapp" style={ appSectionStyle }>
            <TodoHeader addTodo={ (title) => {
                setTodos(addTodo(todos, title));
            } }
            />
            <section className="main" style={ mainSectionStyle }>
                <TodoToggleAll toggleTodos={ (completed) => {
                    setTodos(toggleTodos(todos, completed));
                } }/>
                <TodoList
                    todos={ filteredTodos }
                    toggleTodo={ (id) => {
                        setTodos(toggleTodo(todos, id));
                    } }
                    removeTodo={ (id) => {
                        setTodos(removeTodo(todos, id));
                    } }
                    updateTodo={ (id, todo) => {
                        setTodos(updateTodo(todos, id, todo));
                    } }
                />
            </section>

            {/*<TodoFooter*/ }
            {/*    filter={ filter }*/ }
            {/*    updateFilter={ (filter) => setFilter(filter) }*/ }
            {/*    clearCompletedTodos={ () => setTodos(clearCompletedTodos(todos)) }*/ }
            {/*    itemsTotal={ itemsTotal }*/ }
            {/*    itemsCompleted={ itemsCompleted }*/ }
            {/*    itemsLeft={ itemsLeft }*/ }
            {/*/>*/ }
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
    </>);
}
