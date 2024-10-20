import React from 'react'

function ToDoItem({ task, taskDate }) {
  console.log(task);
  return (
    <div className="container">
      <div className="row ourRow">
        <div className="col-6"><span>{task}</span></div>
        <div className="col-4">{taskDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger ourButton">Delete</button>
        </div>
      </div>
    </div>
  )
}

export default ToDoItem

