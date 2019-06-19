import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = { editing: false, text: this.props.text };

    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEdit() {
    this.setState({ editing: !this.state.editing });
  }

  handleTextChange(e) {
    this.setState({ text: e.target.value });
  }

  handleChange() {
    this.props.complete();
  }
  handleDelete() {
    this.props.delete();
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.changeText(this.props.id, this.state.text);
    this.handleEdit();
  }

  render() {
    const { id, text, completed } = this.props;
    const html = this.state.editing ? (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleTextChange}
          type='text'
          value={this.state.text}
        />
        <button>save</button>
      </form>
    ) : (
      <>
        <div>
          <input
            checked={completed}
            className='Todo-checkbox'
            type='checkbox'
            id={id}
            onChange={this.handleChange}
          />
          <label htmlFor={id}>{text}</label>
        </div>
        <div>
          <i onClick={this.handleEdit} className='fas fa-pencil-alt' />
          <i onClick={this.handleDelete} className='fas fa-trash' />
        </div>
      </>
    );
    return <div className='Todo'>{html}</div>;
  }
}

export default Todo;
