import './App.css'
import ResultData from './components/ResultData'
import ActionKeys from './components/ActionKeys';
import { useState } from 'react';

function App() {
  let allButtons = ["C", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "=", "9", "0", "."];

  let [calVal, setCalVal] = useState("");
  let onButtonClick = (value) => {
    console.log(value);
    if (value === "C") {
      setCalVal("");
    } else if (value === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newValue = calVal + value;
      setCalVal(newValue);
    }
  }

  return (
    <>
      <center><h1>Calculator</h1></center>
      <div className="mainDiv">
        <ResultData displayValue={calVal} />
      </div>
      <div className="buttonConatiner">
        <ActionKeys allButtons={allButtons} sendToApp={onButtonClick} />
      </div>
    </>
  )
}

export default App
