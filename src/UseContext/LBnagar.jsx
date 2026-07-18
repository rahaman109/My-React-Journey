import React, { useContext } from 'react'
import { IcecreamContext } from './Zepto'

function LBnagar() {
  let iceCreame = useContext(IcecreamContext);
  return (
    <div>
      <h2>I received {iceCreame}</h2>
    </div>
  )
}

export default LBnagar