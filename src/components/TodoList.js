import React, { Component } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import {
  List,
  ListItem,
  Container,
  ListIcon,
  OrderedList,
  UnorderedList,
  Box,
} from "@chakra-ui/react";

class TodoList extends Component {
  componentWillUnmount() {
    console.log("COMPONENT WILL UNMOUNT!!!");
    window.localStorage.removeItem("todos");
  }

  render() {
    return (
      <Container>
        <TodoForm
          addToDo={this.props.addToDo}
          removeTodo={this.props.removeTodo}
        />
        <Box border="2px solid gray" borderRadius="5px" m="10px">
          <OrderedList textAlign="left" mt="20px">
            {this.props.todos.map((todo) => {
              return (
                <Todo
                  key={todo.id}
                  todo={todo}
                  markCompleted={this.props.markCompleted}
                />
              );
            })}{" "}
          </OrderedList>
        </Box>
      </Container>
    );
  }
}

export default TodoList;
