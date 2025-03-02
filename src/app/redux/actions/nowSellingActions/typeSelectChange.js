import nsconstants from "../../constants/NowSellingConstants";

const typeSelectChange = (payload) => {
  return { type: nsconstants.TYPE_SELECT_CHANGE, payload };
};

export default typeSelectChange;
