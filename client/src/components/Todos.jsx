import Todo from "./Todo";
import "../styles/Todos.css";
export default function Todos({
  todos,
  toggleComplete,
  handleDelete,
  updateTodo,
}) {
  return (
    <div className="tasks-container">
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            {...todo}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
            updateTodo={updateTodo}
          />
        );
      })}
    </div>
  );
}
