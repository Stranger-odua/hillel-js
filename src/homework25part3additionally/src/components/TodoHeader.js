import TodoAdd from './TodoAdd';

export default function TodoHeader({addTodo}) {
    return (
        <header className="header">
            <h1>todos</h1>
            <TodoAdd addTodo={ addTodo }/>
        </header>
    );
}
