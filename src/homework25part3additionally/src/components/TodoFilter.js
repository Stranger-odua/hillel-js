import { useContext } from 'react';
import { AppContext } from '../App';

export default function TodoFilter() {
    const {filter} = useContext(AppContext);
    const {setFilter} = useContext(AppContext);
    return (
        <ul className="filters">
            <li>
                <a
                    href="#/all"
                    className={ filter === 'all' ? 'selected' : '' }
                    onClick={ () => {
                        setFilter('all');
                    } }
                >
                    All
                </a>
            </li>
            <li>
                <a
                    href="#/active"
                    className={ filter === 'active' ? 'selected' : '' }
                    onClick={ () => {
                        setFilter('active');
                    } }
                >
                    Active
                </a>
            </li>
            <li>
                <a
                    href="#/completed"
                    className={ filter === 'completed' ? 'selected' : '' }
                    onClick={ () => {
                        setFilter('completed');
                    } }
                >
                    Completed
                </a>
            </li>
        </ul>
    );
}
