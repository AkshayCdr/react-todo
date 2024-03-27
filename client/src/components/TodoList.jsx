import TodoFormItems from "./TodoFormItems";

export default function TodoList({
  todos,
  toggleComplete,
  handleDelete,
  updateTodo,
}) {
  return (
    <div className="todos">
      {todos.map((todo) => {
        return (
          <TodoFormItems
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
