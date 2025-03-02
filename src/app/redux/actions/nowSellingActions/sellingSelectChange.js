import nsconstants from "../../constants/NowSellingConstants";

const sellingSelectChange = (payload) => {
  return { type: nsconstants.SELLING_SELECT_CHANGE, payload };
};

export default sellingSelectChange;
