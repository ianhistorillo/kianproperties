"use client";

// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import counterReducer from "./reducers/counterReducer";
import landReducer from "./reducers/landReducer";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    nowselling: landReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
