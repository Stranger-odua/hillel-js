import TodoItem from "./TodoItem";

export default function ToDoList() {
  return (
    <ul className="todo-list">
      <TodoItem></TodoItem>
      <TodoItem></TodoItem>
      <TodoItem></TodoItem>
    </ul>
  );
}
