// Write your code here
import './index.css'
import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  onBut = () => {
    this.setState(prevState => {
      console.log(`Button Pressed ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The button has been clicked <span className="count">{count}</span>{' '}
          times
        </h1>
        <p className="para">Click the button to increase the count</p>
        <button type="button" className="button" onClick={this.onBut}>
          Click Me!
        </button>
      </div>
    )
  }
}
export default ClickCounter
