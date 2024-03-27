export default function TodoFormItems({
  id,
  name,
  completed,
  toggleComplete,
  handleDelete,
}) {
  return (
    <form action="">
      <input
        type="checkbox"
        name="completed"
        id=""
        checked={completed}
        onChange={(e) => toggleComplete(id, e.target.checked)}
      />
      <input type="text" name="name" id="" value={name} />
      <select name="priority" id="">
        <option value="">--select--</option>
        <option value="LOW">LOW</option>
        <option value="MID">MID</option>
        <option value="HIGH">HIGH</option>
      </select>
      <input type="date" name="date" id="" />
      <textarea name="description" id="" cols="30" rows="10"></textarea>
      <button>save</button>
      <button onClick={() => handleDelete(id)}>delete</button>
    </form>
  );
}
