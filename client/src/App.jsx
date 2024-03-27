import { useEffect, useState } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    // (async () => {
    //   const response = await fetch("http://localhost:3000/task", {
    //     method: "GET",
    //     headers: { "Content-Type": "application/json" },
    //   });
    //   if (!response.ok) return new Error("Error adding data");
    //   return await response.json();
    // })();
    const data = localStorage.getItem("todos");
    return data === null ? [] : JSON.parse(data);
  });

  useEffect(() => {
    // (async () => {
    //   const response = await fetch("http://localhost:3000/task", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(todos),
    //   });
    //   if (!response.ok) return new Error("Error adding data");
    // })();
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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

  function updateTodo(id, data) {
    console.log(data);
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        // console.log(todo);
        if (todo.id === id) {
          // console.log({ ...todo, ...data });
          return { ...todo, ...data };
        }
        return todo;
      });
    });
  }

  return (
    <>
      <InputForm onSubmit={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        handleDelete={handleDelete}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default App;
