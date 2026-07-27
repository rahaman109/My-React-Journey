import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

const Dashboard = () => {
  let navigate = useNavigate()
  let handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    navigate("/login")
  }
  return (
    <div>
      <h1>Dashboard Page</h1>
      <h1>Welcome User</h1>
      <button onClick={handleLogout}>Logout</button>
      <nav>
        <NavLink to="profile">Profile</NavLink>
        <NavLink to="services">Services</NavLink>
        <NavLink to="orders">Orders</NavLink>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Dashboard