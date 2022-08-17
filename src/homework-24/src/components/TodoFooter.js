import TodoItemsLeft from './TodoItemsLeft.js';
import TodoFilter from './TodoFilter.js';
import TodoCompleted from './TodoCompleted.js';

function TodoFooter({todos, setTodos, onFilterClick}) {

    return (
        <footer className="footer">
            <TodoItemsLeft/>
            <TodoFilter todos={ todos } setTodos={ setTodos } onFilterClick={ onFilterClick }/>
            <TodoCompleted/>
        </footer>
    );
}

export default TodoFooter;
