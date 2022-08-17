import TodoAdd from './TodoAdd.js';

function TodoHeader({todos, setTodos}) {

    return (
        <header className="header">
            <h1>todos</h1>
            <TodoAdd todos={ todos } setTodos={ setTodos }/>
        </header>
    );
}

export default TodoHeader;
