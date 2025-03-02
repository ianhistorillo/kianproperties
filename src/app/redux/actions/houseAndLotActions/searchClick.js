import halconstants from "../../constants/HouseAndLotConstants";

const searchClick = (payload) => {
  return { type: halconstants.SEARCH_CLICK, payload };
};

export default searchClick;
