import { useState } from 'react';

export default function TodoItem({
    id, title, completed, toggleTodo, removeTodo, updateTodo,
}) {
    const [value, setValue] = useState(title);
    const [edit, setEdit] = useState(false);

    const classNameEdit = edit ? 'editing' : '';
    const classNameCompleted = completed ? 'completed' : '';
    const className = `${ classNameEdit } ${ classNameCompleted }`;

    const callbackRef = (nodeEl) => {
        if (nodeEl) nodeEl.focus();
    };

    const handlerOnSubmit = (e) => {
        e.preventDefault();
        setEdit(false);
        updateTodo(id, {title: value, completed: false});
    };

    return (<li className={ className }>
        <div
            className="view"
            onDoubleClick={ () => setEdit(true) }
        >
            <input
                className="toggle"
                type="checkbox"
                checked={ completed }
                onChange={ () => {
                    toggleTodo(id);
                } }
            />
            <label onClick={ () => toggleTodo(id) }>{ title }</label>
            <button className="destroy" onClick={ () => removeTodo(id) }></button>
        </div>
        <input
            ref={ callbackRef }
            type="text"
            className="edit"
            value={ value }
            onChange={ (e) => setValue(e.target.value) }
            onKeyDown={ (e) => {
                if (e.key === 'Enter') handlerOnSubmit(e);
            } }
            onBlur={ (e) => handlerOnSubmit(e) }
        />
    </li>);
}
