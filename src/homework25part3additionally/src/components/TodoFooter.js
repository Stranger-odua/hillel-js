import TodoItemsLeft from './TodoItemsLeft';
import TodoFilter from './TodoFilter';
import TodoCompleted from './TodoCompleted';

export default function TodoFooter({itemsTotal}) {
    const style = itemsTotal > 0 ? {display: 'block'} : {display: 'none'};

    return (
        <footer className="footer" style={ style }>
            <TodoItemsLeft/>
            <TodoFilter/>
            <TodoCompleted/>
        </footer>
    );
}
