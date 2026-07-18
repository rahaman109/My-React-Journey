import React, { useContext } from 'react'
import { AnnouncementContext } from './Management'

function Student() {
  let annoncement = useContext(AnnouncementContext);
  return (
    <div>
      Student
      {annoncement}
    </div>
  )
}

export default Student