import React from 'react'
import SingleButton from './SingleButton'
function ActionKeys({ allButtons }) {
  return (
    <>
      <div class="container text-center buttonsDiv" >
        <div class="row row-cols-3">
          {allButtons.map(b => (
            <div class="col"><SingleButton key={b} buttonContent={b} /></div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ActionKeys