import nsconstants from "../../constants/NowSellingConstants";

const searchClick = (payload) => {
  return { type: nsconstants.SEARCH_CLICK, payload };
};

export default searchClick;
