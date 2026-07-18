import React from 'react'

function Dish({name, price}) {
  return (
    <div>
      <h4>Dish name : {name}</h4>
      <h4>Dish price : {price}</h4>
    </div>
  )
}

export default Dish