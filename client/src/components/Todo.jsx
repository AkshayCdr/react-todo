import { useState } from "react";
import Checkbox from "./FormItems/Checkbox";
import Textbox from "./FormItems/Textbox";
import Select from "./FormItems/Select";

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
    if (!date) return null;
    const d = new Date(date);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(d.getDate()).padStart(2, "0")}`;
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
      <Checkbox
        completed={completed}
        onChange={(e) => toggleComplete(id, e.target.checked)}
      />
      <Textbox
        taskname={taskname}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <Select
        priorityState={priorityState}
        onChange={(e) => setPriorityState(e.target.value)}
      />
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
