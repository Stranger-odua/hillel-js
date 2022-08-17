import './styles.css';
import { useState } from 'react';
import TodoHeader from './components/TodoHeader.js';
import TodoToggleAll from './components/TodoToggleAll';
import TodoFooter from './components/TodoFooter';
import TodoList from './components/TodoList';

function App() {
    const tasksList = [
        {
            _id: 1,
            value: 'Todo 1',
            checked: false,
        },
        {
            _id: 2,
            value: 'Todo 2',
            checked: true,
        },
        {
            _id: 3,
            value: 'Todo 3',
            checked: false,
        },
    ];
    const [todos, setTodos] = useState(tasksList);
    const [tasksFilter, setTasksFilter] = useState('All');

    const handlerOnFilterClick = (e) => {
        e.preventDefault();
        const filterItems = e.target.parentElement.parentElement.children;
        setTasksFilter(e.target.textContent);

        for (const filterItem of filterItems) {
            const filterItemLink = filterItem.firstChild;

            if (filterItemLink.classList.contains('selected')) {
                filterItemLink.classList.remove('selected');
            }
        }
        e.target.classList.add('selected');
    };

    return (
        <section className="todoapp">
            <TodoHeader todos={ todos } setTodos={ setTodos }/>
            <section className="main">
                <TodoToggleAll/>
                <TodoList todos={ todos } setTodos={ setTodos } tasksFilter={ tasksFilter }/>
            </section>
            <TodoFooter
                todos={ todos }
                setTodos={ setTodos }
                handlerOnFilterClick={ handlerOnFilterClick }
            />
        </section>
    );
}

export default App;