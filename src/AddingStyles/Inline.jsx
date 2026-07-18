

//! Example 

import React, { useState } from 'react'
function Inline() {

  let [mode, setMode] = useState(true);

  let stylepara = {
    color: "yellow",
    backgroundColor: "green",
    padding:"2rem"
  }
  let handleMode = () =>
  {
    setMode(!mode)
  }

  let darkModeStyle = {
    color:"white",
    backgroundColor:"black",
    padding:"5px"
  }
  
  let lightModeStyle = {
    color:"black",
    backgroundColor:"white",
    padding:"5px"
  }
  


  return (
    <div>
      <h1 style={{color:"red", }}>Hello Guys...</h1>
      <p style={stylepara}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis fuga libero tenetur accusantium sed esse numquam vitae. Quaerat saepe quod facere praesentium impedit quidem rem id, harum, ipsam, nostrum doloremque.</p>
      <br />
      <button onClick={handleMode} style={mode? darkModeStyle : lightModeStyle}>{mode? "Dark Mode" : "Light Mode"}</button>
    </div>
  )
}

export default Inline