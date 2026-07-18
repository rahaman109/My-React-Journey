import { useContext } from 'react'
import LBnagar from './LBnagar'
import { ChipsContext } from './Zepto';

function VictoriaMemorial() {
  let chipsPacket = useContext(ChipsContext);
  return (
    <div>
      <h2>Iam Eating {chipsPacket}</h2>
      <LBnagar/>
    </div>
  )
}

export default VictoriaMemorial