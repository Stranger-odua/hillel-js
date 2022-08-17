import TodoItemsLeft from './TodoItemsLeft.js';
import TodoFilter from './TodoFilter.js';
import TodoCompleted from './TodoCompleted.js';

function TodoFooter({todos, setTodos, handlerOnFilterClick}) {

    return (
        <footer className="footer">
            <TodoItemsLeft todos={ todos }/>
            <TodoFilter
                todos={ todos }
                setTodos={ setTodos }
                handlerOnFilterClick={ handlerOnFilterClick }
            />
            <TodoCompleted
                todos={ todos }
                setTodos={ setTodos }
            />
        </footer>
    );
}

export default TodoFooter;
