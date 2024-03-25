import "./App.css";
import Input from "./components/Input";
import Task from "./components/Task";
// import Button from "./components/Button";

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    console.log(data);
  };
  // const todos = [];
  const todos = [
    {
      id: 1,
      name: "first task",
      completed: true,
      date: new Date("12/02/2024").toDateString(),
      priority: "low",
      description: "wake up ",
    },
    {
      id: 2,
      name: "first task",
      completed: true,
      date: new Date("12/02/2024").toDateString(),
      priority: "low",
      description: "wake up ",
    },
  ];

  const handleSaveClick = (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    console.log(data);
  };
  return (
    <div className="todo-container p-8 border-2 max-w-2xl">
      <form action="" onSubmit={handleSubmit}>
        <Input />
      </form>
      {todos &&
        todos.map((todo) => {
          return (
            // Add return statement here
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
