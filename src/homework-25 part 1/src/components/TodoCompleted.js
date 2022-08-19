function TodoCompleted({clearCompletedTodos, itemsCount}) {
    const style = itemsCount.completed > 0 ? {display: 'block'} : {display: 'none'};

    return <button
        className="clear-completed"
        style={ style }
        onClick={ () => clearCompletedTodos() }
    >
        Clear completed
    </button>;
}

export default TodoCompleted;
