import React from 'react'

function Footer({ company, children}) {
  return (
    <div>
      <h4>Company name: {company}</h4>
      {children}
    </div>
  )
}

export default Footer