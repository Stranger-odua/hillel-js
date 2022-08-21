import TodoItemsLeft from './TodoItemsLeft';
import TodoFilter from './TodoFilter';
import TodoCompleted from './TodoCompleted';

export default function TodoFooter({filter, updateFilter, clearCompletedTodos, itemsCount}) {
    const style = itemsCount.all > 0 ? {display: 'block'} : {display: 'none'};
    const {left: leftItems, completed: completedItems} = itemsCount;

    return (
        <footer className="footer" style={ style }>
            <TodoItemsLeft leftItems={ leftItems }/>
            <TodoFilter filter={ filter } updateFilter={ updateFilter }/>
            <TodoCompleted clearCompletedTodos={ clearCompletedTodos } completedItems={ completedItems }/>
        </footer>
    );
}
