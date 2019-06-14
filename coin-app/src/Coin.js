import React, { Component } from 'react';

class Coin extends Component {
  render() {
    return (
      <div>
        {this.props.img && (
          <img
            src={this.props.img}
            style={{ display: 'block', margin: '50px auto', width: '300px' }}
            alt='Coin'
          />
        )}

        <button onClick={this.props.flip}>FLIP MEEE</button>
      </div>
    );
  }
}

export default Coin;
