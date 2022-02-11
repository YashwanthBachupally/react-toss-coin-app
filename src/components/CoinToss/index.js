// Write your code here

import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {headsImg: true, total: 0, heads: 0, tails: 0}

  turnToss = () => {
    const tossVal = Math.random() >= 0.5
    this.setState({headsImg: tossVal})
    this.setState(prev => ({
      total: prev.total + 1,
    }))
    if (tossVal) {
      this.setState(prev => ({
        heads: prev.heads + 1,
      }))
    } else {
      this.setState(prev => ({
        tails: prev.tails + 1,
      }))
    }
  }

  render() {
    const {headsImg, total, heads, tails} = this.state
    return (
      <div className="app-cont">
        <div className="card-cont">
          <h1 className="head">Coin Toss Game</h1>
          <p className="name">Heads (or) Tails</p>
          <img
            src={
              headsImg
                ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
            }
            alt="toss result"
            className="toss-img"
          />
          <button type="button" onClick={this.turnToss}>
            Toss Coin
          </button>
          <div className="results">
            <p className="total">Total: {total}</p>
            <p className="heads">Heads: {heads}</p>
            <p className="tails">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
