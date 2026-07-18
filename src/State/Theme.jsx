import { Component } from 'react'

class Theme extends Component {

  constructor(){
    super()
    this.state = {
      islightTheme: true
    }
  }

  handleTheme = () =>
  {
    this.setState({
      islightTheme : !(this.state.islightTheme)
    })
  }

  render() {
    return (
      <div>
        <h1>Theme : {this.state.islightTheme ? "Light" : "Dark"}</h1>
        <button onClick={this.handleTheme}>
          {this.state.islightTheme ? "Change To Dark Theme" : "Change to Light Theme"}</button>
      </div>
    )
  }
}

export default Theme