//import React from 'react'
import './App.css'
import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
import Container from './components/Container'
import FoodInput from './components/FoodInput';
import { useState } from 'react';

function App() {
  //let foods = [];
  //let foods = ["pizza", "burger", "salad", "potato", "vegetables"];

  //  let textStateArr = useState();
  // let textStateArr = useState("Entered Text is here");

  let [textToDisplay, setTextState] = useState("Entered Text is here");
  let [foods, setFoodState] = useState(["pizza", "burger", "salad"]);


  // let textToDisplay = textStateArr[0];
  // let setTextState = textStateArr[1];
  console.log("curent", textToDisplay);


  //let textToDisplay = "Entered Text is here";

  // if (foods.length === 0) {
  //   return <h3>No Food items</h3>
  // }
  // const handleOnChange = (e) => {
  //   console.log(e.target.value);
  //   //textToDisplay = e.target.value;
  //   setTextState(e.target.value);
  // }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      let newFoodItem = e.target.value;
      e.target.value = "";
      let newItems = [...foods, newFoodItem];
      setFoodState(newItems);
    }
  }

  return (
    //<React.Fragment></React.Fragment>
    <>
      <Container>
        <h1>Healthy Food</h1>
        {/* <FoodInput handleOnChange={handleOnChange}></FoodInput> */}

        <FoodInput handleKeyDown={handleKeyDown}></FoodInput>

        {/* <p>{textToDisplay}</p> */}
        {foods.length === 0 ?
          <ErrorMessage />
          : <FoodItems foods={foods} />}
        {/* {foods.length === 0 && <h3>No Food items</h3>} */}
      </Container>
      <Container>
        <h2>Hello please do it</h2>
      </Container>
    </ >
  )
}

export default App
