import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => navigate("/about")}>Go to about page</button>
      <button onClick={() => navigate("/contact", { state: { email: "modelmonty@gmail.com", phone: 9876543210 } })}>Go to Contact Page</button>
      <hr />
      <button onClick={()=>navigate("/student/101/Rahul")}>Student 101</button>
      <button onClick={()=>navigate("/student/102/Monty")}>Student 102</button>
      <button onClick={()=>navigate("/student/103/Pavan")}>Student 103</button>
    </>
  )
}
export default Home