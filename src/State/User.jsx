import { Component } from 'react'

class User extends Component {

  constructor()
  {
    super()
    this.state = 
    {
      name:"Rahaman",
      age: 21
    }
  }

  handleInfo = () =>
  {
    this.setState({
      name:"Sai",
      age:22
    })
  }
  render() {
    return (
      <div>
        <h4>Name: {this.state.name}</h4>
        <h4>Age: {this.state.age}</h4>
        {/* <button onClick={() =>
          {
            this.setState({
              name:"Sai",
              age:22
            })
          }
        }>Change Info</button> */}

        <button onClick={this.handleInfo}> Change Info </button>
      </div>
    )
  }
}


export default User
