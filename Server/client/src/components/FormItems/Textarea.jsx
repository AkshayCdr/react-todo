import "../../styles/Textarea.css";

export default function Textarea({ descriptionState, onChange }) {
  return (
    <textarea
      name="description"
      cols="20"
      rows="4"
      placeholder="Add description ..."
      className="task-description"
      value={descriptionState || ""}
      onChange={onChange}
    ></textarea>
  );
}
