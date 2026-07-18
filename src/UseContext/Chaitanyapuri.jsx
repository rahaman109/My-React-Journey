import { useContext } from 'react'
import VictoriaMemorial from './VictoriaMemorial'
import { SnacksItems } from './Zepto'

function Chaitanyapuri() {
 let {item1, item2, item3} = useContext(SnacksItems);
  return (
    <div>
      <VictoriaMemorial/>
      <h2>My Snacks</h2>
      <ol>
        <li>{item1}</li>
        <li>{item2}</li>
        <li>{item3}</li>
      </ol>
    </div>
  )
}

export default Chaitanyapuri