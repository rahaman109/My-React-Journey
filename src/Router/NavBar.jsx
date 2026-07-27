// ! Link
// import React from 'react'
// import { Link } from 'react-router-dom'

// function NavBar() {
//   return (
//     <div>
      // <nav>
      //   <Link to="/">Home</Link>
      //   <Link to="/about">About</Link>
      //   <Link to="/Contact">Contact</Link>
      // </nav>
//     </div>
//   )
// }

// export default NavBar


//! NavLink

import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
      </nav>
    </div>
  )
}

export default NavBar
