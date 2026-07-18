import React from 'react'

function Restaurant({name, location, pincode}) {
  return (
    <div>
      <h2>Hotel name : {name}</h2>
      <h4>Hotel Location : {location}</h4>
      <h4>Hotel pincode : {pincode}</h4>

      <p>Visit Agian 😁</p>
    </div>
  )
}

export default Restaurant