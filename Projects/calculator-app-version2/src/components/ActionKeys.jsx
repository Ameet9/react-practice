import React from 'react'
function ActionKeys({ allButtons, sendToApp }) {
  return (
    <>
      <div className="container text-center buttonsDiv" >
        <div className="row row-cols-3">
          {allButtons.map(b => (
            <div className="col colDiv" key={b} >
              <button type="button" className="btn btn-secondary buttonEle" onClick={() => sendToApp(b)}>{b}</button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ActionKeys