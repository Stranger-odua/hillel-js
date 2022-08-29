import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../todoSlice';

export default function TodoFilter() {
    const dispatch = useDispatch();
    const currentFilter = useSelector(state => state.todo.filter);

    return (
        <ul className="filters">
            <li>
                <a
                    href="/"
                    className={ currentFilter === 'all' ? 'selected' : '' }
                    onClick={ (event) => {
                        event.preventDefault();
                        dispatch(setFilter({filter: 'all'}));
                    } }
                >
                    All
                </a>
            </li>
            <li>
                <a
                    className={ currentFilter === 'active' ? 'selected' : '' }
                    href="/active"
                    onClick={ (event) => {
                        event.preventDefault();
                        dispatch(setFilter({filter: 'active'}));
                    } }
                >
                    Active
                </a>
            </li>
            <li>
                <a
                    className={ currentFilter === 'completed' ? 'selected' : '' }
                    href="/completed"
                    onClick={ (event) => {
                        event.preventDefault();
                        dispatch(setFilter({filter: 'completed'}));
                    } }
                >
                    Completed
                </a>
            </li>
        </ul>
    );
}
