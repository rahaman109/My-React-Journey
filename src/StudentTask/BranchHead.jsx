import React from 'react'
import Student from './Student'

function BranchHead({batch,yop,placement}) {
  return (
    <div>
      <Student batchCode  = {batch} Yop = {yop} place = {placement}>
        <h4>Note : "Admissions Closing Soon" </h4>
      </Student>
    </div>
  )
}

export default BranchHead