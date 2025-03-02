import halconstants from "../../constants/HouseAndLotConstants";

const sellingSelectChange = (payload) => {
  return { type: halconstants.SELLING_SELECT_CHANGE, payload };
};

export default sellingSelectChange;
