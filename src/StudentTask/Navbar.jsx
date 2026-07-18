import React from 'react'

function Navbar({image}) {
  return (
    <div>
      <img src={image} alt="logo" height={400}/>
      <br />
      <a href="#">Home</a>
      <a href="#">Course</a>
      <a href="#">Trainers</a>
      <a href="#">Contact</a>
    </div>
  )
}

export default Navbar