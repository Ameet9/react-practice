import React from 'react'

function SingleButton({ buttonContent }) {
  return (
    <>
      <button type="button" className="btn btn-secondary buttonEle">{buttonContent}</button>
    </>
  )
}

export default SingleButton