import { Component } from "react";
import TodoList from "./components/TodoList";
import TodoForm, { SimpleTodo } from "./components/TodoForm"; /// named import
///import TestComponent from "./components/TestComponent";

const LOCALSTORAGE_KEY = "todos";

class App extends Component {
  constructor() {
    super();

    const localStorageTodos = window.localStorage.getItem("todos");

    this.state = {
      todos: localStorageTodos ? JSON.parse(localStorageTodos) : [],
    };
  }

  manageLocalStorage = (todosList) => {
    const jsonTodos = JSON.stringify(todosList);
    window.localStorage.setItem(LOCALSTORAGE_KEY, jsonTodos);
  };

  addToDo = (value) => {
    const newTodosList = [
      ...this.state.todos,
      {
        task: value,
        id: Date.now(),
        completed: false,
      },
    ];

    this.setState({ todos: newTodosList });
    this.manageLocalStorage(newTodosList);
  };

  markCompleted = (id) => {
    const updatedTodos = this.state.todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    this.setState({ todos: updatedTodos });
    this.manageLocalStorage(updatedTodos);
  };

  removeTodo = (event) => {
    event.preventDefault();
    const filteredTodos = this.state.todos.filter((todo) => {
      return todo.completed === false;
    });

    this.setState({ todos: filteredTodos });
    this.manageLocalStorage(filteredTodos);
  };

  render() {
    console.log("input:", this.state.inputValue);
    console.log("todos:", this.state.todos);
    return (
      <div className="App">
        <TodoForm addToDo={this.addToDo} removeTodo={this.removeTodo} />

        <TodoList todos={this.state.todos} markCompleted={this.markCompleted} />

        {/* <TestComponent /> */}
      </div>
    );
  }
}

export default App;
