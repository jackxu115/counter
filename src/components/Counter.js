import React from "react";
import { increment, decrement, reset } from "../actions";
import { connect } from "react-redux";

const Counter = ({ value, increment, decrement, reset }) => (
  <div>
    <h1>Count: {value}</h1>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    <button onClick={reset}>Reset</button>
    <input type="number"></input>
    <button>+</button>
  </div>
);

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
    },
    reset: () => {
      dispatch(reset());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
