import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  let navigate = useNavigate()
  let handleLogin = () => {
    localStorage.setItem("isLoggedIn",true)
    navigate("/dashboard")
  }
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Go To Dashboard</button>
    </div>
  )
}

export default Login