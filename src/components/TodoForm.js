import React, { Component } from "react";

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
      <>
        <form>
          <input
            type="text"
            placeholder="Add Todo..."
            onChange={this.handleInputChange}
            value={this.state.inputValue}
          />
          <button onClick={this.handleButtonClick}>Add ToDo</button>
          <button onClick={this.props.removeTodo}>Remove ToDo</button>
        </form>
      </>
    );
  }
}

export default TodoForm;

export class SimpleTodo extends Component {
  render() {
    return <></>;
  }
}
