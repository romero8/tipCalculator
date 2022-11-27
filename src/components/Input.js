import "./Input.css";

export function Input(props) {
  const peopleNumber = props.peopleNumber;
  const bill = props.bill;
  const label = props.label;

  function handle(e) {
    props.set(e.target.value);
  }

  return (
    <div className="box">
      <label className="label">{label}</label>
      <input
        className="input"
        placeholder="0"
        type={"number"}
        onChange={(e) => handle(e)}
      />
    </div>
  );
}
