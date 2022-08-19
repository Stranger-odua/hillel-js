import TodoItemsLeft from './TodoItemsLeft';
import TodoFilter from './TodoFilter';
import TodoCompleted from './TodoCompleted';

export default function TodoFooter({filter, updateFilter, clearCompletedTodos, itemsCount, itemsLeft}) {
    const style = itemsCount > 0 ? {display: 'block'} : {display: 'none'};

    return (
        <footer className="footer" style={ style }>
            <TodoItemsLeft itemsLeft={ itemsLeft }/>
            <TodoFilter filter={ filter } updateFilter={ updateFilter }/>
            <TodoCompleted clearCompletedTodos={ clearCompletedTodos } itemsLeft={ itemsLeft }/>
        </footer>
    );
}
