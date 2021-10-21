import React, { Component } from "react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

class Todo extends Component {
  render() {
    return (
      <>
        <ListItem
          style={{
            textDecoration: this.props.todo.completed ? "line-through" : "none",
          }}
          onClick={() => this.props.markCompleted(this.props.todo.id)}
        >
          {this.props.todo.task}
        </ListItem>
      </>
    );
  }
}

export default Todo;
