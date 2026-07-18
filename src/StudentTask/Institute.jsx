import React from 'react'

function Institute({name, location, year}) {
  return (
    <div>
      <h4>Institute name : {name}</h4>
      <h4>Institute location : {location}</h4>
      <h4>Established year : {year}</h4>
    </div>
  )
}

export default Institute