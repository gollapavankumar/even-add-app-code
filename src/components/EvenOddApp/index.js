import './index.css'

import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0}

  getEvenOrOdd = () => {
    const {count} = this.state
    return count % 2 === 0 ? 'Even' : 'Odd'
  }

  getRandNum = () => parseInt(Math.random() * 100)

  increment = () => {
    const count = this.getRandNum()
    this.setState(prevState => ({count: prevState.count + count}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="evenOddApp-bg-container">
        <div className="evenOddApp-container">
          <h1 className="evenOddApp-count-heading">Count {count}</h1>
          <p className="evenOddApp-count-para">
            Count is {this.getEvenOrOdd()}
          </p>
          <button
            type="button"
            onClick={this.increment}
            className="increment-btn"
          >
            Increment
          </button>
          <p className="evenOddApp-para">
            Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
