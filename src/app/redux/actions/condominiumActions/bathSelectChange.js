import cndconstants from "../../constants/CondominiumConstants";

const bathSelectChange = (payload) => {
  return { type: cndconstants.BATH_SELECT_CHANGE, payload };
};

export default bathSelectChange;
