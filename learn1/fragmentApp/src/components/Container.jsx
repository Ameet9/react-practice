import React from 'react'

function Container(props) {
  return (
    <div className='styleContainer'>{props.children}</div>
  )
}

export default Container