import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../todoSlice';

export default function TodoFilter({updateFilter}) {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.footer.filter);

    return (
        <ul className="filters">
            <li>
                <a
                    href="/"
                    className={ filter === 'all' ? 'selected' : '' }
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
                    className={ filter === 'active' ? 'selected' : '' }
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
                    className={ filter === 'completed' ? 'selected' : '' }
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
