//! Example -1  Number state

// import { useState } from 'react'

// function State() {

// let [count, setCount] = useState(0);

// let handleIncrement = () =>
// {
//   setCount(count+1);
// }

// let handleDecrement = () =>
// {
//   setCount(count-1);
// }

// let handleReset = () =>
// {
//   setCount(0);
// }

//   return (
//     <div>
//       <h1>Count : {count} </h1>
//       <button onClick={handleIncrement}>Increment</button>
//       <br />
//       <button onClick={handleDecrement}>Decrement</button>
//       <br />
//       <button onClick={handleReset}>Reset</button>
//       <br />
//     </div>
//   )
// }

// export default State


//! Example - 2 String state 

// import React, { useState } from 'react'

// function State() {
//   let [heroine, setHeroine] = useState("");
  
//   let favOne = () =>
//   {
//     setHeroine("MrunalThakur");
//   }
//   let favTwo = () =>
//   {
//     setHeroine("Priyanka Mohan");
//   }

//   let favThree = () =>
//   {
//     setHeroine("Kayadu");
//   }
//   return (
//     <div>
//       <h1>I love😚: {heroine}</h1>
//       <button onClick={favOne}>Mrunal Thakur</button>
//       <br />
//       <button onClick={favTwo}>Priyanka Mohan</button>
//       <br />
//       <button onClick={favThree}>kayadu</button>
//     </div>
//   )
// }

// export default State


// ! Example - 3 boolean State

// import React, { useState } from 'react'

// function State() {
//   let [theme, setTheme] = useState(true);

//   let handleTheme = () =>
//   {
//     setTheme(!theme);
//   }
//   return (
//     <div>
//       <h1>Theme : {theme? "Light" : "Dark"}</h1>
//       <button onClick={handleTheme}>{theme? "Switch to Dark Mode" : "Switch to light Mode"}</button>
//     </div>
//   )
// }

// export default State

//! Example - 4 Array State

// import { useState } from 'react'

// function State() {
//  let [subjects, setSubjects]= useState(["html", "css", "Js"]);

//  let addSubject = () =>
//  {
//   setSubjects([...subjects, "React"])
//  }
//   return (
//     <div align = "left">
//       <h1>Frontend Subjects: </h1>
//       <ol>
//         {
//           subjects.map((subject) =>
//           {
//             return <li>{subject}</li>
//           })
//         }
//       </ol>
//       <button onClick={addSubject}>Add React Subject</button>
//     </div>
//   )
// }

// export default State

//! 03-07-2026

//! Example - 5 Object State 

// import {useState} from 'react'

// function State() {
//   let [details, setDetails] = useState({
//     name:"Rahaman",
//     age: 21
//   })
//   let {name, age} = details;

//   let handleInfo = () =>
//   {
//     setDetails({
//       ...details,
//       age : 22
//     })
//   }
//   return (
//     <div>
//       <h1>Name: {name}</h1>
//       <p>Iam {age} years old...</p>
//       <button onClick={handleInfo}>Update Information</button>
//     </div>
//   )
// }

// export default State


//! Example - 5 Function state 

// import React, { useState } from 'react'

// function State() {

//   let [count, setCount] = useState(0);

//   let handleIncrement = () =>
//   {
//     setCount((prevCount) =>
//   {
//     console.log(prevCount);
//     return prevCount + 1
//   });
//   }

//   let handleDecrement = () =>
//   {
//     setCount((prevCount) =>
//     {
//       console.log(prevCount);
//       return prevCount - 1;
//     });
//   }

//   let handleReset = () =>
//   {
//     setCount(0);
//   }
//   return (
//     <div align = "left">
//       <h1>Count : {count}</h1>
//       <button onClick={handleIncrement}>Increment</button>
//       <br />
//       <button onClick={handleDecrement}>Decrement</button>
//       <br />
//       <button onClick={handleReset}>Reset</button>
//     </div>
//   )
// }

// export default State


//! useState() BASED TASK....


import React, { useState } from 'react'

function State() {

  //@ String state 
 let [course, setCourse]= useState("ReactJs");

 let handleCourse = () =>
 {
   setCourse(course === "ReactJs"? "AngularJs": "ReactJs")
 }

 //@ Number state 

 let [quantity, setQuantity] = useState(1);

let increaseQuantity = () =>
{
  setQuantity(quantity + 1)
}

let decreaseQuantity = () =>
{
  setQuantity(quantity - 1);
}
//@ Boolean State

let [status, setStatus] = useState(true);

let handleStatus = () =>
{
  setStatus(!status);
}

// @ Array State 

let [subject, setSubjects] = useState(["Html"])

let handleCss = () =>
{
  setSubjects([...subject, " Css"]);
}
let handleJs = () =>
{
  setSubjects([...subject, " JavaScript"]);
}

let handleReset = () =>
{
  setSubjects(["Html"]);
}

//@ Object State 

let [employee, setEmployee] = useState({
  id:1,
  department: true
})

let {id, department} = employee
let handleId = () =>
{
  setEmployee({
    ...employee,
     id : id + 1
  })
}

let handleDepartment = () =>
{
  setEmployee(
    {
      ...employee,
       department : !(department)
    }
  );
}

//@ Array of Object State 
let [product, setProduct] = useState([{
  id : 1,
  productName: "Laptop"
}])


  return (
    <div align = "left">
      <h1>Course Name: {course}</h1>
      <button onClick={handleCourse}>Change Course</button>

      <h1>Quantity : {quantity}</h1>
      <button onClick={increaseQuantity}>Increase Quantity</button>
      <br />
      <button onClick={decreaseQuantity}>Decrease Quantity</button>


      <h1> Status : {status == true ? "Online": "Offline"} </h1>
      <button onClick={handleStatus}>{status == true? "online" : "offline"}</button>

      <h1>{subject}</h1>
      <button onClick={handleCss}>Add Css</button>
      <br />
      <button onClick={handleJs}>Add JavaScript</button>
      <br />
      <button onClick={handleReset}>Reset</button>


      <h1>Employee ID: {id}</h1>
      <h1>Department: {department == true? "Development" : "Testing"}</h1>
      <button onClick={handleId}>Change ID</button>
      <br />
      <button onClick={handleDepartment}>Change Department</button> 

      <h1>Products: </h1>
      <button>Add Product</button>
      <button>Remove Product</button>
    </div>
  )
}

export default State




