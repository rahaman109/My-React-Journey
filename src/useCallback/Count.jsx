import React, { memo } from 'react'

function Count({text, value}) {
  console.log(`${text} component rendering`)
  return (
    <div>
      <h2>{text} : {value}</h2>
    </div>
  )
}

export default memo(Count)