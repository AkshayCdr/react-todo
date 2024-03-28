import Todo from "./Todo";

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
