import PropTypes from "prop-types";

// import { ReactPropTypes } from "react";

export default function Button({ name }) {
  return <button className="btn btn-sm">{name}</button>;
}

Button.propTypes = {
  name: PropTypes.string,
};
