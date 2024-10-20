import React from 'react'

// function FoodInput({ handleOnChange }) {

function FoodInput({ handleKeyDown }) {

  // const enteredFood = (value) => {
  //   console.log(value);
  // }
  return (
    <>
      {/* <input type="text" className='foodInput' placeholder='Enter food' onChange={enteredFood} /> */}
      {/* <input type="text" className='foodInput' placeholder='Enter food' onChange={handleOnChange} /> */}
      <input type="text" className='foodInput' placeholder='Enter food' onKeyDown={handleKeyDown} />
    </>
  )
}

export default FoodInput