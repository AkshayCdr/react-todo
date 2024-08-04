import { useEffect, useState } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import Todos from "./components/Todos";
import {
  addCall,
  deleteCall,
  getCall,
  setCompleteCall,
  udpateCall,
} from "./apiCalls";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    const response = await getCall();
    if (!response.ok) return new Error("Cannot fetch data");
    const data = await response.json();
    setTodos(data);
  }

  async function addTodo(taskname) {
    if (taskname.trim() === "") return alert("Enter taskname");
    const response = await addCall(taskname);
    if (!response.ok) return new Error("Error updating data");
    await fetchTodos();
  }
  async function toggleComplete(id, completed) {
    const response = await setCompleteCall(id, completed);
    if (!response.ok) return new Error("Error updating data");
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed } : todo,
      ),
    );
  }

  async function handleDelete(event, id) {
    event.preventDefault();
    const response = await deleteCall(id);
    if (!response.ok) throw new Error("Error deleting  data");
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  }

  async function updateTodo(id, data) {
    if (data.name.trim() === "") return alert("Taskname empty");
    const response = await udpateCall(id, data);
    if (!response.ok) throw new Error("Error updating data");
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, ...data } : todo,
      ),
    );
  }

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
