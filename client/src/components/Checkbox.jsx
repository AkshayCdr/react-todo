import PropTypes from "prop-types";

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

Checkbox.propTypes = {
  com: PropTypes.bool,
};
