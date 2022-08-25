import { useRemoveTodoMutation, useToggleTodoMutation } from '../todoApi';

export default function TodoItem({_id, value, checked}) {
    const [toggleTodo, {isLoading}] = useToggleTodoMutation();
    const [removeTodo] = useRemoveTodoMutation();

    if (isLoading) return <h1>Loading2...</h1>;

    return (
        <li
            // className={ className }
        >
            <div
                className="view"
                // onDoubleClick={ () => setEdit(true) }
            >
                <input
                    className="toggle"
                    type="checkbox"
                    checked={ checked }
                    onChange={ async () => await toggleTodo(_id).unwrap() }
                />
                <label
                    onClick={ async () => await toggleTodo(_id).unwrap() }
                >
                    { value }
                </label>
                <button
                    className="destroy"
                    onClick={ async () => await removeTodo(_id).unwrap() }
                >
                </button>
            </div>
            <input
                // ref={ callbackRef }
                type="text"
                className="edit"
                // value={ title }
                // onChange={ (e) => setTitle(e.target.value) }
                onKeyDown={ (e) => {
                    // if (e.key === 'Enter') handlerOnSubmit(e);
                } }
                // onBlur={ (e) => handlerOnSubmit(e) }
            />
        </li>
    );
}
