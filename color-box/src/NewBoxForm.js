import React, { Component } from 'react';
import uuid from 'uuid/v4';

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: '',
      width: '',
      bgColor: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();

    const newBox = { ...this.state, id: uuid() };

    this.props.addBox(newBox);
    this.setState({
      height: '',
      width: '',
      bgColor: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='height'>Height: </label>
        <input
          type='text'
          id='height'
          name='height'
          value={this.state.height}
          onChange={this.handleChange}
        />
        <label htmlFor='width'>Width: </label>
        <input
          type='text'
          id='width'
          name='width'
          value={this.state.width}
          onChange={this.handleChange}
        />
        <label htmlFor='bgColor'>Background Color: </label>
        <input
          type='text'
          id='bgColor'
          name='bgColor'
          value={this.state.bgColor}
          onChange={this.handleChange}
        />
        <button>Add a box!</button>
      </form>
    );
  }
}

export default NewBoxForm;
