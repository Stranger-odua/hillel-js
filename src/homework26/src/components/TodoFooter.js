import TodoItemsLeft from "./TodoItemsLeft";
import TodoFilter from "./TodoFilter";
import TodoCompleted from "./TodoCompleted";

export default function TodoFooter() {
  return (
    <footer className="footer">
      <TodoItemsLeft />
      <TodoFilter />
      <TodoCompleted />
    </footer>
  );
}
