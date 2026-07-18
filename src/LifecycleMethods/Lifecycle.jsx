import { Component } from 'react'
import UnMount from './UnMount';

class Lifecycle extends Component {

  constructor(){
    super()
    this.state = {
      count: 0
    }

    console.log("Constructor method running");
  }

  componentDidMount()
  {
    console.log("Component did Mount method running")
  }
  componentDidUpdate()
  {
    console.log("Component did Update method running")
  }
  render() {
    console.log("Render method running")
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={() => {
          this.setState({
            count:this.state.count+1
          })
        }}>Increment</button>

        <br /><br />  
        {this.state.count <= 5 && <UnMount/>}
      </div>
    )
  }
}

export default Lifecycle
