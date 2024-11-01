"use client"; // Ensure this is a Client Component

import lfsconstants from "../constants/LandConstants";

const landReducerInitialState = {
  sliders: {
    lotArea: {
      start: 0,
      middle: 100,
      end: 0,
    },
    houseArea: {
      start: 0,
      middle: 100,
      end: 0,
    },
    price: {
      start: 0,
      middle: 100,
      end: 0,
    },
  },
  items: [],
  loading: false,
  error: null,
};

const landReducer = (state = landReducerInitialState, action) => {
  let newState = null;
  switch (action.type) {
    case "FETCH_DATA_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_DATA_SUCCESS":
      return { ...state, loading: false, items: action.payload };
    case "FETCH_DATA_FAILURE":
      return { ...state, loading: false, error: action.payload };
    case lfsconstants.NOW_SELLING_PAYLOAD:
      newState = Object.assign({}, state, {
        count: state.count + action.payload,
      });
      break;
    default:
      newState = state;
      break;
  }

  return newState;
};

export default landReducer;
