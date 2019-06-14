import React, { Component } from 'react';
import Coin from './Coin';

class CoinFlipper extends Component {
  static defaultProps = {
    headImg:
      'https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg',
    tailImg: 'http://www.pcgscoinfacts.com/UserImages/71009269r.jpg'
  };

  constructor(props) {
    super(props);
    this.state = {
      heads: 0,
      tails: 0,
      curImg: ''
    };
    this.flipHandler = this.flipHandler.bind(this);
  }

  flipHandler() {
    const curInd = Math.floor(Math.random() * 2);
    if (curInd) {
      this.setState(st => {
        return { tails: st.tails + 1, curImg: this.props.tailImg };
      });
    } else {
      this.setState(st => {
        return { heads: st.heads + 1, curImg: this.props.headImg };
      });
    }
  }

  render() {
    let { heads, tails, curImg } = this.state;
    return (
      <div>
        <h1>Let's flip a coin!</h1>
        <Coin flip={this.flipHandler} img={this.state.curImg} />
        <p>
          Out of {heads + tails} flips, there have been {heads} heads and{' '}
          {tails} tails.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
