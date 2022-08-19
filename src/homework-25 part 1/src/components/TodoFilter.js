export default function TodoFilter({filter, updateFilter}) {
    return (
        <ul className="filters">
            <li>
                <a
                    href="/"
                    className={ filter === 'all' ? 'selected' : '' }
                    onClick={ (event) => {
                        event.preventDefault();
                        updateFilter('all');
                    } }
                >
                    All
                </a>
            </li>
            <li>
                <a
                    className={ filter === 'active' ? 'selected' : '' }
                    href="/active"
                    onClick={ (event) => {
                        event.preventDefault();
                        updateFilter('active');
                    } }
                >
                    Active
                </a>
            </li>
            <li>
                <a
                    className={ filter === 'completed' ? 'selected' : '' }
                    href="/completed"
                    onClick={ (event) => {
                        event.preventDefault();
                        updateFilter('completed');
                    } }
                >
                    Completed
                </a>
            </li>
        </ul>
    );
}
