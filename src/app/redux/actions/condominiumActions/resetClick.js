import cndconstants from "../../constants/CondominiumConstants";

const resetClick = (payload) => {
  return { type: cndconstants.RESET_CLICK, payload };
};

export default resetClick;
