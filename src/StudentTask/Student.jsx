import React from 'react'

function Student({batchCode, Yop, place, children}) {
  return (
    <div>
      <h4>Batch code : {batchCode}</h4>
      <h4>Yop : {Yop}</h4>
      <h4>Placement status : {place}</h4>

      {children}
    </div>
  )
}

export default Student