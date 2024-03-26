import { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Task from "./components/Task";
// import Button from "./components/Button";

function App() {
  const [todos, setTodos] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));

    const response = await fetch("http://localhost:3000/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) return new Error("Error creating data ");
    populateTask();
  };

  const populateTask = async () => {
    const response = await fetch("http://localhost:3000/task", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) return new Error("Error getting data");
    const data = await response.json();
    setTodos(data);
  };

  useEffect(() => {
    (async () => {
      await populateTask();
    })();
  }, []);

  const handleSaveClick = async (event) => {
    const data = Object.fromEntries(new FormData(event.target));
    const response = await fetch(`http://localhost:3000/task/${data.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) return new Error("Error saving data");
  };

  return (
    <div className="todo-container p-8 border-2 max-w-2xl">
      <form action="" onSubmit={handleSubmit}>
        <Input />
      </form>
      {todos &&
        todos.map((todo) => {
          return (
            <form key={todo.id} action="" onSubmit={handleSaveClick}>
              <Task
                id={todo.id}
                name={todo.name}
                completed={todo.completed}
                date={todo.date}
                priority={todo.priority}
                description={todo.description}
              />
            </form>
          );
        })}

      {/* <Button name="Delete"></Button> */}
    </div>
  );
}

export default App;
