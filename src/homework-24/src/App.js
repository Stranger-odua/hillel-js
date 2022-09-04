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
    const filter = 'All';
    const [todos, setTodos] = useState(tasksList);
    const [tasksFilter, setTasksFilter] = useState(filter);

    return (
        <section className="todoapp">
            <TodoHeader todos={ todos } setTodos={ setTodos }/>
            <section className="main">
                <TodoToggleAll todos={ todos } setTodos={ setTodos }/>
                <TodoList todos={ todos } setTodos={ setTodos } tasksFilter={ tasksFilter }/>
            </section>
            <TodoFooter
                todos={ todos }
                setTodos={ setTodos }
                setTasksFilter={ setTasksFilter }
            />
        </section>
    );
}



// function App() {
//     const tasksList = [
//         {
//             _id: 1,
//             value: 'Todo 1',
//             checked: false,
//         },
//         {
//             _id: 2,
//             value: 'Todo 2',
//             checked: true,
//         },
//         {
//             _id: 3,
//             value: 'Todo 3',
//             checked: false,
//         },
//     ];
//     const filter = 'All';
//     const [todos, setTodos] = useState(tasksList);
//     const [tasksFilter, setTasksFilter] = useState(filter);
//
//     return (
//         <section className="todoapp">
//             <TodoHeader todos={ todos } setTodos={ setTodos }/>
//             <section className="main">
//                 <TodoToggleAll todos={ todos } setTodos={ setTodos }/>
//                 <TodoList todos={ todos } setTodos={ setTodos } tasksFilter={ tasksFilter }/>
//             </section>
//             <TodoFooter
//                 todos={ todos }
//                 setTodos={ setTodos }
//                 setTasksFilter={ setTasksFilter }
//             />
//         </section>
//     );
// }

export default App;