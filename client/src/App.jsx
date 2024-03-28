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
    console.log(data);
    setTodos(data);
  }

  async function addTodo(taskname) {
    const response = await addCall(taskname);
    if (!response.ok) return new Error("Error updating data");
    // setTodos((currentTodos) => [
    //   ...currentTodos,
    //   {
    //     name: taskname,
    //     completed: false,
    //   },
    // ]);
    await fetchTodos();
  }

  async function toggleComplete(id, completed) {
    console.log(id, completed);
    const response = await setCompleteCall(id, completed);
    if (!response.ok) return new Error("Error updating data");
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed } : todo
      )
    );
  }

  async function handleDelete(id) {
    const response = await deleteCall(id);
    if (!response.ok) throw new Error("Error deleting  data");
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  }

  async function updateTodo(id, data) {
    console.log(id, data);
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
