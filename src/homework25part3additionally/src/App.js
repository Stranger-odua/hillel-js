import './styles.css';
import React, { useEffect, useState } from 'react';
import TodoHeader from './components/TodoHeader.js';
import TodoToggleAll from './components/TodoToggleAll';
import Authorization from './components/Authorization';
import TodoFooter from './components/TodoFooter';
import All from './pages/All';
import Active from './pages/Active';
import Completed from './pages/Completed';
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

export const AppContext = React.createContext();

function App() {
    const initialFilter = 'all';
    const initialTodos = [];
    const [authStatus, setAuthStatus] = useState(checkIsLogged);
    const [todos, setTodos] = useState(initialTodos);
    const [filter, setFilter] = useState(initialFilter);
    const filteredTodos = filterTodos(todos, filter);
    const {all: itemsTotal, completed: itemsCompleted, left: itemsLeft} = countItems(todos);
    const appSectionStyle = authStatus ? {display: 'block'} : {display: 'none'};
    const mainSectionStyle = itemsTotal > 0 ? {display: 'block'} : {display: 'none'};
    const [route, setRoute] = useState(window.location.hash.substr(1));

    let TodoListPage;
    switch (route) {
    case '/all':
        TodoListPage = All;
        break;
    case '/active':
        TodoListPage = Active;
        break;
    case '/completed':
        TodoListPage = Completed;
        break;
    default:
        TodoListPage = All;
    }

    useEffect(() => {
        window.addEventListener('hashchange', () => {
            setRoute(window.location.hash.substr(1));
        });
    });

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
        <AppContext.Provider value={ {
            todos: filteredTodos, setTodos,
            addTodo, updateTodo, removeTodo,
            toggleTodos, toggleTodo, clearCompletedTodos,
            filter, setFilter,
            itemsLeft, itemsCompleted,
        } }>
            <>
                <section className="todoapp" style={ appSectionStyle }>
                    <TodoHeader/>
                    <section className="main" style={ mainSectionStyle }>
                        <TodoToggleAll/>
                        <TodoListPage/>
                    </section>
                    <TodoFooter itemsTotal={ itemsTotal }/>
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
        </AppContext.Provider>
    );
}

export default App;
