import { useState } from "react";
import "./App.css";

function App() {
  const [taskname, setTaskname] = useState([]);
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: Math.random(),
          name: taskname,
        },
      ];
    });
  }
  console.log(todos);

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={(e) => setTaskname(e.target.value)}
        />
        <button>submit</button>
      </form>
      <form action="">
        <input type="checkbox" name="completed" id="" />
        <input type="text" name="name" id="" />
        <select name="priority" id="">
          <option value="">--select--</option>
          <option value="LOW">LOW</option>
          <option value="MID">MID</option>
          <option value="HIGH">HIGH</option>
        </select>
        <input type="date" name="date" id="" />
        <textarea name="description" id="" cols="30" rows="10"></textarea>
        <button>save</button>
      </form>
    </>
  );
}

export default App;
