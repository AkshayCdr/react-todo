import TextBox from "./TextBox";

export default function Input() {
  return (
    <div className="form-control flex flex-row border-2">
      <TextBox />
      <button className="btn btn-outline btn-success">Success</button>
    </div>
  );
}
