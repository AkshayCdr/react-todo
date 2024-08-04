import "../../styles/Select.css";

export default function Select({ priorityState, onChange }) {
  return (
    <select
      name="priority"
      value={priorityState || ""}
      onChange={onChange}
      className="task-priority"
    >
      <option value="">--select--</option>
      <option value="LOW">LOW</option>
      <option value="MID">MID</option>
      <option value="HIGH">HIGH</option>
    </select>
  );
}
