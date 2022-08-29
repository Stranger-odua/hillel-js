import { useRemoveTodoMutation, useToggleTodoMutation, useUpdateTodoMutation } from '../todoApi';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function TodoItem({_id, value, checked}) {
    const token = useSelector(state => state.user.token);
    const [edit, setEdit] = useState(false);
    const [title, setTitle] = useState(value);
    const [toggleTodo] = useToggleTodoMutation();
    const [updateTodo] = useUpdateTodoMutation();
    const [removeTodo] = useRemoveTodoMutation();

    const classNameEdit = edit ? 'editing' : '';
    const classNameCompleted = checked ? 'completed' : '';

    const callbackRef = (nodeEl) => {
        if (nodeEl) nodeEl.focus();
    };

    const handleEditTodo = async () => {
        setEdit(false);
        await updateTodo({id: _id, value: title, token});
    };

    return (
        <li
            className={ `${ classNameEdit } ${ classNameCompleted }` }
        >
            <div
                className="view"
            >
                <input
                    className="toggle"
                    type="checkbox"
                    checked={ checked }
                    onChange={ async () => await toggleTodo({id: _id, token}) }
                />
                <label
                    onDoubleClick={ () => setEdit(true) }
                >
                    { value }
                </label>
                <button
                    className="destroy"
                    onClick={ async () => await removeTodo({id: _id, token}) }
                >
                </button>
            </div>
            <input
                ref={ callbackRef }
                type="text"
                className="edit"
                value={ title }
                onChange={ (e) => setTitle(e.target.value) }
                onKeyDown={ async (e) => {
                    if (e.key === 'Enter') await handleEditTodo(e);
                    if (e.key === 'Escape') setEdit(false);
                } }
                onBlur={ async (e) => await handleEditTodo(e) }
            />
        </li>
    );
}
