import PropTypes from "prop-types";

export default function Priority({ prio }) {
  return (
    <div>
      <select
        className="select select-bordered select-sm w-full max-w-xs"
        name="priority"
        value={prio}
      >
        {/* <option disabled selected>
          Priority
        </option> */}
        <option>Low</option>
        <option>Mid</option>
        <option>High</option>
      </select>
    </div>
  );
}

Priority.propTypes = {
  prio: PropTypes.string,
};
