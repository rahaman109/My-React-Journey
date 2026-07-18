import React from 'react'

function MoviesInfro({data}) {
  return (
    <div align = "left">
      <h2>----- Here Movie Details -----</h2>
      <h4> Movie Name: {data.name}</h4>
      <h4> Hero Name: {data.hero}</h4>
      <h4> Heroine Name: {data.heroine}</h4>
      <hr />
    </div>
  )
}

export default MoviesInfro