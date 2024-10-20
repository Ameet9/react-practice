import React from 'react'

// export default function Item(props) {
//   return (
//     <li className="list-group-item" key={props.foodItem}>{props.foodItem}</li>
//   )
// }

export default function Item({ foodItem, handleBuyBtn }) {
  // const handleBuy = (event) => {
  //   console.log(event);
  //   console.log(`${foodItem} bought`);
  // }
  return (
    <li className="list-group-item" key={foodItem} id={foodItem}>{foodItem}
      {/* <button className="btn btn-primary buyBtn" onClick={handleBuy}>Buy</button> */}
      {/* <button className="btn btn-primary buyBtn" onClick={(event) => handleBuy(event)}>Buy</button> */}
      <button className="btn btn-primary buyBtn" onClick={handleBuyBtn}>Buy</button>
    </li>
  )
}