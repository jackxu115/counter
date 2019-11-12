import React, { Component } from "react";
import { increment, decrement } from "../actions";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    const { value, increment, decrement } = this.props;
    return (
      <div>
        <h1>Count: {value}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    value: state.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => {
      dispatch(increment());
    },
    decrement: () => {
      dispatch(decrement());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
