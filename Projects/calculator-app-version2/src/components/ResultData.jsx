import React from 'react'

function ResultData({ displayValue }) {
  return (
    <>
      <input type="text" className='resultText' value={displayValue} readOnly />
    </>
  )
}

export default ResultData