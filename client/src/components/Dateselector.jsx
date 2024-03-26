import PropTypes from "prop-types";

export default function Dateselector({ dat }) {
  return (
    <input
      type="date"
      name="date"
      id=""
      //  value={dat}
      defaultValue={dat}
    />
  );
}

Dateselector.propTypes = {
  dat: PropTypes.string,
};
