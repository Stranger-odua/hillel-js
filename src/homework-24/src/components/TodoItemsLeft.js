function TodoItemsLeft({todos}) {

    const activeTaskCount = todos.reduce((count, task) => {
        if (task.checked === false) count += 1;
        return count;
    }, 0);

    return (
        <span className="todo-count">
            <strong>{ activeTaskCount }</strong> items left
        </span>
    );
}

export default TodoItemsLeft;
