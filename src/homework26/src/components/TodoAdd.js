import { useAddTodoMutation, useGetTodosQuery } from '../todoApi';
import { useSelector } from 'react-redux';

export default function TodoAdd() {
    const token = useSelector(state => state.user.token);
    const {data: todos = []} = useGetTodosQuery(token);
    const [addTodo] = useAddTodoMutation();

    const handleOnEnterKeyDown = async (e) => {
        const inputtedText = e.target.value;
        const conditions =
            e.key === 'Enter'
            && inputtedText.trim()
            && !todos.find((todo) => todo.value === inputtedText);

        if (conditions) {
            e.preventDefault();
            await addTodo({text: inputtedText.trim(), token: token});
            e.target.value = '';
        }
    };

    return <input
        className="new-todo"
        placeholder="What needs to be done?"
        onKeyDown={ async (e) => await handleOnEnterKeyDown(e) }
    />;
}
