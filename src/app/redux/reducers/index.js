"use client";

// reducers/index.js
import { combineReducers } from "redux";
import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
  example: counterReducer,
  // add other reducers here
});

export default rootReducer;
