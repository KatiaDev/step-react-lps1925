import React, { Component } from "react";
import { Button, Input, Container, Box } from "@chakra-ui/react";

class TodoForm extends Component {
  state = {
    inputValue: "",
  };

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({ inputValue: event.target.value });
  };

  handleButtonClick = (event) => {
    event.preventDefault();
    this.props.addToDo(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  render() {
    return (
      <Container mt="20px" border="1px solid gray" borderRadius="5px">
        <form onSubmit={this.handleButtonClick}>
          <Box m="10px">
            <Input
              type="text"
              placeholder="Add Todo..."
              onChange={this.handleInputChange}
              value={this.state.inputValue}
            />
          </Box>
          <Button m="5px" colorScheme="blue" type="submit">
            Add ToDo
          </Button>
          <Button m="5px" colorScheme="red" onClick={this.props.removeTodo}>
            Remove ToDo
          </Button>
        </form>
      </Container>
    );
  }
}

export default TodoForm;

export class SimpleTodo extends Component {
  render() {
    return <></>;
  }
}
