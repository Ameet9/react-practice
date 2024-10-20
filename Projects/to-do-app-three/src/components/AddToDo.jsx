import { useState } from "react";

function AddToDo({ addNewItem }) {
  let [toDoName, setToDoName] = useState();
  let [toDoDate, setToDoDate] = useState();

  const handleNameChange = (e) => {
    setToDoName(e.target.value);
  }
  const handleDateChange = (e) => {
    setToDoDate(e.target.value)
  }
  const handleAddBtn = () => {
    addNewItem(toDoName, toDoDate);
    setToDoName("");
    setToDoDate("");
  }

  return (
    <div className="container text-center">
      <div className="row ourRow">
        <div className="col-6"><input type="text" placeholder="Enter Todo Here" onChange={handleNameChange} value={toDoName} /></div>
        <div className="col-4"><input type="date" onChange={handleDateChange} value={toDoDate} /></div>
        <div className="col-2"><button type="button" className="btn btn-success ourButton" onClick={handleAddBtn}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
