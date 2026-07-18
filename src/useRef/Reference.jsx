// ! Example - 1 

// @ Focusing upon Input Feilds....

// import React, { useRef } from 'react'
// function Reference() {
//   let inputRef = useRef(null);
//   let handleFocus = () =>
//   {
//     inputRef.current.focus();
//   }
//   return (
//     <div>
//       <input type="text" ref={inputRef}/>
//       <br />
//       <button onClick={handleFocus}>Click to Focus</button>
//     </div>
//   )
// }

// export default Reference

//! Example - 2 

//@ Changeing the values of input feild 

// import { useRef } from 'react'

// function Reference() {
//   let inputRef = useRef(null);
//   let handleValue = () =>
//   {
//     inputRef.current.value = "RAHAMAN"
//   }
//   return (
//     <div>
//       <input type="text" ref ={inputRef}/>
//       <br />
//       <button onClick={handleValue}>Chnage Value</button>
//     </div>
//   )
// }

// export default Reference

//! Example - 3

//@ Storing the mutable values

import { useRef } from 'react'

function Reference() {
  let countRef = useRef(0);
  let handleIncrement = () =>
  {
    countRef.current++;
    console.log(countRef.current);
  }
  return (
    <div>
      <h1>Count: {countRef.current}</h1>
      <button onClick={handleIncrement}>Increment Count</button>
    </div>
  )
}

export default Reference