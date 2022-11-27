import "./App.css";
import { Input } from "./components/Input";
import { Button, ResetBtn } from "./components/Button";
import { SummaryItem } from "./components/SummaryItem";
import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [peopleNumber, setPeopleNumber] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [totalTip, setTotalTip] = useState(0);

  return (
    <div className="body">
      <div className="container">
        <div className="calculate">
          <Input
            label="Bill"
            set={setBill}
            peopleNumber={peopleNumber}
            bill={bill}
          ></Input>
          <div className="tipBox">
            <label>Select Tip %</label>
            <div className="tips">
              <Button
                text={"5%"}
                tipPercentage={5}
                bill={bill}
                peopleNumber={peopleNumber}
                tipAmount={setTipAmount}
                totalTip={setTotalTip}
              ></Button>
              <Button
                text={"10%"}
                tipPercentage={10}
                bill={bill}
                peopleNumber={peopleNumber}
                tipAmount={setTipAmount}
                totalTip={setTotalTip}
              ></Button>
              <Button
                text={"15%"}
                tipPercentage={15}
                bill={bill}
                peopleNumber={peopleNumber}
                tipAmount={setTipAmount}
                totalTip={setTotalTip}
              ></Button>
              <Button
                text={"25%"}
                tipPercentage={25}
                bill={bill}
                peopleNumber={peopleNumber}
                tipAmount={setTipAmount}
                totalTip={setTotalTip}
              ></Button>
              <Button
                text={"50%"}
                tipPercentage={50}
                bill={bill}
                peopleNumber={peopleNumber}
                tipAmount={setTipAmount}
                totalTip={setTotalTip}
              ></Button>
              <input
                type={"number"}
                className="custom"
                placeholder="Custom"
                onChange={(e) => {
                  setTotalTip((bill * e.target.value) / 100);
                  setTipAmount((bill * e.target.value) / 100 / peopleNumber);
                }}
              ></input>
            </div>
          </div>
          <br></br>
          <Input
            label="Number Of People"
            set={setPeopleNumber}
            peopleNumber={peopleNumber}
            bill={bill}
          ></Input>
        </div>
        <div className="summary">
          <div>
            <SummaryItem text={"Tip Amount"} summary={tipAmount}></SummaryItem>
            <SummaryItem text={"Total"} summary={totalTip}></SummaryItem>
          </div>

          <div className="resetBbox">
            <ResetBtn
              setBill={setBill}
              setPeopleNumber={setPeopleNumber}
            ></ResetBtn>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
