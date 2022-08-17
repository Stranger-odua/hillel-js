function TodoFilter({handlerOnFilterClick}) {

    return (
        <ul className="filters">
            <li>
                <a href="/public" className="selected" onClick={ handlerOnFilterClick }>All</a>
            </li>
            <li>
                <a href="/active" onClick={ handlerOnFilterClick }>Active</a>
            </li>
            <li>
                <a href="/completed" onClick={ handlerOnFilterClick }>Completed</a>
            </li>
        </ul>

    );
}

export default TodoFilter;
