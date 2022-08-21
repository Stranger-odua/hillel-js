import { useContext } from 'react';
import { AppContext } from '../App';

function TodoCompleted() {
    const {itemsCompleted} = useContext(AppContext);
    const style = itemsCompleted > 0 ? {display: 'block'} : {display: 'none'};
    const {todos} = useContext(AppContext);
    const {setTodos} = useContext(AppContext);
    const {clearCompletedTodos} = useContext(AppContext);

    return <button
        className="clear-completed"
        style={ style }
        onClick={ async () => setTodos(await clearCompletedTodos(todos)) }
    >
        Clear completed
    </button>;
}

export default TodoCompleted;
