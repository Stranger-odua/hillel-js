function TodoItemsLeft({leftItems}) {
    return (
        <span className="todo-count">
      <strong>{ leftItems }</strong> items left
    </span>
    );
}

export default TodoItemsLeft;
