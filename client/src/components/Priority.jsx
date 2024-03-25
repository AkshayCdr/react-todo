export default function Priority() {
  return (
    <div>
      <select className="select select-bordered select-sm w-full max-w-xs">
        <option disabled selected>
          Priority
        </option>
        <option>Low</option>
        <option>Mid</option>
        <option>High</option>
      </select>
    </div>
  );
}
