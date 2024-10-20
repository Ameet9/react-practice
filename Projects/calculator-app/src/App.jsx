import './App.css'
import ResultData from './components/ResultData'
import ActionKeys from './components/ActionKeys';

function App() {
  let allButtons = ["C", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "=", "9", "0", "."];
  return (
    <>
      <center><h1>Calculator</h1></center>
      <div className="mainDiv">
        <ResultData />
      </div>
      <div className="buttonConatiner">
        <ActionKeys allButtons={allButtons} />
      </div>
    </>
  )
}

export default App
