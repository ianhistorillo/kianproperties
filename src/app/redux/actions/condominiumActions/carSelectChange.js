import cndconstants from "../../constants/CondominiumConstants";

const carSelectChange = (payload) => {
  return { type: cndconstants.CAR_SELECT_CHANGE, payload };
};

export default carSelectChange;
