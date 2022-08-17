import TodoItem from './TodoItem.js';

function TodoList({todos, setTodos, tasksFilter}) {

    const filteredTasks = todos
        .filter((task) => {
            if (tasksFilter === 'Active') {
                return task.checked === false;
            }
            if (tasksFilter === 'Completed') {
                return task.checked === true;
            }
            return task;

        });

    return (
        <ul className="todo-list">
            {
                filteredTasks.map((task) =>
                    <TodoItem
                        taskText={ task.value }
                        key={ task._id }
                        isChecked={ task.checked }
                        todos={ todos }
                        setTodos={ setTodos }
                    />)
            }
        </ul>
    );
}

export default TodoList;