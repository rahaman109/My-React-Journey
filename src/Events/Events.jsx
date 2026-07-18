

//! Example - 1 

// function Events() {
// let handleTime = () =>
// {
//   alert(new Date().toLocaleTimeString())
// }

//   return (
//     <div>
//       <button onClick={handleTime}>
//         Generate Time
//       </button>
//     </div>
//   )
// }

// export default Events


//! Example - 2 

// import React from 'react'

// function Events() {
//   return (
//     <div align = "left">
//       <button onClick={()=>console.log(Math.random())}>
//         Generate Random Number
//       </button>
//     </div>
//   )
// }

// export default Events

// ! Example - 3 

// import React from 'react'

// function Events() {

//   let greetUser = (name) =>
//   {
//     console.log(`Good Afternoon, ${name}`);
//   }

//   return (
//     <div>
//       <button onClick={()=>greetUser("Sai")}>
//         Greet User
//       </button>
//     </div>
//   )
// }

// export default Events


//! Event Object 

import React from 'react'

function Events() {

  let handleMessage = (e) =>
  {
    console.log(e);
    console.log(e.target);
    console.log(e.type);
  }
  return (
    <div>
      <button onClick={handleMessage}>
        Generate Message
      </button>
    </div>
  )
}

export default Events