import { useContext } from 'react';
import { AppContext } from '../App';

function TodoItemsLeft() {
    const {itemsLeft} = useContext(AppContext);
    return (
        <span className="todo-count">
      <strong>{ itemsLeft }</strong> items left
    </span>
    );
}

export default TodoItemsLeft;
