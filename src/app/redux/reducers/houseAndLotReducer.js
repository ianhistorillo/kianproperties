"use client"; // Ensure this is a Client Component

import halconstants from "../constants/HouseAndLotConstants";

const houseAndLotReducerInitialState = {
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

function searchList(list, search) {
  let flist = list;

  // filter the array to apply price restrictions.
  flist = Object.values(flist).filter((pck) => {
    if (
      parseInt(pck.price) >= search.price.current.low &&
      parseInt(pck.price) <= search.price.current.high
    )
      return pck;
  });

  // filter the array to apply frontage restrictions.
  // flist = Object.values(flist).filter((pck) => {
  //   if (
  //     pck.floorArea >= search.floorArea.current.low &&
  //     pck.floorArea <= search.floorArea.current.high
  //   )
  //     return pck;
  // });

  // filter the array to apply area restrictions.
  // flist = Object.values(flist).filter((pck) => {
  //   if (
  //     pck.houseArea >= search.houseArea.current.low &&
  //     pck.houseArea <= search.houseArea.current.high
  //   )
  //     return pck;
  // });

  // filter the array to apply bed restrictions.
  if (search.bed.selected !== "0") {
    flist = Object.values(flist).filter((pck) => {
      console.log(search.bed.selected);
      if (parseInt(pck.bed) === parseInt(search.bed.selected)) return pck;
    });
  }

  // filter the array to apply bath restrictions.
  if (search.bath.selected !== "0") {
    flist = Object.values(flist).filter((pck) => {
      if (parseInt(pck.bath) === parseInt(search.bath.selected)) return pck;
    });
  }

  // filter the array to apply car restrictions.
  flist = Object.values(flist).filter((pck) => {
    if (parseInt(pck.car, 10) >= parseInt(search.car.selected, 10)) return pck;
  });

  // filter the array to apply lot restrictions.
  // if(search.stages.selected !== "") {
  // 	flist = flist.filter((pck) => {
  // 		if(pck.stage_slug === search.stages.selected)
  // 			return pck;
  // 	});
  // }

  // filter the array to apply lot restrictions.
  // if(search.precincts.selected !== "") {
  // 	flist = flist.filter((pck) => {
  // 		if(pck.precinct_slug === search.precincts.selected)
  // 			return pck;
  // 	});
  // }

  // return list of filtered lots
  return flist;
}

const houseAndLotReducer = (state = houseAndLotReducerInitialState, action) => {
  let newState = null;
  let sliderchg = null;
  let searchchg = null;
  let newPos = null;
  let displayList = null;

  switch (action.type) {
    case halconstants.HOUSE_AND_LOT_PAYLOAD:
      newState = Object.assign({}, state, {
        list: action.payload.list,
        filteredlist: action.payload.list,
        search: action.payload.search,
      });
      break;
    case "FETCH_DATA_FAILURE":
      return { ...state, loading: false, error: action.payload };

    case halconstants.SLIDER_CHANGE_PRICE:
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

    case halconstants.SLIDER_CHANGE_HOUSE_AREA:
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
    case halconstants.SLIDER_CHANGE_LOT_AREA:
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

    case halconstants.BED_SELECT_CHANGE:
      // Create a new object for the search element, ensuring no mutation
      searchchg = {
        ...state.search, // Shallow copy of price
        bed: {
          ...state.search.bed,
          selected: action.payload, // Shallow copy of price
        },
      };

      // Return the new state without mutating the original state
      newState = {
        ...state,
        search: searchchg,
      };

      break;

    case halconstants.BATH_SELECT_CHANGE:
      // Create a new object for the search element, ensuring no mutation
      searchchg = {
        ...state.search, // Shallow copy of price
        bath: {
          ...state.search.bath,
          selected: action.payload, // Shallow copy of price
        },
      };

      // Return the new state without mutating the original state
      newState = {
        ...state,
        search: searchchg,
      };

      break;

    case halconstants.CAR_SELECT_CHANGE:
      // Create a new object for the search element, ensuring no mutation
      searchchg = {
        ...state.search, // Shallow copy of price
        car: {
          ...state.search.car,
          selected: action.payload, // Shallow copy of price
        },
      };

      // Return the new state without mutating the original state
      newState = {
        ...state,
        search: searchchg,
      };

      break;

    case halconstants.SEARCH_CLICK:
      // Create a new object for the search element, ensuring no mutation

      displayList = searchList(state.list, state.search);

      // Return the new state without mutating the original state
      newState = {
        ...state,
        filteredlist: displayList,
        displaysearchresults: true,
      };

      break;

    case halconstants.RESET_CLICK:
      // Create a new object for the search element, ensuring no mutation
      searchchg = {
        ...state.search,
        price: {
          ...state.search.price,
          selected: state.search.price.original,
        },
        houseArea: {
          ...state.search.houseArea,
          selected: state.search.houseArea.original,
        },
        floorArea: {
          ...state.search.floorArea,
          selected: state.search.floorArea.original,
        },
        bed: {
          ...state.search.bed,
          selected: state.search.bed.options[0],
        },
        bath: {
          ...state.search.bath,
          selected: state.search.bath.options[0],
        },
        car: {
          ...state.search.car,
          selected: state.search.car.options[0],
        },
      };

      sliderchg = {
        floorArea: { start: 0, middle: 100, end: 0 },
        houseArea: { start: 0, middle: 100, end: 0 },
        price: { start: 0, middle: 100, end: 0 },
      };

      displayList = state.list;

      // Return the new state without mutating the original state
      newState = {
        ...state,
        search: searchchg,
        sliders: sliderchg,
        filteredlist: displayList,
      };

      break;

    default:
      newState = state;
      break;
  }

  return newState;
};

export default houseAndLotReducer;
