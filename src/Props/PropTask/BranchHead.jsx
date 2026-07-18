import React from 'react'
import Student from './Student'

function BranchHead({courseName, price, yop}) {
  return (
    <div>
      <Student course = {courseName} coursePrice = {price} passingYear = {yop}>
        <h1>Note: Offer closes soon</h1>
      </Student>
    </div>
  )
}

export default BranchHead