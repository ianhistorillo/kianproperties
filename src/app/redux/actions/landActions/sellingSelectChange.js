import lfsconstants from "../../constants/LandConstants";

const sellingSelectChange = (payload) => {
  return { type: lfsconstants.SELLING_SELECT_CHANGE, payload };
};

export default sellingSelectChange;
