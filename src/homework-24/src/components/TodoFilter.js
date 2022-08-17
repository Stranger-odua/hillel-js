function TodoFilter({onFilterClick}) {

    return (
        <ul className="filters">
            <li>
                <a href="/public" className="selected" onClick={ onFilterClick }>All</a>
            </li>
            <li>
                <a href="/active" onClick={ onFilterClick }>Active</a>
            </li>
            <li>
                <a href="/completed" onClick={ onFilterClick }>Completed</a>
            </li>
        </ul>

    );
}

export default TodoFilter;
