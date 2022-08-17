function TodoItem({taskText, todos, setTodos, isChecked}) {
	const isCompleted = isChecked === true ? 'completed' : '';

	const handleToggle = (e) => {
		const todoItem = e.target.parentElement.parentElement;
		const taskText = e.target.nextSibling.textContent;

		if (todoItem.classList.contains('completed')) {
			todoItem.classList.remove('completed');

			setTodos([...todos.map((task) => {
				if (task.value === taskText) task.checked = false;
				return task;
			})]);

		} else {
			todoItem.classList.add('completed');

			setTodos([...todos.map((task) => {
				if (task.value === taskText) task.checked = true;
				return task;
			})]);
		}
	};

	const handleDestroy = (e) => {
		const taskText = e.target.previousSibling.textContent;
		setTodos([...todos.filter((task) => task.value !== taskText)]);
	};


	return (
		<li className={ isCompleted }>
			<div className="view">
				<input className="toggle" type="checkbox" checked={ isChecked } onChange={ handleToggle }/>
				<label>{ taskText }</label>
				<button className="destroy" onClick={ handleDestroy }></button>
			</div>
			<input type="text" className="edit" defaultValue={ taskText }/>
		</li>
	);
}

export default TodoItem;


//li className= "" ; editing ; completed