import React from 'react'

function Trainer({ img, name, designation, experience}) {
  return (
    <div>
      <img src={img} alt="logo" height={400}/>
      <h4>Trainer Name : {name}</h4>
      <h4>Trainer Designation : {designation}</h4>
      <h4>Trainer Experience : {experience}</h4>
    </div>
  )
}

export default Trainer