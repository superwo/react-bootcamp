import React, { Component } from 'react';
import ColorBox from './ColorBox';
import { generateRandomColor } from './utils';

import './ColorGrid.css';

class ColorGrid extends Component {
  static defaultProps = {
    arrl: 16
  };
  constructor(props) {
    super(props);

    this.state = {
      boxes: []
    };
    this.changeColor = this.changeColor.bind(this);
  }

  componentDidMount() {
    const boxes = Array.from({ length: this.props.arrl }).map((box, ind) => {
      return { name: `box${ind}`, color: generateRandomColor() };
    });
    this.setState({ boxes: boxes });
  }

  changeColor(prevColor) {
    let newColor = '';
    do {
      newColor = generateRandomColor();
    } while (prevColor === newColor);
    const newState = this.state.boxes.map(box => {
      if (box.color === prevColor) {
        box.color = newColor;
      }
      return box;
    });
    this.setState({ boxes: newState });
  }

  render() {
    const boxes = this.state.boxes.map(box => {
      return (
        <ColorBox
          changeColor={this.changeColor}
          color={box.color}
          key={box.name}
        />
      );
    });
    return <div className='ColorGrid'>{boxes}</div>;
  }
}

export default ColorGrid;
