// ! Example - 1

// import { useState } from 'react'

// function ControlledComponent() {

//   let [type, setType] = useState("")

//   let handleUserTyping = (ele) =>
//   {
//     setType(ele.target.value)
//   }
//   return (
//     <div>
//       <input type="text" placeholder='Enter your name' value={type} name='type' onChange={handleUserTyping}/>
//       <h1>User Typing : {type}</h1>
//     </div>
//   )
// }

// export default ControlledComponent


//! Example - 2

// import React, { useState } from 'react'
// function ControlledComponent() {
//   let [details, setDetails] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });
// let {name, email, password} = details;

// let handleChange = (e) =>
// {
//   let {name, value} = e.target;
//   setDetails({
//     ...details,
//     [name]: value
//   })
// } 

// let handleSubmit = (e) =>
// {
//   e.preventDefault()
//   console.log(details); 
// }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <fieldset>
//           <legend>Register Form 🔥</legend>
//           <label htmlFor='name'>Name: </label>
//           <input type="text" id='name' name='name' value={name}  onChange={handleChange}/>
//           <br /><br />
//           <label htmlFor='email'>Email: </label>
//           <input type="email" id='email' name='email' value={email} onChange={handleChange} />
//           <br /><br />
//           <label htmlFor='password'>Password: </label>
//           <input type="password" id='password' name='password' value={password} onChange={handleChange}/>
//           <br /><br />  
//           <input type="button" value="Register"/>
//         </fieldset>
//       </form>
//     </div>
//   )
// }

// export default ControlledComponent

//! Example - 3

import React, { useState } from 'react'

function ControlledComponent() {
  let [details, setDetails] = useState({
    name:"",
    email:"",
    password:"",
    date:"",
    dateTime:"",
    time:""
  })

  let {name, email, password, date, dateTime, time} = details;


  let handleChange = (e) =>
  {
    let {name, value} = e.target;

    setDetails({
      ...details,
      [name] : value
    })
  }

  let handleSubmit = (e) =>
  {
    e.preventDefault();
    console.log(details);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Form 📝</legend>
        <label htmlFor="name">Name: </label>
        <input type="text" id='name' name='name'value={name}  onChange={handleChange}/>
        <br /><br />
        <label htmlFor="email">Email: </label>
        <input type="email" id='email' name='email'value={email}  onChange={handleChange}/>
        <br /><br />
        <label htmlFor="password">Password: </label>
        <input type="password" id='password'name='password' value={password}  onChange={handleChange}/>
        <br /><br />
        <input type="date" name='date'value={date}  onChange={handleChange}/>
        <input type="datetime-local" name='dateTime' value={dateTime}  onChange={handleChange} />
        <input type="time" name='time'value={time}  onChange={handleChange} />
        <br /><br />
        <input type="submit" value="Register"/>
        </fieldset>
      </form>
    </div>
  )
}

export default ControlledComponent