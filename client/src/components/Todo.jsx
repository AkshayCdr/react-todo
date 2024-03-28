import { useState } from "react";

export default function Todo({
  id,
  name,
  completed,
  date,
  priority,
  description,
  toggleComplete,
  handleDelete,
  updateTodo,
}) {
  const [taskname, setTaskName] = useState(name);
  const [dateState, setDateState] = useState(formatDate(date));
  const [descriptionState, setDescriptionState] = useState(description);
  const [priorityState, setPriorityState] = useState(priority);

  function formatDate(date) {
    if (!date) return "";
    const formattedDate = new Date(date).toISOString().split("T")[0];
    return formattedDate;
  }

  async function handleSubmit(event, id) {
    event.preventDefault();
    const data = {
      name: taskname,
      date: dateState,
      priority: priorityState,
      description: descriptionState,
    };

    await updateTodo(id, data);
  }

  return (
    <form action="" onSubmit={(event) => handleSubmit(event, id)}>
      <input
        type="checkbox"
        name="completed"
        id=""
        checked={completed}
        onChange={(e) => toggleComplete(id, e.target.checked)}
      />
      <input
        type="text"
        name="name"
        id=""
        value={taskname}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <select
        name="priority"
        id=""
        value={priorityState || ""}
        onChange={(e) => setPriorityState(e.target.value)}
      >
        <option value="">--select--</option>
        <option value="LOW">LOW</option>
        <option value="MID">MID</option>
        <option value="HIGH">HIGH</option>
      </select>
      <input
        type="date"
        name="date"
        id=""
        value={dateState || ""}
        onChange={(e) => setDateState(e.target.value)}
      />
      <textarea
        name="description"
        id=""
        cols="30"
        rows="10"
        value={descriptionState || ""}
        onChange={(e) => setDescriptionState(e.target.value)}
      ></textarea>
      <button>save</button>
      <button onClick={() => handleDelete(id)}>delete</button>
    </form>
  );
}
