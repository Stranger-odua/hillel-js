import { useState } from 'react';

function TodoAdd({todos, setTodos}) {
	const [taskText, setTaskText] = useState('');

	function handleSubmit(e) {
		e.preventDefault();
		setTodos([...todos, {_id: Math.random() * 10, value: e.target.firstChild.value, isCompleted: false}]);
		setTaskText('');
	}

	return (
		<form onSubmit={ handleSubmit }>
			<input
				className="new-todo"
				placeholder="What needs to be done?"
				value={ taskText }
				onChange={ (e) => setTaskText(e.target.value) }
			/>
		</form>
	);
}

export default TodoAdd;
