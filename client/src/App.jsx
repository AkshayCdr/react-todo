import "./App.css";
import Input from "./components/Input";
import Task from "./components/Task";

function App() {
  return (
    <div className="todo-container p-8 border-2 max-w-2xl">
      <Input />
      <Task />
    </div>
  );
}

export default App;
