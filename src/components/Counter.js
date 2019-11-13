import React, { Component } from "react";
import { increment, decrement, reset } from "../actions";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    const { value, increment, decrement, reset } = this.props;
    return (
      <div>
        <h1>Count: {value}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    value: state.count,
    amount: state.input
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => {
      dispatch(increment());
    },
    decrement: () => {
      dispatch(decrement());
    },
    reset: () => {
      dispatch(reset());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
