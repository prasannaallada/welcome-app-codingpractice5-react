// Write your code here

import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {isSubscribe: 'Subscribe'}

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribe: 'Subscribed'}))
  }

  onSubscribed = () => {
    this.setState(prevState => ({isSubscribe: 'Subscribe'}))
  }

  renderAuthbutton = () => {
    const {isSubscribe} = this.state
    if (isSubscribe === 'Subscribe') {
      return (
        <button type="button" className="btn" onClick={this.onSubscribe}>
          {isSubscribe}
        </button>
      )
    }
    return (
      <button type="button" className="btn" onClick={this.onSubscribed}>
        {isSubscribe}
      </button>
    )
  }

  render() {
    const {isSubscribe} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        {this.renderAuthbutton()}
      </div>
    )
  }
}

export default Welcome
