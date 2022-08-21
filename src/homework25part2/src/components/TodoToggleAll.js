export default function TodoToggleAll({toggleTodos}) {
    return (
        <>
            <input
                id="toggle-all"
                className="toggle-all"
                type="checkbox"
                onClick={ async () => {
                    await toggleTodos();
                } }
            />
            <label htmlFor="toggle-all">Mark all as complete</label>
        </>
    );
}
