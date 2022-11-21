import { Input } from "./components/Input";
import "./App.css";
import { Button } from "./components/Button";
import { SummaryItem } from "./components/SummaryItem";
import { useState } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [peopleNumber, setPeopleNumber] = useState("");
  const [tipAmount, setTipAmount] = useState("");
  const [totalTip, setTotalTip] = useState("");

 
  return (
    <div className="body">
      <div className="container">
        <div className="calculate">
          <Input label="Bill" set={setBill}></Input>
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
              type={'number'}
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
          <Input label="Number Of People" set={setPeopleNumber}></Input>
        </div>
        <div className="summary">
          <div>
            <SummaryItem text={"Tip Amount"} summary={tipAmount}></SummaryItem>
            <SummaryItem text={"Total"} summary={totalTip}></SummaryItem>
          </div>
          <div className="resetBtn">
            <button className="btn">RESET</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
