"use client";

// reducers/index.js
import { combineReducers } from "redux";
import landReducer from "./landReducer";
import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
  example: counterReducer,
  landreducer: landReducer,
  // add other reducers here
});

export default rootReducer;
