import { useClearCompletedTodosMutation, useGetTodosQuery } from '../todoApi';
import { useSelector } from 'react-redux';

function TodoCompleted() {
    const token = useSelector(state => state.user.token);
    const {data: todos = []} = useGetTodosQuery(token);
    const [clearCompletedTodos] = useClearCompletedTodosMutation();
    const isCompletedItems = todos.filter((todo) => todo.checked).length;

    const handleClearCompletedTodos = async (todos) => {
        const completedTasks = todos.filter((todo) => todo.checked);
        for (const task of completedTasks) await clearCompletedTodos({id: task._id, token});
    };

    return isCompletedItems > 0
        && <button
            className={ 'clear-completed' }
            onClick={ async () => await handleClearCompletedTodos(todos) }
        >
            Clear completed
        </button>;
}

export default TodoCompleted;