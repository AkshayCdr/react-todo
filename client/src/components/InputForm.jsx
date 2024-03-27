import { useState } from "react";

export default function InputForm({ onSubmit }) {
  const [taskname, setTaskname] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(taskname);
    setTaskname("");
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={taskname}
        onChange={(e) => setTaskname(e.target.value)}
      />
      <button>submit</button>
    </form>
  );
}
