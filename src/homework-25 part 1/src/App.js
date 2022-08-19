import './styles.css';
import { useState } from 'react';
import TodoHeader from './components/TodoHeader.js';
import TodoToggleAll from './components/TodoToggleAll';
import TodoFooter from './components/TodoFooter';
import TodoList from './components/TodoList';
import {
    filterTodos,
    toggleTodo,
    removeTodo,
    updateTodo,
    addTodo,
    toggleTodos,
    clearCompletedTodos,
    itemsLeftCount,
    countItems,
} from './functions';

const initialFilter = 'all';
let initialTodos = [
    {id: 1, title: 'Todo 1', completed: true},
    {id: 2, title: 'Todo 2', completed: true},
    {id: 3, title: 'Todo 3', completed: false},
];

export default function App() {
    const [filter, setFilter] = useState(initialFilter);
    const [todos, setTodos] = useState(initialTodos);
    const filteredTodos = filterTodos(todos, filter);
    const itemsCount = countItems(todos);

    const style = itemsCount > 0 ? {display: 'block'} : {display: 'none'};

    return (<section className="todoapp">
        <TodoHeader addTodo={ (title) => {
            setTodos(addTodo(todos, title));
        } }
        />
        <section className="main" style={ style }>
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
        <TodoFooter
            filter={ filter }
            updateFilter={ (filter) => setFilter(filter) }
            clearCompletedTodos={ () => setTodos(clearCompletedTodos(todos)) }
            itemsCount={ itemsCount }
            itemsLeft={ itemsLeftCount(todos) }
        />
    </section>);
}
