export default function Description({ desc }) {
  return (
    <div>
      <textarea
        placeholder="Bio"
        name="description"
        className="textarea textarea-bordered textarea-md w-full max-w-xs"
        // value={desc}
        defaultValue={desc}
      ></textarea>
    </div>
  );
}
