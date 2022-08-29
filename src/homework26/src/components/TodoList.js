import TodoItem from './TodoItem';
import { useGetTodosQuery } from '../todoApi';
import { useSelector } from 'react-redux';

export default function ToDoList() {
    const token = useSelector(state => state.user.token);
    const {data: todos = [], isLoading} = useGetTodosQuery(token);
    const filter = useSelector(state => state.todo.filter);

    const filteredTodos = (todos) => {
        if (filter === 'active') {
            return todos.filter((todo) => !todo.checked);
        }

        if (filter === 'completed') {
            return todos.filter((todo) => todo.checked);
        }

        return todos;
    };

    if (isLoading) return <div className={ 'loader' }></div>;

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
