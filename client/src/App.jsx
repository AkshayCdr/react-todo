import { useState } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(taskname) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: Math.random(),
          name: taskname,
          completed: false,
        },
      ];
    });
  }

  function toggleComplete(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) return { ...todo, completed };
        return todo;
      });
    });
  }

  function handleDelete(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => {
        return todo.id !== id;
      });
    });
  }

  console.log(todos);

  return (
    <>
      <InputForm onSubmit={addTodo} />
      <TodoList />
    </>
  );
}

export default App;
