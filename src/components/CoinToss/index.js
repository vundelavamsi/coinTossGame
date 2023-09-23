// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    tossResultImg: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onClickToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    console.log(tossResult)
    if (tossResult === 0) {
      this.setState(prevState => ({
        tossResultImg: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
        total: prevState.total + 1,
        heads: prevState.heads + 1,
      }))
    } else {
      this.setState(prevState => ({
        tossResultImg: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
        total: prevState.total + 1,
        tails: prevState.tails + 1,
      }))
    }
  }

  render() {
    const {total, heads, tails, tossResultImg} = this.state
    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={tossResultImg} className="toss-image" alt="toss result" />
          <button
            type="button"
            className="toss-button"
            onClick={this.onClickToss}
          >
            Toss Coin
          </button>
          <p>Total: {total}</p>
          <p>Heads: {heads}</p>
          <p>Tails: {tails}</p>
        </div>
      </div>
    )
  }
}

export default CoinToss
