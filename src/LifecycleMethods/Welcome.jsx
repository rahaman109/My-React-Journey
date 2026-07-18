import React from 'react'

function Welcome({name}) {
  if(name === "Sai"){
    throw Error("Something went Wrong");
  }
  return (
    <div>
      <h1>Welcome - {name}</h1>
    </div>
  )
}

export default Welcome