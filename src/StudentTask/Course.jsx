import React from 'react'

function Course({course, duration, fees}) {
  return (
    <div>
      <h4>Course name : {course}</h4>
      <h4>Course Duration : {duration}</h4>
      <h4>Course Fees : {fees}</h4>
    </div>
  )
}

export default Course