import nsconstants from "../../constants/NowSellingConstants";

const bathSelectChange = (payload) => {
  return { type: nsconstants.BATH_SELECT_CHANGE, payload };
};

export default bathSelectChange;
