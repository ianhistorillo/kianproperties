import lfsconstants from "../../constants/LandConstants";

const searchClick = (payload) => {
  return { type: lfsconstants.SEARCH_CLICK, payload };
};

export default searchClick;
