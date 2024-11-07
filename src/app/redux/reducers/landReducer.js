"use client"; // Ensure this is a Client Component

import lfsconstants from "../constants/LandConstants";

const landReducerInitialState = {
  sliders: {
    floorArea: {
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
  list: [], // Ensure list is part of the initial state
  filteredlist: [], // Can be used for filtered results
  search: [],
  loading: false,
  error: null,
  displaysearchresults: false,
};

function calcNewSliderValues(cSlide, cValues) {
  // work out our constant values
  let w = cValues.original.high - cValues.original.low; // work our our shifted highpoint to determine value of 100%
  let x = w / 100; // work out what 1% of the highpoint value is
  let y = w / cValues.step; // work out a constant for the step

  // calculate new slider position values fixed to steps
  let newSlideStart = sliderPositionFormula(cSlide[0], x, y);
  let newSlideMiddle =
    sliderPositionFormula(cSlide[0] + cSlide[1], x, y) - newSlideStart;
  let newSlideEnd = 100 - (newSlideStart + newSlideMiddle);

  // calculate our new display values fixed to steps
  let newValueLow =
    sliderValueFormula(newSlideStart, x, cValues.step) + cValues.original.low;
  let newValueHigh =
    sliderValueFormula(newSlideStart + newSlideMiddle, x, cValues.step) +
    cValues.original.low;

  // structure response
  let newValues = {
    search: {
      low: newValueLow,
      high: newValueHigh,
    },
    slider: {
      start: newSlideStart,
      middle: newSlideMiddle,
      end: newSlideEnd,
    },
  };
  return newValues;
}

function sliderPositionFormula(a, x, y) {
  if (x < 1) {
    //when x < 1 it creates an issue with rounding the numbers, so we multiple and divide by 10 in places to account for this
    return ((Math.round(((a * x) / y) * 10) / 10) * y) / x;
  } else {
    return (Math.round((a * x) / y) * y) / x;
  }
}

function sliderValueFormula(a, x, z) {
  return Math.round((a * x) / z) * z;
}

const landReducer = (state = landReducerInitialState, action) => {
  let newState = null;
  let sliderchg = null;
  let searchchg = null;
  let newPos = null;
  let displayPackages = null;

  switch (action.type) {
    case lfsconstants.NOW_SELLING_PAYLOAD:
      newState = Object.assign({}, state, {
        list: action.payload.list,
        filteredlist: action.payload.list,
        search: action.payload.search,
      });
      break;
    case "FETCH_DATA_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      newState = state;
      break;
  }

  return newState;
};

export default landReducer;
