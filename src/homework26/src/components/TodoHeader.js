import TodoAdd from "./TodoAdd";

export default function TodoHeader() {
  return (
    <header className="header">
      <h1>todos</h1>
      <TodoAdd />
    </header>
  );
}
