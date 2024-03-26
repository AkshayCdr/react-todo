import Checkbox from "./Checkbox";
import Textinput from "./Textinput";
import Priority from "./Priority";
import Dateselector from "./Dateselector";
import Description from "./Description";
import Button from "./Button";
import PropTypes from "prop-types";

export default function Task({
  id,
  name,
  completed,
  date,
  priority,
  description,
}) {
  return (
    <div className="task-container border-2">
      <Checkbox com={completed} />
      <Textinput taskname={name} />
      <Priority prio={priority} />
      <Dateselector dat={date} />
      <Description desc={description} />
      <Button name="Save"></Button>
    </div>
  );
}

Task.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  completed: PropTypes.bool,
  date: PropTypes.string,
  priority: PropTypes.string,
  description: PropTypes.string,
};
