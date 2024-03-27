import TodoFormItems from "./TodoFormItems";

export default function TodoList({
  todos,
  toggleComplete,
  handleDelete,
  updateTodo,
}) {
  console.log(todos);
  return (
    <div className="todos">
      {todos.map((todo) => {
        return (
          <TodoFormItems
            key={todo.id}
            // {...todo}
            id={todo.id}
            name={todo.name}
            completed={todo.completed}
            date={todo.date}
            priority={todo.priority}
            description={todo.description}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
            updateTodo={updateTodo}
          />
        );
      })}
    </div>
  );
}
