// import Koduku from "./Koduku"
// let status = () =>
// {
//   return "This story completed..."
// }

// function Nanna() {
//   return (
//     <div>
//       <Koduku item = "kodalu" name ="Lachuuu <3" wife = {true}
//       skills={["Sleep", "Eat", "Watching colors"]} 
//       education={{degree: "B.sc", result:"Pass"}} fun={status}/>
//     </div>
//   )
// }

// export default Nanna

//! Default Props and children props 

// import React from 'react'
// import Koduku from './Koduku'

// function Nanna() {
//   return (
//     <div>
//       <Koduku item = "Gold Chain">
//         <h1>Hey Hi... am a children prop</h1>
//       </Koduku>
//     </div>
//   )
// }

// export default Nanna

//! Prop Drilling 

import React from 'react'
import Koduku from './Koduku'

export default function Nanna() {
  return (
    <div>
      <Koduku item = "Gold Chain">
        
      </Koduku>
    </div>
  )
}
