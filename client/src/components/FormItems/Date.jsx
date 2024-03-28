export default function Date({ dateState, onChange }) {
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
