import AppName from "./components/AppName"
import AddToDo from "./components/AddToDo"
import ToDoItem from "./components/ToDoItem"
import ToDoItem1 from "./components/ToDoItem1"
import "./App.css"

function App() {

  return (
    <center className="todoContainer">
      <AppName></AppName>
      <AddToDo></AddToDo>
      <div className="itemsContainer">
        <ToDoItem></ToDoItem>
        <ToDoItem1></ToDoItem1>
      </div>

    </center >
  )
}

export default App
