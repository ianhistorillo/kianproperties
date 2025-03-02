import cndconstants from "../../constants/CondominiumConstants";

const sellingSelectChange = (payload) => {
  return { type: cndconstants.SELLING_SELECT_CHANGE, payload };
};

export default sellingSelectChange;
