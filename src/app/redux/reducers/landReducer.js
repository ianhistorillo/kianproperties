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

    case lfsconstants.SLIDER_CHANGE_PRICE:
      // Do our calculations to work out our new positions
      newPos = calcNewSliderValues(action.payload, state.search.price);

      // Create a new object for the search element, ensuring no mutation
      searchchg = {
        ...state.search, // Shallow copy of search
        price: {
          ...state.search.price, // Shallow copy of price
          current: {
            low: newPos.search.low,
            high: newPos.search.high,
          },
        },
      };

      // Create a new object for the slider element, ensuring no mutation
      sliderchg = {
        ...state.sliders, // Shallow copy of sliders
        price: {
          start: newPos.slider.start,
          middle: newPos.slider.middle,
          end: newPos.slider.end,
        },
      };

      // Return the new state without mutating the original state
      newState = {
        ...state,
        search: searchchg,
        sliders: sliderchg,
      };

      break;

    // Handle other cases similarly...

    case lfsconstants.SLIDER_CHANGE_HOUSE_AREA:
      // do our calculations to work out our new positions
      newPos = calcNewSliderValues(action.payload, state.search.houseArea);
      // create a new object for the search element

      // Create a new object for the search element, ensuring no mutation
      searchchg = {
        ...state.search, // Shallow copy of search
        houseArea: {
          ...state.search.houseArea, // Shallow copy of houseArea
          current: {
            low: newPos.search.low,
            high: newPos.search.high,
          },
        },
      };

      // Create a new object for the slider element, ensuring no mutation
      sliderchg = {
        ...state.sliders, // Shallow copy of sliders
        houseArea: {
          start: newPos.slider.start,
          middle: newPos.slider.middle,
          end: newPos.slider.end,
        },
      };

      // Return the new state without mutating the original state
      newState = {
        ...state,
        search: searchchg,
        sliders: sliderchg,
      };

      break;
    case lfsconstants.SLIDER_CHANGE_LOT_AREA:
      // do our calculations to work out our new positions
      newPos = calcNewSliderValues(action.payload, state.search.floorArea);
      // create a new object for the search element
      // Create a new object for the search element, ensuring no mutation
      searchchg = {
        ...state.search, // Shallow copy of search
        floorArea: {
          ...state.search.floorArea, // Shallow copy of price
          current: {
            low: newPos.search.low,
            high: newPos.search.high,
          },
        },
      };

      // Create a new object for the slider element, ensuring no mutation
      sliderchg = {
        ...state.sliders, // Shallow copy of sliders
        floorArea: {
          start: newPos.slider.start,
          middle: newPos.slider.middle,
          end: newPos.slider.end,
        },
      };

      // Return the new state without mutating the original state
      newState = {
        ...state,
        search: searchchg,
        sliders: sliderchg,
      };

      break;
    default:
      newState = state;
      break;
  }

  return newState;
};

export default landReducer;
