import { useState } from "react";
import "../styles/Todo.css";
import Checkbox from "./FormItems/Checkbox";
import Textbox from "./FormItems/Textbox";
import Select from "./FormItems/Select";
import DateSelector from "./FormItems/DateSelector";
import Textarea from "./FormItems/Textarea";

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

  const [detailsVisible, setDetailsVisible] = useState(false);
  function formatDate(date) {
    if (!date) return null;
    const newDate = new Date(date);
    return `${newDate.getFullYear()}-${String(newDate.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(newDate.getDate()).padStart(2, "0")}`;
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
  const toggleDetails = (event) => {
    event.preventDefault();
    setDetailsVisible(!detailsVisible);
  };
  return (
    <div className={`task-container ${completed ? "blur" : ""}`}>
      <form action="" onSubmit={(event) => handleSubmit(event, id)}>
        <div className="task-head">
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
          <button className="btn-header" onClick={toggleDetails}>
            {detailsVisible ? "Collapse" : "Expand"}
          </button>
        </div>
        <div className={`task-details ${detailsVisible ? "" : "hidden"}`}>
          <DateSelector
            dateState={dateState}
            onChange={(e) => setDateState(e.target.value)}
          />
          <Textarea
            descriptionState={descriptionState}
            onChange={(e) => setDescriptionState(e.target.value)}
          />
          <div className="btn-container">
            <button className="btn btn-save">Save</button>
            <button
              className="btn btn-delete"
              onClick={(event) => handleDelete(event, id)}
            >
              Delete
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
