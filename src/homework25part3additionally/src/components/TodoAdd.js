import { useContext } from 'react';
import { AppContext } from '../App';

export default function TodoAdd() {
    const {todos} = useContext(AppContext);
    const {setTodos} = useContext(AppContext);
    const {addTodo} = useContext(AppContext);

    return <input
        className="new-todo"
        placeholder="What needs to be done?"
        onKeyDown={ async (e) => {
            if (e.key === 'Enter' && e.target.value.trim()) {
                e.preventDefault();
                setTodos(await addTodo(todos, e.target.value.trim()));
                e.target.value = '';
            }
        } }
    />;
}
