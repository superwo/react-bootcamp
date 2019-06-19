import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: []
    };

    this.addBox = this.addBox.bind(this);
    this.remove = this.remove.bind(this);
  }

  addBox(box) {
    this.setState({
      boxes: [...this.state.boxes, box]
    });
  }
  remove(id) {
    this.setState({
      boxes: this.state.boxes.filter(box => box.id !== id)
    });
  }

  render() {
    return (
      <div>
        <h1>Color Box Maker Thingy</h1>
        <NewBoxForm addBox={this.addBox} />
        {this.state.boxes.map(box => (
          <Box {...box} key={box.id} remove={() => this.remove(box.id)} />
        ))}
      </div>
    );
  }
}

export default BoxList;
