import React from 'react'
import Item from './Item'

export default function FoodItems(props) {
  let { foods } = props;
  let addStyle = (v) => {
    console.log(`${v} bought recently`)
    let div = document.getElementById(v)
    div.classList.add("addBold");
  }
  return (
    <ul className="list-group">
      {foods.map((i) =>
        // <Item foodItem={i} key={i} handleBuyBtn={() => console.log(`${i} bought recently`)
        // }></Item>
        <Item foodItem={i} key={i} handleBuyBtn={() => addStyle(i)
        }></Item>
      )}

    </ul>
  )
}
