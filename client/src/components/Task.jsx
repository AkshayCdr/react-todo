import Checkbox from "./Checkbox";
import Textinput from "./Textinput";
import Priority from "./Priority";
import Dateselector from "./Dateselector";
import Description from "./Description";
import Button from "./Button";

export default function Task() {
  return (
    <div className="task-container border-2">
      <Checkbox />
      <Textinput />
      <Priority />
      <Dateselector />
      <Description />
      <Button>Save</Button>
      <Button>Delete</Button>
    </div>
  );
}
