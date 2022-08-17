function TodoToggleAll({todos, setTodos}) {

    function handlerToggleAll(e) {
        if (e.target.checked) {
            setTodos([...todos.map((task) => {
                if (task.checked === false) task.checked = true;
                return task;
            })]);
        } else {
            setTodos([...todos.map((task) => {
                if (task.checked === true) task.checked = false;
                return task;
            })]);
        }
    }

    return (<>
        <input id="toggle-all" className="toggle-all" type="checkbox" onClick={ handlerToggleAll }/>
        <label htmlFor="toggle-all">Mark all as complete</label>
    </>);
}

export default TodoToggleAll;
