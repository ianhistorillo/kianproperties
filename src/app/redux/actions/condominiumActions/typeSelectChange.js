import cndconstants from "../../constants/CondominiumConstants";

const typeSelectChange = (payload) => {
  return { type: cndconstants.TYPE_SELECT_CHANGE, payload };
};

export default typeSelectChange;
