import "./Button.css";

export function Button(props) {
  const text = props.text;
  const tipPercentage = props.tipPercentage;
  const bill = props.bill;
  const setTipAmount = props.tipAmount;
  const setTotalTip = props.totalTip;
  const peopleNumber = props.peopleNumber;

  function handle() {
    let totalTip = (bill * tipPercentage) / 100;
    let tipAmount = (bill * tipPercentage) / 100 / peopleNumber;

    if (peopleNumber !== 0) {
      setTotalTip(totalTip.toFixed(2));
      setTipAmount(tipAmount.toFixed(2));
    }
  }

  return (
    <button
      className="defaultBtn"
      onClick={() => {
        handle();
      }}
    >
      {text}
    </button>
  );
}

export function ResetBtn(props) {
  function handle() {
    const setPeopleNumber = props.setPeopleNumber;
    const setBill = props.setBill;
    setPeopleNumber(0);
    setBill(0);
  }

  return (
    <button
      className="resetBtn"
      onClick={() => {
        handle();
      }}
    >
      RESET
    </button>
  );
}
