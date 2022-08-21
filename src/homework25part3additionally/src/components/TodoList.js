import TodoItem from './TodoItem';
import { useContext } from 'react';
import { AppContext } from '../App';

export default function ToDoList() {
    const {todos} = useContext(AppContext);
    return (
        <ul className="todo-list">
            { todos.map((todo) => {
                return (
                    <TodoItem
                        key={ todo._id }
                        { ...todo }
                    />
                );
            }) }
        </ul>
    );
}
