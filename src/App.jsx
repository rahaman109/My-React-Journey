// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
// import "./App.css";

// //! Expression

// let greet = _ => "Good Afternoon";
// let hadFoodNicely = false;
// let reason = ["Class", "Food", "Ac", "NightOut"];

// const App = () => {
//   let name = "Abdul rahaman";

//   return <div>
//     <h1>My name is {name}</h1>
//     <p>My age is {20 + 1}</p>
//     <h1>
//       {greet()} {name}
//     </h1>
//     <p>{hadFoodNicely ? "Sleep in the class" : "Still try to sleep"}</p>
//     <h1>Reasons to feel sleepy</h1>
//     <ol>
//       {reason.map((ele) => {
//         return <li>{ele}</li>;
//       })}
//     </ol>
//   </div>;
// };

// export default App;

//! 18 - 06 - 2026

//@ Rules of fragments and Expressions
// import React from 'react'
// import Navbar from './JSX/Navbar'
// import Welcome from './JSX/Welcome'
// import Product from './JSX/Product'
// import Rules from './JSX/Rules'

// export default function App() {
//   return (
//     <div>
//       <Navbar/>
//       <Welcome/>
//       <Product/>
//       <Rules/>
//     </div>
//   )
// }

//! 19 - 06 - 2026

// //! Props ...

// import Nanna from './Props/Nanna'

// export default function App() {
//   return (
//     <div>
//       <Nanna/>
//     </div>
//   )
// }

//! Task ..

// import React from 'react'
// import Restaurant from './Props/PropTask/Restaurant'
// import Dish from './Props/PropTask/Dish'
// import Trainer from './Props/PropTask/Trainer'
// import Management from './Props/PropTask/Management'

// function App() {
//   return (
//     <div>
//       <Restaurant name = "AR hotel" location = "Hyderabad" pincode = {10101010}/>
//       <hr />
//       <Dish name = "Biriyani" price = "250"/>
//       <hr />
//       <Trainer image = "https://a-z-animals.com/media/2023/08/shutterstock-735713020-huge-licensed-scaled-1024x821.jpg" name = "Rahul sir" age = "25" designation = "React Trainer"/>
//       <hr />
//       <Management/>
//       <hr />
//     </div>
//   )
// }

// export default App

// ! student task

// import React from 'react'
// import Navbar from './StudentTask/Navbar'
// import Institute from './StudentTask/Institute'
// import Course from './StudentTask/Course'
// import Trainer from './StudentTask/Trainer'
// import Batch from './StudentTask/Batch'
// import Footer from './StudentTask/Footer'

// function App() {
//   return (
//     <div>
//       <Navbar image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiqUxqEwASFW3MLOJsCDsjULEdTe-zR9JKwcaKbX0faYnLfBff9p71Fs4&s=10" />
//       <Institute name = "Qspiders" location = "Hyderabad" year = {2025}/>
//       <Course course = "Java full stack" duration = "6 months" fees = {2950}/>
//       <Trainer img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiqUxqEwASFW3MLOJsCDsjULEdTe-zR9JKwcaKbX0faYnLfBff9p71Fs4&s=10" name = "Rahul sir" designation = "React trainer" experience = "3 years"/>
//       <Batch/>
//       <Footer company = "Qspiders Dilshuknagar">
//        <h2>Thank You For Visiting Our Portal</h2>
//        <p>All The Best For Your Career</p>
//       </Footer>
//     </div>
//   )
// }

// export default App

//! 23 - 06 - 2026

// import React from 'react'
// import List from './RenderingList/List'

// function App() {
//   return (
//     <div>
//       <List/>
//     </div>
//   )
// }

// export default App

// ! Rendering list task

// import React from 'react'
// import UserList from './RenderingListTask/UserList';
// import ProductList from './RenderingListTask/ProductList';
// const users = [
// { id: 1, userName: "Monty", userAge: 27 },
// { id: 2, userName: "Rahul", userAge: 25 },
// { id: 3, userName: "Pavan", userAge: 25 },
// ];

// const products = [
// { id: 1, productName: "T-Shirt", productPrice: "₹699" },
// { id: 2, productName: "Jeans", productPrice: "₹1200" },
// { id: 3, productName: "Shoes", productPrice: "₹999" },
// ];

// function App() {
//   return (
//     <div>
//       {
//         users.map((user) =>
//         {
//           return <UserList data = {user} key = {user.id}/>
//         })
//       }

//       {
//         products.map((product) =>
//         {
//           return <ProductList data = {product} key = {product.id}/>
//         })
//       }
//     </div>
//   )
// }

// export default App

//! 26 - 06 - 2026

// //!  Conditional Rendering

// import React from 'react'

// function App() {
//   return (
//     <div>App</div>
//   )
// }

// export default App

//! Events...

// import React from 'react'
// import Events from './Events/Events'

// function App() {
//   return (
//     <div>
//       <Events/>
//     </div>
//   )
// }

// export default App

//! 29-06-2026

//! State

// import React from 'react'
// import Counter from './State/Counter'
// import User from './State/User'
// import Theme from './State/Theme'

// function App() {
//   return (
//     <div>
//       {/* <Counter/>
//       <User/> */}
//       <Theme/>
//     </div>
//   )
// }

// export default App

//! 30/06/2026
//! State

// import React from 'react'
// import Lifecycle from './LifecycleMethods/Lifecycle'

// function App() {
//   return (
//     <div>
//       <Lifecycle/>
//     </div>
//   )
// }

// export default App

//! 01-07-2026

// import React from 'react'
// import Welcome from './LifecycleMethods/Welcome'
// import ErrorBoundary from './LifecycleMethods/ErrorBoundary'

// function App() {
//   return (
//     <div>
//       <ErrorBoundary>
//        <Welcome name = "Rahaman"/>
//       </ErrorBoundary>
//       <ErrorBoundary>
//        <Welcome name = "Harshii"/>
//       </ErrorBoundary>
//       <ErrorBoundary>
//        <Welcome name = "Sai"/>
//       </ErrorBoundary>
//     </div>
//   )
// }

// export default App

//! 02-07-2026

//! State

// ! Use State

// import React from 'react'
// import State from './Hook/State'

// function App() {
//   return (
//     <div>
//       <State/>
//     </div>
//   )
// }

// export default App

//! 07/07/2004

//! UseEffect..
// import Effect from './UseEffects/Effect'

// function App() {
//   return (
//     <div>
//       <Effect/>
//     </div>
//   )
// }

// export default App

//! 08-07-2026
//! useContext

// import React from 'react'
// import Dilshuknagar from './UseContext/Dilshuknagar'
// import { AlertContext, ChipsContext, IcecreamContext, SnacksItems } from './UseContext/Zepto'

// function App() {
//   let snacks = {
//     item1: "Burger",
//     item2: "Fries",
//     item3: "Diet Coke"
//   }

//   let alertMesge = () => alert("Finally UseContext topic over 😗")
//   return (
//     <div align = "left">
//       <IcecreamContext.Provider value ="Cornetto">
//         <ChipsContext.Provider value = "lays">
//           <SnacksItems.Provider value = {snacks}>
//             <AlertContext.Provider value = {alertMesge}>
//             <Dilshuknagar/>
//             </AlertContext.Provider>
//           </SnacksItems.Provider>
//         </ChipsContext.Provider>
//       </IcecreamContext.Provider>
//     </div>
//   )
// }

// export default App

//! 09 - 07 - 2026
//! useRef()

// import React from 'react'
// import Reference from './useRef/Reference'

// function App() {
//   return (
//     <div>
//       <Reference/>
//     </div>
//   )
// }

// export default App

//! UseContext task

// import React, { useState } from "react";
// import BranchHead from "./UseContext/useContextTask/BranchHead";
// import { AnnouncementContext } from "./UseContext/useContextTask/Management";

// function App() {
//   let [state, setState] = useState(
//     "📢 Management: Tomorrow is a holiday due to heavy rainfall.",
//   );
//   let handleAnnouncement = () => {
//     setState(
//       "📢 Holiday has been cancelled. Regular classes will be conducted as per schedule.",
//     );
//   };
//   return (
//     <div>
//       <AnnouncementContext.Provider value={state}>
//         <h1>App Component</h1>
//         <button onClick={handleAnnouncement}>Update Announcment</button>
//         <BranchHead />
//       </AnnouncementContext.Provider>
//     </div>
//   );
// }

// export default App;

//! 10-07-2026
//! useMemo
// import MemmoComponent from './useMemo/MemmoComponent'

// function App() {
//   return (
//     <div>
//       <MemmoComponent/>
//     </div>
//   )
// }

// export default App

//! useState Task
// import React from 'react'
// import State from './UseState/State'

// function App() {
//   return (
//     <div align = "left">
//       <State/>
//     </div>
//   )
// }

// export default App

//! 14-07-2026
//! useCallback

// import React, { useCallback, useState } from 'react'
// import Title from './useCallback/Title'
// import Count from './useCallback/Count'
// import Button from './useCallback/Button'

// function App() {

//  let [age, setAge] = useState(25);
//  let [salary, setSalary] =useState(10000);

//  let handleAge = useCallback(() =>
//  {
//   setAge(age + 1);
//  }, [age])

//  let handleSalary = useCallback(() =>
//  {
//   setSalary(salary + 10000)
//  },[salary]);
//   return (
//     <div align = "left">
//       <Title/>
//       <Count text = "Age" value = {age}/>
//       <Button func = {handleAge}>Increment Age</Button>
//       <Count text = "Salary" value = {salary}/>
//       <Button func = {handleSalary}> Increment Salary</Button>
//     </div>
//   )
// }

// export default App

//! 15-07-2026
//! Adding Styles

// import React from 'react'
// import Inline from './AddingStyles/Inline'
// import Global from './AddingStyles/Global'
// import "./global.css"
// import Header from './AddingStyles/Header'
// import NavBar from './AddingStyles/NavBar'

// function App() {
//   return (
//     <div>
//       {/* <Inline/>
//       <Global/>
//       <Header/> */}
//       <NavBar/>
//     </div>
//   )
// }

// export default App

//! NavBar Task
// import NavBar from './AddingStyles/NavBar'

// function App() {
//   return (
//     <div>
//       <NavBar/>
//     </div>
//   )
// }

// export default App

//! 17-07-2026
//! ControlledComponent

import React from "react";
import ControlledComponent from "./FormHandling/ControlledComponent";

function App() {
  return (
    <div>
      <ControlledComponent />
    </div>
  );
}

export default App;
