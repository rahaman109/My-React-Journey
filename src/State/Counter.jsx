import{ Component } from 'react'

class Counter extends Component {

  constructor()
  {
    super()
    this.state = {
      count : 0
    }
  }
  render() {
    return (
      <div>
        <h4>Count : {this.state.count}</h4>
        <button onClick={() =>
          {
            this.setState({
              count:this.state.count+1
            })
          }
        }>Increment</button>
        <br />
        <button onClick={() =>
          {
            this.setState({
              count:this.state.count-1
            })
          }
        }>Decrement</button>
        <br />
        <button onClick={() =>
          {
            this.setState({
              count:0
            })
          }
        }>Reset</button>
      </div>
    )
  }
}

export default  Counter
