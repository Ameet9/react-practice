import AppName from "./components/AppName"
import AddToDo from "./components/AddToDo"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import ToDoItems from "./components/ToDoItems"

function App() {
  const items = [{ task: "Buy Grocery", taskDate: "4/10/2023" },
  { task: "Go Gym", taskDate: "4/10/2023" },
  { task: "Make Food", taskDate: "4/10/2023" }]
  return (
    <center className="todoContainer">
      <AppName></AppName>
      <AddToDo></AddToDo>
      <ToDoItems items={items}></ToDoItems>

    </center >
  )
}

export default App
