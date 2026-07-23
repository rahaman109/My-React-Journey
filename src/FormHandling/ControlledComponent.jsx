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

// import { useState } from 'react'
// const ControlledComponent = () => {
//   let [details, setDetails] = useState({
//     name: "",
//     email: "",
//     password: "",
//     age: "",
//     phone: "",
//     date: "",
//     datetime: "",
//     week: "",
//     month: "",
//     time: "",
//     gender: "",
//     skills: [],
//     photo: "",
//     country: "",
//     feedback: "",
//     color: "#000000",
//     brightness: ""
//   })
//   let { name, email, password, age, phone, date, datetime, week, month, time, gender, skills, photo, country, feedback, color, brightness } = details

//   let handleChange = (e) => {
//     let { name, value, type, checked, files } = e.target
//     if (type === "checkbox") {
//       let copiedSkills = [...skills]
//       if (checked) {
//         copiedSkills.push(value)
//       } else {
//         copiedSkills = copiedSkills.filter(item => item !== value)
//       }
//       setDetails({ ...details, [name]: copiedSkills })
//     } else if (type === "file") {
//       setDetails({ ...details, [name]: files[0] })
//     } else {
//       setDetails({ ...details, [name]: value })
//     }
//   }

//   let handleSubmit = (e) => {
//     e.preventDefault()
//     console.log(details)
//   }
//   return (
// <form onSubmit={handleSubmit}>
//   <fieldset>
//     <legend>Registration  htmlForm 🔥</legend>
//     <label htmlFor="name">Name:</label>
//     <input type="text" id='name' name='name' value={name} onChange={handleChange} />
//     <br /><br />
//     <label htmlFor="email">Email:</label>
//     <input type="email" id='email' name='email' value={email} onChange={handleChange} />
//     <br /><br />
//     <label htmlFor="password">Password:</label>
//     <input type="password" id='password' name='password' value={password} onChange={handleChange} />
//     <br /><br />
//     <label htmlFor="age">Age:</label>
//     <input type="number" name="age" id="age" value={age} onChange={handleChange} />
//     <br /><br />
//     <label htmlFor="phone">Phone:</label>
//     <input type="tel" name="phone" id="phone" value={phone} onChange={handleChange} />
//     <br /><br />
//     <label htmlFor="dob">Dob:</label>
//     <input type="date" name="date" id="dob" value={date} onChange={handleChange} />
//     <input type="datetime-local" name="datetime" value={datetime} onChange={handleChange} />
//     <input type="week" name="week" value={week} onChange={handleChange} />
//     <input type="month" name="month" value={month} onChange={handleChange} />
//     <input type="time" name="time" value={time} onChange={handleChange} />
//     <br /><br />
//     <label>Gender:</label>
//     <input type="radio" id="male" name="gender" value="Male" onChange={handleChange} />
//     <label htmlFor="male">Male</label>
//     <input type="radio" id="female" name="gender" value="Female" onChange={handleChange} />
//     <label htmlFor="female">Female</label>
//     <br /><br />
//     <label>Skills:</label>
//     <input type="checkbox" id="html" name="skills" value="Html" onChange={handleChange} />
//     <label htmlFor="html">Html</label>
//     <input type="checkbox" id="css" name="skills" value="Css" onChange={handleChange} />
//     <label htmlFor="css">Css</label>
//     <input type="checkbox" id="js" name="skills" value="Js" onChange={handleChange} />
//     <label htmlFor="js">Js</label>
//     <input type="checkbox" id="react" name="skills" value="ReactJs" onChange={handleChange} />
//     <label htmlFor="react">ReactJS</label>
//     <br /><br />
//     <label htmlFor="photo">Upload Photo:</label>
//     <input type="file" id="photo" name="photo" onChange={handleChange} />
//     <br /><br />
//     <label htmlFor="country">Country:</label>
//     <select id="country" name="country" value={country} onChange={handleChange}>
//       <option hidden>-- Select Country --</option>
//       <option value="India">India</option>
//       <option value="Usa">Usa</option>
//       <option value="Australia">Australia</option>
//       <option value="Russia">Russia</option>
//       <option value="Germany">Germany</option>
//     </select>
//     <br /><br />
//     <label htmlFor="feedback">Feedback:</label>
//     <textarea id="feedback" rows="5" cols="50" name="feedback" value={feedback} onChange={handleChange}></textarea>
//     <br /><br />
//     <label htmlFor="color">Select Color:</label>
//     <input type="color" id="color" name="color" value={color} onChange={handleChange} />
//     <br /><br />
//     <label htmlFor="range">Brightness:</label>
//     <input type="range" name="brightness" min="0" max="100" value={brightness} onChange={handleChange} />
//     <br /><br />
//     <input type="submit" value="Register" />
//     <input type="reset" value="Clear" />
//   </fieldset>
// </form>
//   )
// }
// export default ControlledComponent

// ! Example - 4

// import { useForm } from "react-hook-form";

// const ControlledComponent = () => {
//   let { register, handleSubmit } = useForm();
//   let handleFormData = (data) => {
//     console.log(data);
//   };
//   return (
//     <form onSubmit={handleSubmit(handleFormData)}>
//       <fieldset>
//         <legend>Registration Form 🔥</legend>
//         <label htmlFor="name">Name:</label>
//         <input type="text" id="name" {...register("name")} />
//         <br />
//         <br />
//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" {...register("email")} />
//         <br />
//         <br />
//         <label htmlFor="password">Password:</label>
//         <input type="password" id="password" {...register("password")} />
//         <br />
//         <br />
//         <label htmlFor="age">Age:</label>
//         <input type="number" id="age" {...register("age")} />
//         <br />
//         <br />
//         <label htmlFor="phone">Phone:</label>
//         <input type="tel" id="phone" {...register("phone")} />
//         <br />
//         <br />
//         <label htmlFor="dob">Dob:</label>
//         <input type="date" id="dob" {...register("date")} />
//         <input type="datetime-local" {...register("datetime")} />
//         <input type="week" {...register("week")} />
//         <input type="month" {...register("month")} />
//         <input type="time" {...register("time")} />
//         <br />
//         <br />
//         <label>Gender:</label>
//         <input type="radio" id="male" value="Male" {...register("gender")} />
//         <label htmlFor="male">Male</label>
//         <input
//           type="radio"
//           id="female"
//           value="Female"
//           {...register("gender")}
//         />
//         <label htmlFor="female">Female</label>
//         <br />
//         <br />
//         <label>Skills:</label>
//         <input type="checkbox" id="html" value="Html" {...register("skills")} />
//         <label htmlFor="html">Html</label>
//         <input type="checkbox" id="css" value="Css" {...register("skills")} />
//         <label htmlFor="css">Css</label>
//         <input type="checkbox" id="js" value="Js" {...register("skills")} />
//         <label htmlFor="js">Js</label>
//         <input
//           type="checkbox"
//           id="react"
//           value="ReactJs"
//           {...register("skills")}
//         />
//         <label htmlFor="react">ReactJS</label>
//         <br />
//         <br />
//         <label htmlFor="photo">Upload Photo:</label>
//         <input type="file" id="photo" {...register("photo")} />
//         <br />
//         <br />
//         <label htmlFor="country">Country:</label>
//         <select id="country" {...register("country")}>
//           <option hidden>-- Select Country --</option>
//           <option value="India">India</option>
//           <option value="Usa">Usa</option>
//           <option value="Australia">Australia</option>
//           <option value="Russia">Russia</option>
//           <option value="Germany">Germany</option>
//         </select>
//         <br />
//         <br />
//         <label htmlFor="feedback">Feedback:</label>
//         <textarea
//           id="feedback"
//           rows="5"
//           cols="50"
//           {...register("feedback")}
//         ></textarea>
//         <br />
//         <br />
//         <label htmlFor="color">Select Color:</label>
//         <input type="color" id="color" {...register("color")} />
//         <br />
//         <br />
//         <label htmlFor="range">Brightness:</label>
//         <input type="range" min="0" max="100" {...register("brightness")} />
//         <br />
//         <br />
//         <input type="submit" value="Register" />
//         <input type="reset" value="Clear" />
//       </fieldset>
//     </form>
//   );
// };

// export default ControlledComponent;


//! Example - 5


import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const rules = yup.object({
  name:yup.string().required("Name is required").min(5, "Enter minimum of 5 characters").max(20, "Enter maximun of 20 Characters"),
  email:yup.string().required("Email is required").email("Invalid email address"),
  password: yup.string().required("Password required").min(8, "Minimum password contains 8 characters"),
  age:yup.number().typeError("Age Must be a number").required("Age Required").min(18, "Minimum age is 18").max(60, "Maximum age is 60"),
  phone:yup.string().required("Phone Number Required").matches(/^[6-9]\d{9}$/,"Invalid number"),
  date:yup.string().required("Select Date"),
  gender:yup.string().required("Select Gender"),
  skills:yup.array().min(1, "Select at least one skill"),
  country:yup.string().required("Select country"),
  feedback:yup.string().required("Feedback required").min(10, "Minimum 10 characters"),
  color:yup.string().required("Select color"),
  brightness:yup.string().required("Select brightness")
})

const ControlledComponent = () => {
  let { register, handleSubmit, formState:{errors}} = useForm({
    resolver:yupResolver(rules)
  });

  console.log(errors);

  let handleFormData = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(handleFormData)}>
      <fieldset>
        <legend>Registration Form 🔥</legend>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" {...register("name")} />
        <p style={{color:"red"}}>{errors.name?.message}</p>
        <br />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" {...register("email")} />
        <p style={{color:"red"}}>{errors.name?.message}</p>
        <br />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" {...register("password")} />
        <p style={{color:"red"}}>{errors.name?.message}</p>
        <br />
        <br />
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" {...register("age")} />
        <p style={{color:"red"}}>{errors.name?.message}</p>
        <br />
        <br />
        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" {...register("phone")} />
        <p style={{color:"red"}}>{errors.name?.message}</p>
        <br />
        <br />
        <label htmlFor="dob">Dob:</label>
        <input type="date" id="dob" {...register("date")} />
        <input type="datetime-local" {...register("datetime")} />
        <input type="week" {...register("week")} />
        <input type="month" {...register("month")} />
        <input type="time" {...register("time")} />
        <p style={{color:"red"}}>{errors.name?.message}</p>
        <br />
        <br />
        <label>Gender:</label>
        <input type="radio" id="male" value="Male" {...register("gender")} />
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          id="female"
          value="Female"
          {...register("gender")}
        />
        <label htmlFor="female">Female</label>
        <p style={{color:"red"}}>{errors.name?.message}</p>
        <br />
        <br />
        <label>Skills:</label>
        <input type="checkbox" id="html" value="Html" {...register("skills")} />
        <label htmlFor="html">Html</label>
        <input type="checkbox" id="css" value="Css" {...register("skills")} />
        <label htmlFor="css">Css</label>
        <input type="checkbox" id="js" value="Js" {...register("skills")} />
        <label htmlFor="js">Js</label>
        <input
          type="checkbox"
          id="react"
          value="ReactJs"
          {...register("skills")}
        />
        <label htmlFor="react">ReactJS</label>
        <p style={{color:"red"}}>{errors.name?.message}</p>
        <br />
        <br />
        <label htmlFor="photo">Upload Photo:</label>
        <input type="file" id="photo" {...register("photo")} />
        <p style={{color:"red"}}>{errors.name?.message}</p>
        <br />
        <br />
        <label htmlFor="country">Country:</label>
        <select id="country" {...register("country")}>
          <option hidden>-- Select Country --</option>
          <option value="India">India</option>
          <option value="Usa">Usa</option>
          <option value="Australia">Australia</option>
          <option value="Russia">Russia</option>
          <option value="Germany">Germany</option>
        </select>
        <p style={{color:"red"}}>{errors.name?.message}</p>
        <br />
        <br />
        <label htmlFor="feedback">Feedback:</label>
        <textarea
          id="feedback"
          rows="5"
          cols="50"
          {...register("feedback")}
        ></textarea>
        <p style={{color:"red"}}>{errors.name?.message}</p>
        <br />
        <br />
        <label htmlFor="color">Select Color:</label>
        <input type="color" id="color" {...register("color")} />
        <p style={{color:"red"}}>{errors.name?.message}</p>
        <br />
        <br />
        <label htmlFor="range">Brightness:</label>
        <input type="range" min="0" max="100" {...register("brightness")} />
        <p style={{color:"red"}}>{errors.name?.message}</p>
        <br />
        <br />
        <input type="submit" value="Register" />
        <p style={{color:"red"}}>{errors.name?.message}</p>
        <input type="reset" value="Clear" />
        <p style={{color:"red"}}>{errors.name?.message}</p>
      </fieldset>
    </form>
  );
};

export default ControlledComponent;
