export default function TodoList() {
  return (
    <div className="todos">
      {todos.map((todo) => {
        return (
          <form action="" key={todo.id}>
            <input
              type="checkbox"
              name="completed"
              id=""
              checked={todo.completed}
              onChange={(e) => toggleComplete(todo.id, e.target.checked)}
            />
            <input type="text" name="name" id="" value={todo.name} />
            <select name="priority" id="">
              <option value="">--select--</option>
              <option value="LOW">LOW</option>
              <option value="MID">MID</option>
              <option value="HIGH">HIGH</option>
            </select>
            <input type="date" name="date" id="" />
            <textarea name="description" id="" cols="30" rows="10"></textarea>
            <button>save</button>
            <button onClick={() => handleDelete(todo.id)}>delete</button>
          </form>
        );
      })}
    </div>
  );
}
