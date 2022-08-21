import TodoItemsLeft from './TodoItemsLeft';
import TodoFilter from './TodoFilter';
import TodoCompleted from './TodoCompleted';

export default function TodoFooter({filter, updateFilter, clearCompletedTodos, itemsTotal, itemsCompleted, itemsLeft}) {
    const style = itemsTotal > 0 ? {display: 'block'} : {display: 'none'};

    return (
        <footer className="footer" style={ style }>
            <TodoItemsLeft leftItems={ itemsLeft }/>
            <TodoFilter filter={ filter } updateFilter={ updateFilter }/>
            <TodoCompleted clearCompletedTodos={ clearCompletedTodos } completedItems={ itemsCompleted }/>
        </footer>
    );
}
