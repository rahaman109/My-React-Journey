import React, { memo } from 'react'

function Button({children, func}) {
  console.log(`${children} component rendering`)
  return (
    <div>
      <button onClick={func}>{children}</button>
    </div>
  )
}

export default memo(Button)