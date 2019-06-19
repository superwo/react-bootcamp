import React, { Component } from 'react';
import './TodoList.css';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    };

    this.changeText = this.changeText.bind(this);
    this.insertTask = this.insertTask.bind(this);
  }

  changeText(id, text) {
    const tasksCopy = this.state.tasks.map(task => {
      if (task.id === id) {
        task.text = text;
      }
      return task;
    });
    this.setState({ tasks: tasksCopy });
  }

  insertTask(task) {
    const copyTasks = [...this.state.tasks];
    copyTasks.push(task);
    this.setState({ tasks: copyTasks });
  }

  deleteTask(id) {
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== id)
    });
  }

  completeTask(id) {
    const tasksCopy = this.state.tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    this.setState({ tasks: tasksCopy });
  }

  render() {
    let tasks = this.state.tasks.map(task => (
      <Todo
        {...task}
        complete={() => this.completeTask(task.id)}
        key={task.id}
        changeText={this.changeText}
        delete={() => this.deleteTask(task.id)}
      />
    ));
    return (
      <div className='TodoList'>
        <h1>Todo List!</h1>
        <p>A Simple React Todo List App.</p>
        <br />

        {tasks}

        <NewTodoForm insert={this.insertTask} />
      </div>
    );
  }
}

export default TodoList;
