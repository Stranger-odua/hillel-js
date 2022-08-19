function TodoCompleted({clearCompletedTodos, itemsCount}) {

    const style = itemsCount.completed > 0 ? {display: 'block'} : {display: 'none'};

    console.log(itemsCount.completed);

    return <button
        className="clear-completed"
        style={ style }
        onClick={ () => clearCompletedTodos() }
    >
        Clear completed
    </button>;
}

export default TodoCompleted;
