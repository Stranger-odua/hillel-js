function TodoCompleted({todos, setTodos}) {

    const handlerClearCompleted = () => {
        setTodos([...todos.filter((task) => task.checked !== true)]);
    };

    return <button className="clear-completed" onClick={ handlerClearCompleted }>Clear completed</button>;
}

export default TodoCompleted;
