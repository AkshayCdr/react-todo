export default function Checkbox({ completed, onChange }) {
  return (
    <input
      type="checkbox"
      name="completed"
      checked={completed}
      onChange={onChange}
    />
  );
}
