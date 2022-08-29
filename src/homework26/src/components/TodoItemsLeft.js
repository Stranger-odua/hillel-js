import { useGetTodosQuery } from '../todoApi';
import { useSelector } from 'react-redux';

function TodoItemsLeft() {
    const token = useSelector(state => state.user.token);
    const {data: todos = []} = useGetTodosQuery(token);
    const itemsLeft = todos.filter((todo) => !todo.checked).length;
    return (
        <span className="todo-count">
      <strong>{ itemsLeft }</strong> items left
    </span>
    );
}

export default TodoItemsLeft;
