export default function TodoItem() {
  return (
    <ul className="todo-list">
      <li className="">
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>Todo 3</label>
          <button className="destroy"></button>
        </div>
        <input type="text" className="edit" defaultValue="Todo 3" />
      </li>
    </ul>
  );
}
