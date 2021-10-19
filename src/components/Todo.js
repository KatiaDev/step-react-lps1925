import React, { Component } from "react";

class Todo extends Component {
  render() {
    return (
      <>
        <div
          style={{
            textDecoration: this.props.todo.completed ? "line-through" : "none",
          }}
          onClick={() => this.props.markCompleted(this.props.todo.id)}
        >
          {this.props.todo.task}
        </div>
      </>
    );
  }
}

export default Todo;
