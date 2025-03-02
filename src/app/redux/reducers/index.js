"use client";

// reducers/index.js
import { combineReducers } from "redux";
import landReducer from "./landReducer";
import counterReducer from "./counterReducer";
import nowSellingReducer from "./nowSellingReducer";
import houseAndLotReducer from "./houseAndLotReducer";
import condominiumReducer from "./condominiumReducer";

const rootReducer = combineReducers({
  example: counterReducer,
  nowselling: nowSellingReducer,
  land: landReducer,
  houseandlot: houseAndLotReducer,
  condominium: condominiumReducer,
  // add other reducers here
});

export default rootReducer;
