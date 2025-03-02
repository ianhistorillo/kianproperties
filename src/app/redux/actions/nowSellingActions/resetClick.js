import nsconstants from "../../constants/NowSellingConstants";

const resetClick = (payload) => {
  return { type: nsconstants.RESET_CLICK, payload };
};

export default resetClick;
