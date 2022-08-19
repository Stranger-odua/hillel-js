function TodoItemsLeft({itemsLeft}) {
    return (
        <span className="todo-count">
      <strong>{ itemsLeft }</strong> items left
    </span>
    );
}

export default TodoItemsLeft;
