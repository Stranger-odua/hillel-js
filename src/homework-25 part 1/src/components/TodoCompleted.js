function TodoCompleted({clearCompletedTodos, itemsLeft}) {

    const style = itemsLeft > 0 ? {display: 'none'} : {display: 'block'};

    return <button
        className="clear-completed"
        style={ style }
        onClick={ () => clearCompletedTodos() }
    >
        Clear completed
    </button>;
}

export default TodoCompleted;
