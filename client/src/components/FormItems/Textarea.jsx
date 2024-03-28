export default function Textarea({ descriptionState, onChange }) {
  return (
    <textarea
      name="description"
      id=""
      cols="30"
      rows="10"
      value={descriptionState || ""}
      onChange={onChange}
    ></textarea>
  );
}
