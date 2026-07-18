import React from 'react'

function Student({course, coursePrice, passingYear, children}) {
  return (
    <div>
      <h1>Course Name : {course}</h1>
      <h3>Course Price : {coursePrice}</h3>
      <h4>Year of passout : {passingYear}</h4>
      {children}
    </div>
  )
}

export default Student