export default function TodoAdd({addTodo}) {
    return <input
        className="new-todo"
        placeholder="What needs to be done?"
        onKeyDown={ (e) => {
            if (e.key === 'Enter' && e.target.value.trim()) {
                e.preventDefault();
                addTodo(e.target.value.trim());
                e.target.value = '';
            }
        } }
    />;
}
