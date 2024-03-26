import "./App.css";
import Input from "./components/Input";
import Task from "./components/Task";
// import Button from "./components/Button";

function App() {
  function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Month is 0-indexed, so add 1
    const day = String(currentDate.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

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
      date: getCurrentDate(),
      priority: "low",
      description: "wake up ",
    },
    {
      id: 2,
      name: "second task",
      completed: false,
      date: getCurrentDate(),
      priority: "Mid",
      description: "eat ",
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
