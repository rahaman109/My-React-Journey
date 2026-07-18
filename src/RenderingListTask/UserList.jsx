import React from 'react'

function UserList({data:{userName, userAge}}) {
  return (
    <>
      {
        <div align = "left">
          <h2>Here User Details</h2>
          <h4>User name : {userName}</h4>
          <h4>User Age : {userAge}</h4>
          <hr />
        </div>
      }
    </>
  )
}

export default UserList