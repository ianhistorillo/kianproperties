import cndconstants from "../../constants/CondominiumConstants";

const searchClick = (payload) => {
  return { type: cndconstants.SEARCH_CLICK, payload };
};

export default searchClick;
