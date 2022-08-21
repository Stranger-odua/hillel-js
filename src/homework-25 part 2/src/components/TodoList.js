import TodoItem from './TodoItem';

export default function ToDoList({
    todos,
    toggleTodo,
    removeTodo,
    updateTodo,
}) {
    return (
        <ul className="todo-list">
            { todos.map((todo) => {
                return (
                    <TodoItem
                        key={ todo._id }
                        { ...todo }
                        toggleTodo={ toggleTodo }
                        removeTodo={ removeTodo }
                        updateTodo={ updateTodo }
                    />
                );
            }) }
        </ul>
    );
}
