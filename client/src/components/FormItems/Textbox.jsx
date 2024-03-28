export default function Textbox({ taskname, onChange }) {
  return (
    <input type="text" name="name" id="" value={taskname} onChange={onChange} />
  );
}
