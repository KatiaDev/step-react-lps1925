import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  render() {
    return (
      <>
        {this.props.todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              markCompleted={this.props.markCompleted}
            />
          );
        })}
      </>
    );
  }
}

export default TodoList;
