import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { value, increment, decrement } = this.props;
    return <h1>Clicked: {value}</h1>;
  }
}

export default Counter;
