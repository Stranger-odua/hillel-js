import { useGetTodosQuery } from '../todoApi';

function TodoItemsLeft() {
    const {data: todos = []} = useGetTodosQuery();
    const itemsLeft = todos.filter((todo) => !todo.checked).length;
    return (
        <span className="todo-count">
      <strong>{ itemsLeft }</strong> items left
    </span>
    );
}

export default TodoItemsLeft;
