// function Koduku({item, name, wife,skills, education:{degree, result}, fun}) {

//   return (
//     <div align="left">
//       <h4>Nanna gives {item} and her name is {name}</h4>
//       <p>She is my wife -- {wife ? "True " : "False"}</p>
//       <h4>Things son will do:</h4>
//       <ol>
//         {
//           skills.map((ele) =>
//           {
//             return <li>{ele}</li>
//           })
//         }
//       </ol>

//       <h4>Education:</h4>
//       <p>Degree: {degree}</p>
//       <p>Result: {result}</p>

//       <p>{fun()}</p>
//     </div>
//   )
// }

// export default Koduku


//! Default Props and children props 

// import React from 'react'

// function Koduku({item = "Money", worthy = "1000000", children}) {
//   return (
//     <div>
//       <p>Son recieved {item} from his Nanna
//         which is of ${worthy}
//       </p>
//       {children}
//     </div>
//   )
// }

// export default Koduku

//! Prop Drilling 
import React from 'react'
import Manavadu from './Manavadu'

function Koduku({item}) {
  return (
    <div>
      <Manavadu data ={item}></Manavadu>
    </div>
  )
}

export default Koduku