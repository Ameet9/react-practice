import AppName from "./components/AppName"
import AddToDo from "./components/AddToDo"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import ToDoItems from "./components/ToDoItems"
import { useState } from "react"
import WelcomeMessage from "./components/WelcomeMessage"

function App() {
  // const items = [{ task: "Buy Grocery", taskDate: "4/10/2023" },
  // { task: "Go Gym", taskDate: "4/10/2023" },
  // { task: "Make Food", taskDate: "4/10/2023" }]

  let [item, setItem] = useState([]);

  let addNewItem = (n, d) => {
    const newToDoItems = [...item, { task: n, taskDate: d }]
    setItem(newToDoItems);
  }

  const deleteItem = (name) => {
    const newToDoItems = item.filter(x => x.task !== name);
    setItem(newToDoItems);
  }

  return (
    <center className="todoContainer">
      <AppName></AppName>
      <AddToDo addNewItem={addNewItem}></AddToDo>
      {item.length === 0 && <WelcomeMessage></WelcomeMessage>}
      {/* <ToDoItems items={items}></ToDoItems> */}
      <ToDoItems items={item} onDeleteClick={deleteItem}></ToDoItems>
    </center >
  )
}

export default App
