import { useState } from "react";
import "../styles/InputForm.css";

export default function InputForm({ onSubmit }) {
  const [taskname, setTaskname] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    onSubmit(taskname);
    setTaskname("");
  }

  return (
    <div className="input-container">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="taskname"
          placeholder="Add task"
          value={taskname}
          onChange={(e) => setTaskname(e.target.value)}
        />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}
