import './App.css'
import Header from './components/Header'
import ShowTime from './components/ShowTime'
import Info from './components/Info'

function App() {

  return (
    <center>
      <div className="centerDiv">
        <Header></Header>
        <Info></Info>
        <ShowTime></ShowTime>
      </div>
    </center>
  )
}

export default App
