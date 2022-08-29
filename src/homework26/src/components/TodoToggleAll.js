import { useGetTodosQuery, useToggleTodoMutation } from '../todoApi';
import { useSelector } from 'react-redux';

export default function TodoToggleAll() {
    const token = useSelector(state => state.user.token);
    const {data: todos = [], isLoading} = useGetTodosQuery(token);
    const [toggleTodo] = useToggleTodoMutation();

    const handleToggleAllTodos = async (task) => {
        const isActiveTasks = !!task.find((task) => task.checked === false);
        const idTasksNeededToBeToggled = task.reduce((ids, task) => {
            if (task.checked === !isActiveTasks) ids.push(task._id);
            return ids;
        }, []);

        for (const id of idTasksNeededToBeToggled) await toggleTodo({id, token});
    };

    if (isLoading) return <div className={ 'loader' }></div>;

    return (
        <>
            <input
                id="toggle-all"
                className="toggle-all"
                type="checkbox"
                onClick={ async () => await handleToggleAllTodos(todos) }
            />
            <label htmlFor="toggle-all">Mark all as complete</label>
        </>
    );
}
