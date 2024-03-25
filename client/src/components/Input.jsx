import TextBox from "./TextBox";

export default function Input() {
  return (
    <div className="form-control flex flex-col border-2">
      <form action="">
        <TextBox />
        <button className="btn btn-outline btn-success">Success</button>
      </form>
    </div>
  );
}
