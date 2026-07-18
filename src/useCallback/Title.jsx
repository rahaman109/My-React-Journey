import React, { memo } from 'react'

function Title() {
  console.log("Text component rendering")
  return (
    <div>
      <h2>useCallback Hook</h2>
    </div>
  )
}

export default memo(Title)