import { useContext } from 'react';
import { AppContext } from '../App';

export default function TodoToggleAll() {
    const {todos} = useContext(AppContext);
    const {setTodos} = useContext(AppContext);
    const {toggleTodos} = useContext(AppContext);
    return (
        <>
            <input
                id="toggle-all"
                className="toggle-all"
                type="checkbox"
                onClick={ async () => {
                    setTodos(await toggleTodos(todos));
                } }
            />
            <label htmlFor="toggle-all">Mark all as complete</label>
        </>
    );
}
