import React, { Component } from "react";

class FakeTodos extends Component {
  state = {
    fakeTodos: [],
    isButtonClicked: false,
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => this.setState({ fakeTodos: json }));
    console.log("COMPONENT DID MOUNT!!!");
  }

  componentDidUpdate() {
    if (this.state.isButtonClicked) {
      console.log("COMPONENT DID UPDATE!!!");
    }
  }

  render() {
    //console.log("fake", this.state.fakeTodos);
    return (
      <>
        <h1>Fake Todos</h1>
        <button onClick={() => this.setState({ isButtonClicked: true })}>
          Click Me
        </button>
        {this.state.fakeTodos.map((todo) => {
          return (
            <div key={todo.id} style={{ margin: "50px" }}>
              <p>TodoId: {todo.id}</p>
              <p>Title: {todo.title}</p>
              <p>userId: {todo.userId}</p>
              <p>Completed: {todo.completed ? "True" : "False"}</p>
            </div>
          );
        })}
      </>
    );
  }
}

export default FakeTodos;
