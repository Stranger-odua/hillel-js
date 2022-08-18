import TodoItemsLeft from './TodoItemsLeft.js';
import TodoFilter from './TodoFilter.js';
import TodoCompleted from './TodoCompleted.js';

function TodoFooter({todos, setTodos, setTasksFilter}) {

    return (
        <footer className="footer">
            <TodoItemsLeft todos={ todos }/>
            <TodoFilter
                todos={ todos }
                setTodos={ setTodos }
                setTasksFilter={ setTasksFilter }
            />
            <TodoCompleted
                todos={ todos }
                setTodos={ setTodos }
            />
        </footer>
    );
}

export default TodoFooter;
