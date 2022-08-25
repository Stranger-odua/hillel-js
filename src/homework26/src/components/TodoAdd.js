import { useAddTodoMutation, useGetTodosQuery } from '../todoApi';

export default function TodoAdd() {
    const {data: todos = []} = useGetTodosQuery();
    const [addTodo] = useAddTodoMutation();

    const handleOnEnterKeyDown = async (e) => {
        const inputtedText = e.target.value;
        const conditions =
            e.key === 'Enter'
            && inputtedText.trim()
            && !todos.find((todo) => todo.value === inputtedText);

        if (conditions) {
            e.preventDefault();
            await addTodo(inputtedText.trim()).unwrap();
            e.target.value = '';
        }
    };

    return <input
        className="new-todo"
        placeholder="What needs to be done?"
        onKeyDown={ async (e) => await handleOnEnterKeyDown(e) }
    />;
}
