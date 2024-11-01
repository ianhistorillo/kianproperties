// app/components/CounterComponent.js
"use client"; // Ensure this is a Client Component

import React from "react";
import { connect } from "react-redux";

const CounterComponent = ({ value, increment, decrement }) => {
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

// Map Redux state to component props
const mapStateToProps = (state) => ({
  value: state.counter.value,
});

// Map dispatch to props
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: "INCREMENT" }),
  decrement: () => dispatch({ type: "DECREMENT" }),
});

// Connect the component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
