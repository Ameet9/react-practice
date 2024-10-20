import React from 'react'
import ToDoItem from './ToDoItem';


function ToDoItems({ items, onDeleteClick }) {
  items.forEach(element => {
    console.log(element);
  });
  return (
    <>
      <div className="itemsContainer">
        {items.map((it) => (
          <ToDoItem task={it.task} taskDate={it.taskDate} key={it.task} onDeleteClick={onDeleteClick} />
        ))}
      </div >
    </>
  )
}

export default ToDoItems