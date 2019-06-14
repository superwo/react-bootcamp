import React, { Component } from 'react';
import './ColorBox.css';

class ColorBox extends Component {
  render() {
    return (
      <div
        className='ColorBox'
        onClick={() => this.props.changeColor(this.props.color)}
        style={{ backgroundColor: this.props.color }}
      >
        {this.props.color}
      </div>
    );
  }
}

export default ColorBox;
