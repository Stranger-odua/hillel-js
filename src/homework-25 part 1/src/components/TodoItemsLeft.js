function TodoItemsLeft({itemsCount}) {
    return (
        <span className="todo-count">
      <strong>{ itemsCount.left }</strong> items left
    </span>
    );
}

export default TodoItemsLeft;
