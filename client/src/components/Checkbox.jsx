export default function Checkbox({ com }) {
  return (
    <input
      type="checkbox"
      name="completed"
      // value={com}
      defaultValue={com}
      defaultChecked
      className="checkbox checkbox-success"
    />
  );
}
