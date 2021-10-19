import React, { Component } from "react";

class TestComponent extends Component {
  constructor() {
    super();

    this.state = {
      message: "LPS1925",
      counter: 0,
    };
  }

  /// componentDidMount() -> useEffect(()=>{}, [])
  /// componentDidUpdate() -> useEffect(()=>{}, [dependencies])
  /// componentWillUnmount() -> useEffect(()=>{ return })

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <>
        {
          <h1>
            {`Hello from ${this.state.message}`}
            <div>
              {" "}
              <button onClick={() => this.increment()}>+</button>
              <button onClick={() => this.decrement()}>-</button>
            </div>
            <div>{this.state.counter}</div>
          </h1>
        }
      </>
    );
  }
}

export default TestComponent;
