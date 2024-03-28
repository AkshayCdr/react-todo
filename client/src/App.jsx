import { useEffect, useState } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import Todos from "./components/Todos";
import { deleteCall, udpateCall } from "./apiCalls";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    const response = await fetch(`http://localhost:3000/task`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) return new Error("Cannot fetch data");
    const data = await response.json();
    setTodos(data);
  }

  async function addTodo(taskname) {
    const response = await fetch(`http://localhost:3000/task`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: taskname,
        completed: false,
      }),
    });

    if (!response.ok) return new Error("Error updating data");
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          name: taskname,
          completed: false,
        },
      ];
    });
  }

  async function toggleComplete(id, completed) {
    const response = await fetch(`http://localhost:3000/task/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        completed: completed,
      }),
    });
    if (!response.ok) return new Error("Error updating data");
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) return { ...todo, completed };
        return todo;
      });
    });
  }

  async function handleDelete(id) {
    const response = await deleteCall(id);
    if (!response.ok) throw new Error("Error deleting  data");
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => {
        return todo.id !== id;
      });
    });
  }

  async function updateTodo(id, data) {
    const response = await udpateCall(id, data);
    if (!response.ok) throw new Error("Error updating data");
    setTodos((currentTodos) =>
      currentTodos.map((todo) => (todo.id === id ? { ...todo, ...data } : todo))
    );
  }

  console.log(todos);

  return (
    <div className="todo-container">
      <InputForm onSubmit={addTodo} />
      <Todos
        todos={todos}
        toggleComplete={toggleComplete}
        handleDelete={handleDelete}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default App;
