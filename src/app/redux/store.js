"use client";

// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import counterReducer from "./reducers/counterReducer";
import landReducer from "./reducers/landReducer";
import nowSellingReducer from "./reducers/nowSellingReducer";
import houseAndLotReducer from "./reducers/houseAndLotReducer";
import condominiumReducer from "./reducers/condominiumReducer";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    nowselling: nowSellingReducer,
    land: landReducer,
    houseandlot: houseAndLotReducer,
    condominium: condominiumReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
