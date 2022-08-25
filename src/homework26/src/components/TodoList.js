import TodoItem from './TodoItem';
import { useGetTodosQuery } from '../todoApi';
import { useSelector } from 'react-redux';

export default function ToDoList() {
    const {data: todos = [], isLoading} = useGetTodosQuery();
    const filter = useSelector(state => state.footer.filter);

    const filteredTodos = (todos) => {
        if (filter === 'active') {
            return todos.filter((todo) => !todo.checked);
        }

        if (filter === 'completed') {
            return todos.filter((todo) => todo.checked);
        }

        return todos;
    };

    if (isLoading) return <h1>Loading1...</h1>;

    return (
        <ul className="todo-list">
            {
                filteredTodos(todos).map((todo) => {
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
