import React, { Component } from 'react';
import './NewTodoForm.css';
import uuid from 'uuid/v4';

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.text.trim().length > 0) {
      const newTask = {
        id: uuid(),
        text: this.state.text,
        completed: false
      };

      this.props.insert(newTask);
      this.setState({ text: '' });
    }
  }

  render() {
    return (
      <div className='NewTodoForm'>
        <h3>New Todo</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.text}
            onChange={this.handleChange}
            type='text'
            placeholder='New Todo'
          />
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}

export default NewTodoForm;
