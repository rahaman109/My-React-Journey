import React, { useEffect } from 'react'

function UnMount() {
  // useEffect(() =>
  // {
  //   console.log("UseEffect running like as a componentWillUnmount...")
  // }, [])

  useEffect(() =>
  {
    let timer = setInterval(() =>
    {
      console.log("Hello");
    }, 1000)
    return () =>
    {
      clearInterval(timer);
    }
  })
  return (
    <div>
      <h4>Iam Unmount</h4>
    </div>
  )
}

export default UnMount