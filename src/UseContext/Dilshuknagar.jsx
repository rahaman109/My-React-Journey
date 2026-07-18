import { useContext } from 'react'
import Chaitanyapuri from './Chaitanyapuri'
import { AlertContext } from './Zepto'

function Dilshuknagar() {
  let alertPopup = useContext(AlertContext);
  return (
    <div>
      <Chaitanyapuri/>
      <button onClick={alertPopup}>Click Here</button>
    </div>
  )
}

export default Dilshuknagar 