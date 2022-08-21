import { useState } from 'react';

export default function TodoItem({
    _id,
    value,
    checked,
    toggleTodo,
    removeTodo,
    updateTodo,
}) {
    const [title, setTitle] = useState(value);
    const [edit, setEdit] = useState(false);

    const classNameEdit = edit ? 'editing' : '';
    const classNameCompleted = checked ? 'completed' : '';
    const className = `${ classNameEdit } ${ classNameCompleted }`;

    const callbackRef = (nodeEl) => {
        if (nodeEl) nodeEl.focus();
    };

    const handlerOnSubmit = (e) => {
        e.preventDefault();
        setEdit(false);
        updateTodo(_id, {value: title, checked: false});
    };

    return (<li className={ className }>
        <div
            className="view"
            onDoubleClick={ () => setEdit(true) }
        >
            <input
                className="toggle"
                type="checkbox"
                checked={ checked }
                onChange={ () => {
                    toggleTodo(_id);
                } }
            />
            <label onClick={ () => toggleTodo(_id) }>{ value }</label>
            <button className="destroy" onClick={ () => removeTodo(_id) }></button>
        </div>
        <input
            ref={ callbackRef }
            type="text"
            className="edit"
            value={ title }
            onChange={ (e) => setTitle(e.target.value) }
            onKeyDown={ (e) => {
                if (e.key === 'Enter') handlerOnSubmit(e);
            } }
            onBlur={ (e) => handlerOnSubmit(e) }
        />
    </li>);
}
