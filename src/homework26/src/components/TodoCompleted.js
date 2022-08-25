import { useClearCompletedTodosMutation, useGetTodosQuery } from '../todoApi';

function TodoCompleted() {
    const {data: todos = []} = useGetTodosQuery();
    const [clearCompletedTodos] = useClearCompletedTodosMutation();
    const isCompletedItems = todos.filter((todo) => todo.checked).length;

    const handleClearCompletedTodos = async (tasks) => {
        const completedTasks = tasks.filter((task) => task.checked);
        for (const task of completedTasks) await clearCompletedTodos(task._id);
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