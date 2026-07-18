import { Component } from 'react'

class UnMount extends Component {

  componentWillUnmount()
  {
    console.log("Component will unmounted....")
  }
  render() {
    return (
      <div>UnMount</div>
    )
  }
}

export default UnMount
