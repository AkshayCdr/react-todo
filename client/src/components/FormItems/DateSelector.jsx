export default function DateSelector({ dateState, onChange }) {
  return (
    <input
      type="date"
      name="date"
      id=""
      value={dateState || ""}
      onChange={onChange}
    />
  );
}
