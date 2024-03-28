export default function Select({ priorityState, onChange }) {
  return (
    <select
      name="priority"
      id=""
      value={priorityState || ""}
      onChange={onChange}
    >
      <option value="">--select--</option>
      <option value="LOW">LOW</option>
      <option value="MID">MID</option>
      <option value="HIGH">HIGH</option>
    </select>
  );
}
