import "../../styles/Textbox.css";

export default function Textbox({ taskname, onChange }) {
  return (
    <input
      type="text"
      name="name"
      className="task-name"
      value={taskname}
      onChange={onChange}
    />
  );
}
