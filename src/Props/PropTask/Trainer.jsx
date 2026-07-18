import React from 'react'

function Trainer({image, name, age, designation}) {
  return (
    <div>
      <img src={image} alt={name}height={400}/>
      <h2>Tainer Name : {name}</h2>
      <h4>Trainer Age : {age}</h4>
      <h4>Trainer Designation : {designation}</h4>
    </div>
  )
}

export default Trainer