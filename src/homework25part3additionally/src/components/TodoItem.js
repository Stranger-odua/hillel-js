import { useContext, useState } from 'react';
import { AppContext } from '../App';

export default function TodoItem({
    _id,
    value,
    checked,
}) {
    const [title, setTitle] = useState(value);
    const [edit, setEdit] = useState(false);

    const classNameEdit = edit ? 'editing' : '';
    const classNameCompleted = checked ? 'completed' : '';
    const className = `${ classNameEdit } ${ classNameCompleted }`;

    const {todos} = useContext(AppContext);
    const {setTodos} = useContext(AppContext);
    const {toggleTodo} = useContext(AppContext);
    const {removeTodo} = useContext(AppContext);
    const {updateTodo} = useContext(AppContext);

    const callbackRef = (nodeEl) => {
        if (nodeEl) nodeEl.focus();
    };

    const handlerOnSubmit = async (e) => {
        e.preventDefault();
        setEdit(false);
        setTodos(await updateTodo(todos, _id, {value: title, checked: false}));
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
                onChange={ async () => {
                    setTodos(await toggleTodo(todos, _id));
                } }
            />
            <label onClick={ async () => setTodos(await toggleTodo(todos, _id)) }>{ value }</label>
            <button
                className="destroy" onClick={ async () => setTodos(await removeTodo(todos, _id)) }>
            </button>
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
